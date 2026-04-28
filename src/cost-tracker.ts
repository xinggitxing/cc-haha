import type { BetaUsage as Usage } from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'
import chalk from 'chalk'
import {
  addToTotalCostState,
  addToTotalLinesChanged,
  getConversationAPICalls,
  getConversationCacheCreationInputTokens,
  getConversationCacheReadInputTokens,
  getConversationCost,
  getConversationInputTokens,
  getConversationOutputTokens,
  getCostCounter,
  getModelUsage,
  getSdkBetas,
  getSessionId,
  getTokenCounter,
  getTotalAPICalls,
  getTotalAPIDuration,
  getTotalAPIDurationWithoutRetries,
  getTotalCacheCreationInputTokens,
  getTotalCacheReadInputTokens,
  getTotalCost,
  getTotalDuration,
  getTotalInputTokens,
  getTotalLinesAdded,
  getTotalLinesRemoved,
  getTotalOutputTokens,
  getTotalToolDuration,
  getTotalWebSearchRequests,
  getTurnAPICalls,
  getTurnCacheCreationInputTokens,
  getTurnCacheReadInputTokens,
  getTurnCost,
  getTurnInputTokens,
  getTurnOutputTokens,
  getUsageForModel,
  hasUnknownModelCost,
  incrementTotalAPICalls,
  resetCostState,
  resetStateForTests,
  setCostStateForRestore,
  setHasUnknownModelCost,
  snapshotConversationStart,
  snapshotTurnCosts,
} from './bootstrap/state.js'
import type { ModelUsage } from './entrypoints/agentSdkTypes.js'
import {
  type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  logEvent,
} from './services/analytics/index.js'
import { getAdvisorUsage } from './utils/advisor.js'
import {
  getCurrentProjectConfig,
  saveCurrentProjectConfig,
} from './utils/config.js'
import {
  getContextWindowForModel,
  getModelMaxOutputTokens,
} from './utils/context.js'
import { isFastModeEnabled } from './utils/fastMode.js'
import { formatDuration, formatNumber } from './utils/format.js'
import type { FpsMetrics } from './utils/fpsTracker.js'
import { getCanonicalName } from './utils/model/model.js'
import { calculateModelCost, convertCurrency, getDisplayCurrency, getModelCosts } from './utils/modelCost.js'
export function formatTurnStats(): string {
  const totalInput = getTurnInputTokens()
  const totalOutput = getTurnOutputTokens()
  const totalCacheRead = getTurnCacheReadInputTokens()
  const totalCacheCreation = getTurnCacheCreationInputTokens()
  const totalUpTokens = totalInput + totalCacheRead + totalCacheCreation
  const totalAllTokens = totalUpTokens + totalOutput
  const totalCost = getTurnCost()
  const apiCalls = getTurnAPICalls()

  const modelUsageMap = getModelUsage()
  const modelNames = Object.keys(modelUsageMap).map(m =>
    process.env.ANTHROPIC_BASE_URL ? m : getCanonicalName(m),
  )
  const uniqueModels = [...new Set(modelNames)]
  const modelDisplay = uniqueModels.length > 0 ? uniqueModels.join('+') : '?'

  const costStr = formatCost(totalCost)

  return chalk.dim(
    `📊 ${modelDisplay} · ${apiCalls} times · ↑${formatNumber(totalUpTokens)} ↓${formatNumber(totalOutput)} · ${costStr}` +
      (hasUnknownModelCost() ? ' (cost may be inaccurate)' : ''),
  )
}

/** /clear 时输出的对话费用摘要，使用对话级别数据。 */
export function formatConversationCost(): string {
  const convInput = getConversationInputTokens()
  const convOutput = getConversationOutputTokens()
  const convCacheRead = getConversationCacheReadInputTokens()
  const convCacheCreation = getConversationCacheCreationInputTokens()
  const convUpTokens = convInput + convCacheRead + convCacheCreation
  const convCost = getConversationCost()
  const convAPICalls = getConversationAPICalls()

  const modelUsageMap = getModelUsage()
  const modelNames = Object.keys(modelUsageMap).map(m =>
    process.env.ANTHROPIC_BASE_URL ? m : getCanonicalName(m),
  )
  const uniqueModels = [...new Set(modelNames)]
  const modelDisplay = uniqueModels.length > 0 ? uniqueModels.join('+') : '?'

  const costStr = formatCost(convCost)

  return chalk.dim(
    `📊 Conversation cost: ${modelDisplay} · ${convAPICalls} times · ↑${formatNumber(convUpTokens)} ↓${formatNumber(convOutput)} · ${costStr}` +
      (hasUnknownModelCost() ? ' (cost may be inaccurate)' : ''),
  )
}

// 防止 gracefulShutdown + process.on('exit') 重复输出
let costOutputDone = false

export function isCostOutputDone(): boolean {
  return costOutputDone
}

export function markCostOutputDone(): void {
  costOutputDone = true
}

export {
  getTotalCost,
  getTotalDuration,
  getTotalAPIDuration,
  getTotalAPIDurationWithoutRetries,
  addToTotalLinesChanged,
  getTotalLinesAdded,
  getTotalLinesRemoved,
  getTotalInputTokens,
  getTotalOutputTokens,
  getTotalCacheReadInputTokens,
  getTotalCacheCreationInputTokens,
  getTotalWebSearchRequests,
  getTotalAPICalls,
  incrementTotalAPICalls,
  formatCost,
  hasUnknownModelCost,
  resetStateForTests,
  resetCostState,
  setHasUnknownModelCost,
  getModelUsage,
  getUsageForModel,
  getConversationCost,
  getConversationInputTokens,
  getConversationOutputTokens,
  getConversationCacheReadInputTokens,
  getConversationCacheCreationInputTokens,
  getConversationAPICalls,
  getTurnCost,
  getTurnInputTokens,
  getTurnOutputTokens,
  getTurnCacheReadInputTokens,
  getTurnCacheCreationInputTokens,
  getTurnAPICalls,
  snapshotConversationStart,
  snapshotTurnCosts,
}

export type SessionUsageSnapshot = {
  totalCost: number
  costDisplay: string
  hasUnknownModelCost: boolean
  totalAPIDuration: number
  totalDuration: number
  totalLinesAdded: number
  totalLinesRemoved: number
  totalInputTokens: number
  totalOutputTokens: number
  totalCacheReadInputTokens: number
  totalCacheCreationInputTokens: number
  totalWebSearchRequests: number
  models: Array<{
    model: string
    displayName: string
    inputTokens: number
    outputTokens: number
    cacheReadInputTokens: number
    cacheCreationInputTokens: number
    webSearchRequests: number
    cost: number
    costDisplay: string
    contextWindow: number
    maxOutputTokens: number
  }>
}

type StoredCostState = {
  totalCost: number
  totalAPICalls: number
  totalAPIDuration: number
  totalAPIDurationWithoutRetries: number
  totalToolDuration: number
  totalLinesAdded: number
  totalLinesRemoved: number
  lastDuration: number | undefined
  modelUsage: { [modelName: string]: ModelUsage } | undefined
}

/**
 * Gets stored cost state from project config for a specific session.
 * Returns the cost data if the session ID matches, or undefined otherwise.
 * Use this to read costs BEFORE overwriting the config with saveCurrentSessionCosts().
 */
export function getStoredSessionCosts(
  sessionId: string,
): StoredCostState | undefined {
  const projectConfig = getCurrentProjectConfig()

  // Only return costs if this is the same session that was last saved
  if (projectConfig.lastSessionId !== sessionId) {
    return undefined
  }

  // Build model usage with context windows
  let modelUsage: { [modelName: string]: ModelUsage } | undefined
  if (projectConfig.lastModelUsage) {
    modelUsage = Object.fromEntries(
      Object.entries(projectConfig.lastModelUsage).map(([model, usage]) => [
        model,
        {
          ...usage,
          contextWindow: getContextWindowForModel(model, getSdkBetas()),
          maxOutputTokens: getModelMaxOutputTokens(model).default,
        },
      ]),
    )
  }

  return {
    totalCost: projectConfig.lastCost ?? 0,
    totalAPICalls: 0,  // API calls are not persisted across sessions
    totalAPIDuration: projectConfig.lastAPIDuration ?? 0,
    totalAPIDurationWithoutRetries:
      projectConfig.lastAPIDurationWithoutRetries ?? 0,
    totalToolDuration: projectConfig.lastToolDuration ?? 0,
    totalLinesAdded: projectConfig.lastLinesAdded ?? 0,
    totalLinesRemoved: projectConfig.lastLinesRemoved ?? 0,
    lastDuration: projectConfig.lastDuration,
    modelUsage,
  }
}

/**
 * Restores cost state from project config when resuming a session.
 * Only restores if the session ID matches the last saved session.
 * @returns true if cost state was restored, false otherwise
 */
export function restoreCostStateForSession(sessionId: string): boolean {
  const data = getStoredSessionCosts(sessionId)
  if (!data) {
    return false
  }
  setCostStateForRestore(data)
  return true
}

/**
 * Saves the current session's costs to project config.
 * Call this before switching sessions to avoid losing accumulated costs.
 */
export function saveCurrentSessionCosts(fpsMetrics?: FpsMetrics): void {
  saveCurrentProjectConfig(current => ({
    ...current,
    lastCost: getTotalCost(),
    lastAPIDuration: getTotalAPIDuration(),
    lastAPIDurationWithoutRetries: getTotalAPIDurationWithoutRetries(),
    lastToolDuration: getTotalToolDuration(),
    lastDuration: getTotalDuration(),
    lastLinesAdded: getTotalLinesAdded(),
    lastLinesRemoved: getTotalLinesRemoved(),
    lastTotalInputTokens: getTotalInputTokens(),
    lastTotalOutputTokens: getTotalOutputTokens(),
    lastTotalCacheCreationInputTokens: getTotalCacheCreationInputTokens(),
    lastTotalCacheReadInputTokens: getTotalCacheReadInputTokens(),
    lastTotalWebSearchRequests: getTotalWebSearchRequests(),
    lastFpsAverage: fpsMetrics?.averageFps,
    lastFpsLow1Pct: fpsMetrics?.low1PctFps,
    lastModelUsage: Object.fromEntries(
      Object.entries(getModelUsage()).map(([model, usage]) => [
        model,
        {
          inputTokens: usage.inputTokens,
          outputTokens: usage.outputTokens,
          cacheReadInputTokens: usage.cacheReadInputTokens,
          cacheCreationInputTokens: usage.cacheCreationInputTokens,
          webSearchRequests: usage.webSearchRequests,
          costUSD: usage.costUSD,
        },
      ]),
    ),
    lastSessionId: getSessionId(),
  }))
}

function formatCost(cost: number, currency?: string, maxDecimalPlaces: number = 4): string {
  const display = currency ?? getDisplayCurrency()
  const symbol = display === 'USD' ? '$' : '¥'
  if (cost < 0.01) {
    return `${symbol}${cost.toFixed(maxDecimalPlaces)}`
  }
  return `${symbol}${round(cost, 100).toFixed(2)}`
}

function formatModelUsage(): string {
  const modelUsageMap = getModelUsage()
  if (Object.keys(modelUsageMap).length === 0) {
    return 'Usage:                 0 input, 0 output, 0 cache read, 0 cache write'
  }

  // Accumulate usage by short name
  const usageByShortName: { [shortName: string]: ModelUsage } = {}
  for (const [model, usage] of Object.entries(modelUsageMap)) {
    const shortName = getCanonicalName(model)
    if (!usageByShortName[shortName]) {
      usageByShortName[shortName] = {
        inputTokens: 0,
        outputTokens: 0,
        cacheReadInputTokens: 0,
        cacheCreationInputTokens: 0,
        webSearchRequests: 0,
        costUSD: 0,
        contextWindow: 0,
        maxOutputTokens: 0,
      }
    }
    const accumulated = usageByShortName[shortName]
    accumulated.inputTokens += usage.inputTokens
    accumulated.outputTokens += usage.outputTokens
    accumulated.cacheReadInputTokens += usage.cacheReadInputTokens
    accumulated.cacheCreationInputTokens += usage.cacheCreationInputTokens
    accumulated.webSearchRequests += usage.webSearchRequests
    accumulated.costUSD += usage.costUSD
  }

  let result = 'Usage by model:'
  for (const [shortName, usage] of Object.entries(usageByShortName)) {
    const usageString =
      `  ${formatNumber(usage.inputTokens)} input, ` +
      `${formatNumber(usage.outputTokens)} output, ` +
      `${formatNumber(usage.cacheReadInputTokens)} cache read, ` +
      `${formatNumber(usage.cacheCreationInputTokens)} cache write` +
      (usage.webSearchRequests > 0
        ? `, ${formatNumber(usage.webSearchRequests)} web search`
        : '') +
      ` (${formatCost(usage.costUSD)})`
    result += `\n` + `${shortName}:`.padStart(21) + usageString
  }
  return result
}

export function formatTotalCost(): string {
  const totalInput = getTotalInputTokens()
  const totalOutput = getTotalOutputTokens()
  const totalCacheRead = getTotalCacheReadInputTokens()
  const totalCacheCreation = getTotalCacheCreationInputTokens()
  const totalUpTokens = totalInput + totalCacheRead + totalCacheCreation
  const totalAllTokens = totalUpTokens + totalOutput

  const totalCost = getTotalCost()
  const costDisplay =
    formatCost(totalCost) +
    (hasUnknownModelCost()
      ? ' (costs may be inaccurate due to usage of unknown models)'
      : '')

  // 摘要行
  const apiCalls = getTotalAPICalls()
  const modelUsageMap = getModelUsage()
  const isThirdParty = !!process.env.ANTHROPIC_BASE_URL
  const modelNames = Object.keys(modelUsageMap).map(m =>
    isThirdParty ? m : getCanonicalName(m),
  )
  const uniqueModels = [...new Set(modelNames)]
  const modelDisplay = uniqueModels.length > 0 ? uniqueModels.join(', ') : '-'

  const COL_WIDTH = 16

  const rpad = (s: string) => s.padStart(COL_WIDTH)

  const summaryLines = [
    `${rpad('Model:')} ${modelDisplay}`,
    `${rpad('Times:')} ${formatNumber(apiCalls)}`,
    `${rpad('Up tokens:')} ${formatNumber(totalUpTokens)}`,
    `${rpad('  input:')} ${formatNumber(totalInput)}`,
  ]
  if (totalCacheRead > 0) {
    summaryLines.push(`${rpad('  cache hit:')} ${formatNumber(totalCacheRead)}`)
  }
  if (totalCacheCreation > 0) {
    summaryLines.push(`${rpad('  cache write:')} ${formatNumber(totalCacheCreation)}`)
  }
  summaryLines.push(
    `${rpad('Down tokens:')} ${formatNumber(totalOutput)}`,
    `${rpad('Total tokens:')} ${formatNumber(totalAllTokens)}`,
    `${rpad('Est cost:')} ${costDisplay}`,
  )

  const modelUsageDisplay = formatModelUsage()

  return chalk.dim(
    summaryLines.join('\n') +
      '\n\n' +
      `Total duration (API):  ${formatDuration(getTotalAPIDuration())}
Total duration (wall): ${formatDuration(getTotalDuration())}
Total code changes:    ${getTotalLinesAdded()} ${getTotalLinesAdded() === 1 ? 'line' : 'lines'} added, ${getTotalLinesRemoved()} ${getTotalLinesRemoved() === 1 ? 'line' : 'lines'} removed
${modelUsageDisplay}`,
  )
}

export function getSessionUsageSnapshot(): SessionUsageSnapshot {
  return {
    totalCost: getTotalCost(),
    costDisplay: formatCost(getTotalCost()),
    hasUnknownModelCost: hasUnknownModelCost(),
    totalAPIDuration: getTotalAPIDuration(),
    totalDuration: getTotalDuration(),
    totalLinesAdded: getTotalLinesAdded(),
    totalLinesRemoved: getTotalLinesRemoved(),
    totalInputTokens: getTotalInputTokens(),
    totalOutputTokens: getTotalOutputTokens(),
    totalCacheReadInputTokens: getTotalCacheReadInputTokens(),
    totalCacheCreationInputTokens: getTotalCacheCreationInputTokens(),
    totalWebSearchRequests: getTotalWebSearchRequests(),
    models: Object.entries(getModelUsage()).map(([model, usage]) => ({
      model,
      displayName: getCanonicalName(model),
      inputTokens: usage.inputTokens,
      outputTokens: usage.outputTokens,
      cacheReadInputTokens: usage.cacheReadInputTokens,
      cacheCreationInputTokens: usage.cacheCreationInputTokens,
      webSearchRequests: usage.webSearchRequests,
      cost: usage.costUSD,
      costDisplay: formatCost(usage.costUSD),
      contextWindow: usage.contextWindow,
      maxOutputTokens: usage.maxOutputTokens,
    })),
  }
}

function round(number: number, precision: number): number {
  return Math.round(number * precision) / precision
}

function addToTotalModelUsage(
  cost: number,
  usage: Usage,
  model: string,
): ModelUsage {
  const modelUsage = getUsageForModel(model) ?? {
    inputTokens: 0,
    outputTokens: 0,
    cacheReadInputTokens: 0,
    cacheCreationInputTokens: 0,
    webSearchRequests: 0,
    costUSD: 0,
    contextWindow: 0,
    maxOutputTokens: 0,
  }

  modelUsage.inputTokens += usage.input_tokens
  modelUsage.outputTokens += usage.output_tokens
  modelUsage.cacheReadInputTokens += usage.cache_read_input_tokens ?? 0
  modelUsage.cacheCreationInputTokens += usage.cache_creation_input_tokens ?? 0
  modelUsage.webSearchRequests +=
    usage.server_tool_use?.web_search_requests ?? 0
  modelUsage.costUSD += cost
  modelUsage.contextWindow = getContextWindowForModel(model, getSdkBetas())
  modelUsage.maxOutputTokens = getModelMaxOutputTokens(model).default
  return modelUsage
}

export function addToTotalSessionCost(
  cost: number,
  usage: Usage,
  model: string,
): number {
  const modelCosts = getModelCosts(model, usage)
  const nativeCurrency = modelCosts.currency

  // 按原生币种存储到 modelUsage
  const modelUsage = addToTotalModelUsage(cost, usage, model)

  // 转换为展示币种后累加到总额
  const displayCurrency = getDisplayCurrency()
  const displayCost = convertCurrency(cost, nativeCurrency, displayCurrency)
  addToTotalCostState(displayCost, modelUsage, model)

  const attrs =
    isFastModeEnabled() && usage.speed === 'fast'
      ? { model, speed: 'fast' }
      : { model }

  getCostCounter()?.add(displayCost, attrs)
  getTokenCounter()?.add(usage.input_tokens, { ...attrs, type: 'input' })
  getTokenCounter()?.add(usage.output_tokens, { ...attrs, type: 'output' })
  getTokenCounter()?.add(usage.cache_read_input_tokens ?? 0, {
    ...attrs,
    type: 'cacheRead',
  })
  getTokenCounter()?.add(usage.cache_creation_input_tokens ?? 0, {
    ...attrs,
    type: 'cacheCreation',
  })

  let totalCost = displayCost
  for (const advisorUsage of getAdvisorUsage(usage)) {
    const advisorCost = calculateModelCost(advisorUsage.model, advisorUsage)
    const advisorTotal = addToTotalSessionCost(
      advisorCost,
      advisorUsage,
      advisorUsage.model,
    )
    logEvent('tengu_advisor_tool_token_usage', {
      advisor_model:
        advisorUsage.model as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      input_tokens: advisorUsage.input_tokens,
      output_tokens: advisorUsage.output_tokens,
      cache_read_input_tokens: advisorUsage.cache_read_input_tokens ?? 0,
      cache_creation_input_tokens:
        advisorUsage.cache_creation_input_tokens ?? 0,
      cost_micros: Math.round(advisorTotal * 1_000_000),
    })
    totalCost += advisorTotal
  }
  return totalCost
}
