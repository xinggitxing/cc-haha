// Integration test for modelCost.ts
// Must run with: bun run scripts/test_modelcost.ts
// Cannot use bun test due to Bun Windows segfault (circular dep in modelCost import chain)

import { deepStrictEqual, ok } from "node:assert"

async function main() {
  const mod = await import('D:/workspace/cc-haha/src/utils/modelCost.ts')
  const { calculateModelCost, getModelCosts, convertCurrency, COST_TIER_3_15, COST_TIER_5_25, COST_TIER_30_150, DEEPSEEK_V4_FLASH } = mod

  let passed = 0
  let failed = 0

  function assert(desc, fn) {
    try {
      fn()
      passed++
      console.log(`  ✓ ${desc}`)
    } catch (e) {
      failed++
      console.log(`  ✗ ${desc}: ${e.message}`)
    }
  }

  function closeTo(actual, expected, tolerance = 0.0001) {
    if (Math.abs(actual - expected) > tolerance) {
      throw new Error(`Expected ${expected} ±${tolerance}, got ${actual}`)
    }
  }

  console.log('\n--- calculateModelCost ---')
  
  assert('DS V4 Flash: no cache', () => {
    closeTo(calculateModelCost('deepseek-v4-flash', { input_tokens: 1_000_000, output_tokens: 500_000 }), 2)
  })
  
  assert('DS V4 Flash: full cache read', () => {
    closeTo(calculateModelCost('deepseek-v4-flash', { input_tokens: 1_000_000, cache_read_input_tokens: 1_000_000, output_tokens: 500_000 }), 1.02)
  })
  
  assert('DS V4 Flash: partial cache', () => {
    closeTo(calculateModelCost('deepseek-v4-flash', { input_tokens: 1_000_000, cache_read_input_tokens: 700_000, output_tokens: 200_000 }), 0.714)
  })
  
  assert('DS V4 Flash: [1m] suffix same pricing', () => {
    const a = calculateModelCost('deepseek-v4-flash', { input_tokens: 1_000_000, output_tokens: 0 })
    const b = calculateModelCost('deepseek-v4-flash[1m]', { input_tokens: 1_000_000, output_tokens: 0 })
    if (a !== b) throw new Error(`${a} !== ${b}`)
  })
  
  assert('DS V4 Flash: no underflow', () => {
    closeTo(calculateModelCost('deepseek-v4-flash', { input_tokens: 100_000, cache_read_input_tokens: 200_000, output_tokens: 0 }), 0.004)
  })

  assert('Sonnet 4.6: basic', () => {
    closeTo(calculateModelCost('claude-sonnet-4-6', { input_tokens: 1_000_000, output_tokens: 200_000 }), 6)
  })
  
  assert('Sonnet 4.6: with cache', () => {
    closeTo(calculateModelCost('claude-sonnet-4-6', { input_tokens: 1_000_000, cache_read_input_tokens: 800_000, output_tokens: 100_000 }), 2.34)
  })
  
  assert('Sonnet 4.6: [1m] suffix', () => {
    closeTo(calculateModelCost('claude-sonnet-4-6[1m]', { input_tokens: 1_000_000, output_tokens: 0 }), 3)
  })
  
  assert('Opus 4.7: standard', () => {
    closeTo(calculateModelCost('claude-opus-4-7', { input_tokens: 1_000_000, output_tokens: 100_000 }), 7.5)
  })
  
  assert('Opus 4.7: fast mode', () => {
    closeTo(calculateModelCost('claude-opus-4-7', { input_tokens: 1_000_000, output_tokens: 100_000, speed: 'fast' }), 45)
  })
  
  assert('DS R1: no cache pricing', () => {
    closeTo(calculateModelCost('deepseek-r1', { input_tokens: 1_000_000, cache_read_input_tokens: 500_000, output_tokens: 100_000 }), 5.6)
  })

  assert('zero tokens', () => {
    closeTo(calculateModelCost('deepseek-v4-flash', { input_tokens: 0, output_tokens: 0 }), 0)
  })

  console.log('\n--- getModelCosts ---')

  assert('DS V4 Flash pricing', () => {
    const c = getModelCosts('deepseek-v4-flash', { input_tokens: 0, output_tokens: 0 })
    if (c.inputTokens !== 1 || c.outputTokens !== 2) throw new Error(`Got ${c.inputTokens}/${c.outputTokens}`)
  })

  assert('DS V4 Flash [1m] same tier', () => {
    const c = getModelCosts('deepseek-v4-flash[1m]', { input_tokens: 0, output_tokens: 0 })
    if (c.inputTokens !== 1 || c.outputTokens !== 2) throw new Error(`Got ${c.inputTokens}/${c.outputTokens}`)
  })

  assert('Sonnet 4.6 tier', () => {
    const c = getModelCosts('claude-sonnet-4-6', { input_tokens: 0, output_tokens: 0 })
    if (c !== COST_TIER_3_15) throw new Error('wrong tier')
  })

  assert('Sonnet 4.6 [1m] tier', () => {
    const c = getModelCosts('claude-sonnet-4-6[1m]', { input_tokens: 0, output_tokens: 0 })
    if (c !== COST_TIER_3_15) throw new Error('wrong tier')
  })

  assert('Opus 4.7 standard', () => {
    const c = getModelCosts('claude-opus-4-7', { input_tokens: 0, output_tokens: 0 })
    if (c !== COST_TIER_5_25) throw new Error('wrong tier')
  })

  assert('Opus 4.7 fast mode', () => {
    const c = getModelCosts('claude-opus-4-7', { input_tokens: 0, output_tokens: 0, speed: 'fast' })
    if (c !== COST_TIER_30_150) throw new Error('wrong tier')
  })

  console.log('\n--- convertCurrency ---')

  assert('same currency', () => {
    if (convertCurrency(100, 'USD', 'USD') !== 100) throw new Error('USD→USD failed')
    if (convertCurrency(100, 'CNY', 'CNY') !== 100) throw new Error('CNY→CNY failed')
  })

  assert('USD to CNY', () => {
    closeTo(convertCurrency(10, 'USD', 'CNY'), 72.5)
  })

  assert('CNY to USD', () => {
    closeTo(convertCurrency(72.5, "CNY", "USD"), 10)   // 72.5 * (1/7.25) = 10
  })

  const total = passed + failed
  console.log(`\n${passed}/${total} passed, ${failed} failed`)
  process.exit(failed > 0 ? 1 : 0)
}

main().catch(e => {
  console.error('Test script failed:', e)
  process.exit(1)
})
