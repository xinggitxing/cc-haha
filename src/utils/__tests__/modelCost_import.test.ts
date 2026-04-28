import { describe, expect, test } from 'bun:test'

test('import test', async () => {
  const { calculateModelCost } = await import('../modelCost.js')
  const cost = calculateModelCost('deepseek-v4-flash', { input_tokens: 1_000_000, output_tokens: 500_000 })
  expect(cost).toBe(2)
})
