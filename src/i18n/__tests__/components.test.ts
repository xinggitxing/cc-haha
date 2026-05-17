import { describe, expect, it } from 'bun:test'
import { en, zh } from '../locales/keys/components.js'

describe('components i18n keys (en)', () => {
  const keys = Object.keys(en)

  it('has all required key groups', () => {
    const prefixes = new Set(keys.map(k => k.split('.')[1]))
    expect(prefixes.has('exportDialog')).toBe(true)
    expect(prefixes.has('historySearch')).toBe(true)
    expect(prefixes.has('quickOpen')).toBe(true)
    expect(prefixes.has('feedback')).toBe(true)
    expect(prefixes.has('costThreshold')).toBe(true)
    expect(prefixes.has('approveApiKey')).toBe(true)
    expect(prefixes.has('channelDowngrade')).toBe(true)
    expect(prefixes.has('bypassPermissions')).toBe(true)
    expect(prefixes.has('autoModeOptIn')).toBe(true)
    expect(prefixes.has('devChannels')).toBe(true)
    expect(prefixes.has('idleReturn')).toBe(true)
    expect(prefixes.has('workflowSelect')).toBe(true)
    expect(prefixes.has('ideAutoConnect')).toBe(true)
    expect(prefixes.has('oauth')).toBe(true)
    expect(prefixes.has('settings')).toBe(true)
  })

  it('all keys have non-empty string values', () => {
    for (const key of keys) {
      expect(typeof en[key]).toBe('string')
      expect(en[key].length).toBeGreaterThan(0)
    }
  })

  it('all zh keys match en keys', () => {
    for (const key of keys) {
      expect(zh).toHaveProperty([key])
      expect(zh[key].length).toBeGreaterThan(0)
    }
  })
})

describe('newly added keys', () => {
  // CostThresholdDialog
  it('costThreshold.learnMore and gotIt', () => {
    expect(en['ui.costThreshold.learnMore']).toBeTruthy()
    expect(zh['ui.costThreshold.learnMore']).toBeTruthy()
    expect(en['ui.costThreshold.gotIt']).toBeTruthy()
    expect(zh['ui.costThreshold.gotIt']).toBeTruthy()
  })

  // ApproveApiKey
  it('approveApiKey.question', () => {
    expect(en['ui.approveApiKey.question']).toBeTruthy()
    expect(zh['ui.approveApiKey.question']).toBeTruthy()
  })

  // ChannelDowngrade
  it('channelDowngrade.stableWarning', () => {
    expect(en['ui.channelDowngrade.stableWarning']).toContain('{currentVersion}')
    expect(zh['ui.channelDowngrade.stableWarning']).toBeTruthy()
  })

  // BypassPermissions
  it('bypassPermissions keys', () => {
    expect(en['ui.bypassPermissions.desc1']).toBeTruthy()
    expect(en['ui.bypassPermissions.desc2']).toBeTruthy()
    expect(en['ui.bypassPermissions.responsibility']).toBeTruthy()
    expect(en['ui.bypassPermissions.noExit']).toBeTruthy()
    expect(en['ui.bypassPermissions.yesAccept']).toBeTruthy()
  })

  // AutoModeOptIn
  it('autoModeOptIn keys', () => {
    expect(en['ui.autoModeOptIn.yesDefault']).toBeTruthy()
    expect(en['ui.autoModeOptIn.yesEnable']).toBeTruthy()
    expect(en['ui.autoModeOptIn.noExit']).toBeTruthy()
    expect(en['ui.autoModeOptIn.noGoBack']).toBeTruthy()
  })

  // DevChannels
  it('devChannels keys', () => {
    expect(en['ui.devChannels.dangerousWarning']).toBeTruthy()
    expect(en['ui.devChannels.useChannelsFlag']).toBeTruthy()
    expect(en['ui.devChannels.localDev']).toBeTruthy()
    expect(en['ui.devChannels.exit']).toBeTruthy()
  })

  // IdleReturn
  it('idleReturn.newTaskHint and dontAskAgain', () => {
    expect(en['ui.idleReturn.newTaskHint']).toBeTruthy()
    expect(en['ui.idleReturn.dontAskAgain']).toBeTruthy()
  })

  // WorkflowMultiselect
  it('workflowSelect keys', () => {
    expect(en['ui.workflowSelect.subtitleDetailed']).toBeTruthy()
    expect(en['ui.workflowSelect.moreExamples']).toBeTruthy()
    expect(en['ui.workflowSelect.pressAgain']).toContain('{keyName}')
  })

  // IdeAutoConnect
  it('ideAutoConnect.disableTitle and disableSubtitle', () => {
    expect(en['ui.ideAutoConnect.disableTitle']).toBeTruthy()
    expect(en['ui.ideAutoConnect.disableSubtitle']).toBeTruthy()
  })

  // ConsoleOAuthFlow
  it('oauth keys', () => {
    expect(en['ui.oauth.pasteHere']).toBeTruthy()
    expect(en['ui.oauth.tokenInfo']).toBeTruthy()
    expect(en['ui.oauth.selectMethod']).toBeTruthy()
    expect(en['ui.oauth.openingBrowser']).toBeTruthy()
    expect(en['ui.oauth.creatingApiKey']).toBeTruthy()
    expect(en['ui.oauth.bedrockDesc']).toBeTruthy()
    expect(en['ui.oauth.enterpriseContact']).toBeTruthy()
  })

  // HistorySearch
  it('historySearch keys', () => {
    expect(en['ui.historySearch.title']).toBeTruthy()
    expect(en['ui.historySearch.loading']).toBeTruthy()
    expect(en['ui.historySearch.noHistory']).toBeTruthy()
  })

  // QuickOpen
  it('quickOpen.title and selectAction', () => {
    expect(en['ui.quickOpen.title']).toBeTruthy()
    expect(en['ui.quickOpen.selectAction']).toBeTruthy()
  })

  // Settings
  it('settings tab titles', () => {
    expect(en['ui.settings.status']).toBeTruthy()
    expect(en['ui.settings.config']).toBeTruthy()
    expect(en['ui.settings.usage']).toBeTruthy()
    expect(en['ui.settings.gates']).toBeTruthy()
  })

  it('settings auto-update dialog', () => {
    expect(en['ui.settings.searchPlaceholder']).toBeTruthy()
    expect(en['ui.settings.enableAutoUpdates']).toBeTruthy()
    expect(en['ui.settings.autoUpdateEnvControlled']).toBeTruthy()
    expect(en['ui.settings.autoUpdateDevDisabled']).toBeTruthy()
    expect(en['ui.settings.autoUpdateUnsetEnv']).toContain('{envVar}')
    expect(en['ui.settings.autoUpdateLatestChannel']).toBeTruthy()
    expect(en['ui.settings.autoUpdateStableChannel']).toBeTruthy()
    expect(en['ui.settings.disabled']).toBeTruthy()
  })

  it('settings item labels', () => {
    const labels = [
      'autoCompact', 'showTips', 'reduceMotion', 'thinkingMode',
      'promptSuggestions', 'speculativeExecution', 'rewindCode',
      'verboseOutput', 'terminalProgressBar', 'showTerminalStatus',
      'showTurnDuration', 'defaultPermissionMode', 'autoModeDuringPlan',
      'respectGitignore', 'alwaysCopyFull', 'copyOnSelect',
      'autoUpdateChannel', 'theme', 'pushWhenIdle', 'pushWhenInputNeeded',
      'pushWhenClaudeDecides', 'outputStyle', 'wysiwyg', 'language',
      'uiLanguage', 'editorMode', 'showPrStatus', 'model', 'diffTool',
      'autoConnectIde', 'autoInstallIdeExt', 'claudeChromeDefault',
      'defaultTeammateModel', 'enableRemoteForAll', 'externalClaudeMd',
    ]
    for (const key of labels) {
      expect(en[`ui.settings.${key}`]).toBeTruthy()
      expect(zh[`ui.settings.${key}`]).toBeTruthy()
    }
  })

  it('settings UI strings', () => {
    expect(en['ui.settings.typeToFilter']).toBeTruthy()
    expect(en['ui.settings.moreBelow']).toBeTruthy()
    expect(en['ui.settings.defaultLeadersModel']).toBeTruthy()
    expect(en['ui.settings.clear']).toBeTruthy()
    expect(en['ui.settings.change']).toBeTruthy()
    expect(en['ui.settings.search']).toBeTruthy()
    expect(en['ui.settings.disableExternalIncludes']).toBeTruthy()
    expect(en['ui.settings.teammateModelHeader']).toBeTruthy()
    expect(en['ui.settings.changingThinkingWarning']).toBeTruthy()
  })
})
