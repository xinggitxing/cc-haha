import { beforeAll, describe, expect, test } from 'bun:test'
import { existsSync } from 'fs'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

const COMP_DIR = resolve(import.meta.dirname, '..')

describe('SpinnerAnimationRow', () => {
  test('module file exists', () => {
    expect(existsSync(resolve(COMP_DIR, 'SpinnerAnimationRow.tsx'))).toBe(true)
  })

  describe('cumulative turn cost', () => {
    let source: string

    beforeAll(async () => {
      source = await readFile(resolve(COMP_DIR, 'SpinnerAnimationRow.tsx'), 'utf-8')
    })

    test('imports cumulative turn functions instead of getTurnUsage', () => {
      expect(source).not.toContain('getTurnUsage')
      expect(source).toContain('getTurnInputTokens')
      expect(source).toContain('getTurnOutputTokens')
      expect(source).toContain('getTurnCost')
      expect(source).not.toContain('getTurnCacheReadInputTokens')
      expect(source).not.toContain('getTurnCacheCreationInputTokens')
    })

    test('no longer imports model-level cost calculation', () => {
      expect(source).not.toContain('calculateCostFromTokens')
      expect(source).not.toContain('getModelCosts')
      expect(source).not.toContain('getInitialMainLoopModel')
    })

    test('uses getTurnInputTokens for token display', () => {
      expect(source).toContain('const turnInputTokens = getTurnInputTokens()')
      expect(source).toContain('const turnOutputTokens = getTurnOutputTokens()')
    })

    test('totalTokens uses cumulative input+output', () => {
      const match = source.match(/totalTokens = .*/)
      expect(match).not.toBeNull()
      expect(match![0]).not.toContain('turnUsage')
      expect(match![0]).not.toContain('leaderOutputTokens')
      expect(match![0]).toContain('turnInputTokens')
      expect(match![0]).toContain('turnOutputTokens')
    })

    test('costText uses getTurnCost() directly', () => {
      expect(source).toContain('const cost = getTurnCost()')
      expect(source).toContain("formatCost(cost)")
    })

    test('costText useMemo dependency array uses cumulative values', () => {
      expect(source).toContain('turnInputTokens, turnOutputTokens, totalTokens')
    })
  })
})
