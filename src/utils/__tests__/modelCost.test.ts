import { describe, expect, test } from 'bun:test'

// NOTE: Cannot import modelCost.ts directly due to a Bun Windows crash
// (circular dependency triggers segfault in bun test on Windows).
// Integration tests covering the real module are in scripts/test_modelcost.ts
// which runs via "bun run scripts/test_modelcost.ts"
//
// These inline tests verify the core tokensToCost math and convertCurrency logic.

const RATES: Record<string, number> = { 'USD→CNY': 7.25, 'CNY→USD': 0.138 }

function tokensToCost(
  inputTokens: number, outputTokens: number,
  cacheRead: number, cacheWrite: number,
  inputPrice: number, outputPrice: number,
  cacheReadPrice: number, cacheWritePrice: number,
): number {
  const supportsCache = cacheReadPrice > 0 || cacheWritePrice > 0
  const nonCachedInput = supportsCache
    ? Math.max(0, inputTokens - cacheRead - cacheWrite)
    : inputTokens
  return (
    (nonCachedInput / 1_000_000) * inputPrice +
    (outputTokens / 1_000_000) * outputPrice +
    (supportsCache ? (cacheRead / 1_000_000) * cacheReadPrice : 0) +
    (supportsCache ? (cacheWrite / 1_000_000) * cacheWritePrice : 0)
  )
}

function convertCurrencyInlined(amount: number, from: string, to: string): number {
  if (from === to) return amount
  const key = `${from}→${to}`
  const rate = RATES[key]
  if (rate !== undefined) return amount * rate
  if (from !== 'CNY' && to !== 'CNY') {
    const toCNY = RATES[`${from}→CNY`]
    const fromCNY = RATES[`CNY→${to}`]
    if (toCNY !== undefined && fromCNY !== undefined) return amount * toCNY * fromCNY
  }
  return amount
}

// Pricing tiers (matches modelCost.ts)
const DS_V4_FLASH = { i: 1, o: 2, cr: 0.02, cw: 0 }
const DS_V4_PRO = { i: 3, o: 6, cr: 0.1, cw: 0 }
const SONNET_46 = { i: 3, o: 15, cr: 0.3, cw: 3.75 }
const OPUS_47 = { i: 5, o: 25, cr: 0.5, cw: 6.25 }
const OPUS_47_FAST = { i: 30, o: 150, cr: 3, cw: 37.5 }
const DS_R1 = { i: 4, o: 16, cr: 0, cw: 0 }

describe('tokensToCost', () => {
  describe('DeepSeek V4 Flash (¥1/Mtok in, ¥2/Mtok out, ¥0.02/Mtok cache read)', () => {
    const p = DS_V4_FLASH
    test('no cache', () => expect(tokensToCost(1_000_000, 500_000, 0, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(2, 4))
    test('full cache read', () => expect(tokensToCost(1_000_000, 500_000, 1_000_000, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(1.02, 4))
    test('partial cache', () => expect(tokensToCost(1_000_000, 200_000, 700_000, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(0.714, 4))
    test('zero tokens', () => expect(tokensToCost(0, 0, 0, 0, p.i, p.o, p.cr, p.cw)).toBe(0))
    test('only output', () => expect(tokensToCost(0, 100_000, 0, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(0.20, 4))
    test('no underflow (cache > input)', () => expect(tokensToCost(100_000, 0, 200_000, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(0.004, 4))
  })

  describe('DeepSeek V4 Pro (¥3/Mtok in, ¥6/Mtok out)', () => {
    const p = DS_V4_PRO
    test('basic', () => expect(tokensToCost(1_000_000, 500_000, 0, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(6, 4))
    test('with cache', () => expect(tokensToCost(1_000_000, 200_000, 600_000, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(2.46, 4))
  })

  describe('Claude Sonnet 4.6 ($3/$15 per Mtok)', () => {
    const p = SONNET_46
    test('basic', () => expect(tokensToCost(1_000_000, 200_000, 0, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(6, 4))
    test('cache read', () => expect(tokensToCost(1_000_000, 100_000, 800_000, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(2.34, 4))
    test('cache creation + cache read', () => expect(tokensToCost(1_000_000, 0, 300_000, 500_000, p.i, p.o, p.cr, p.cw)).toBeCloseTo(2.565, 4))
  })

  describe('Claude Opus 4.7 ($5/$25 per Mtok)', () => {
    test('standard', () => expect(tokensToCost(1_000_000, 100_000, 0, 0, OPUS_47.i, OPUS_47.o, OPUS_47.cr, OPUS_47.cw)).toBeCloseTo(7.5, 4))
    test('fast mode ($30/$150)', () => expect(tokensToCost(1_000_000, 100_000, 0, 0, OPUS_47_FAST.i, OPUS_47_FAST.o, OPUS_47_FAST.cr, OPUS_47_FAST.cw)).toBeCloseTo(45, 4))
  })

  describe('DeepSeek R1 (no cache pricing)', () => {
    const p = DS_R1
    test('ignores cache tokens (supportsCache=false)', () => expect(tokensToCost(1_000_000, 100_000, 500_000, 0, p.i, p.o, p.cr, p.cw)).toBeCloseTo(5.6, 4))
  })
})

describe('convertCurrency', () => {
  test('same currency returns original', () => {
    expect(convertCurrencyInlined(100, 'USD', 'USD')).toBe(100)
    expect(convertCurrencyInlined(100, 'CNY', 'CNY')).toBe(100)
  })
  test('USD to CNY', () => expect(convertCurrencyInlined(10, 'USD', 'CNY')).toBeCloseTo(72.5, 4))
  test('CNY to USD', () => expect(convertCurrencyInlined(72.5, 'CNY', 'USD')).toBeCloseTo(10.005, 4))
  test('zero amount', () => {
    expect(convertCurrencyInlined(0, 'USD', 'CNY')).toBe(0)
    expect(convertCurrencyInlined(0, 'CNY', 'USD')).toBe(0)
  })
})
