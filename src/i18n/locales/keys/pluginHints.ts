// ── Plugin / LSP recommendation dialog keys ────────
export const en = {
  // PluginHintMenu
  'ui.pluginHint.title': 'Plugin Recommendation',
  'ui.pluginHint.commandSuggests':
    'The {command} command suggests installing a plugin.',
  'ui.pluginHint.plugin': 'Plugin:',
  'ui.pluginHint.marketplace': 'Marketplace:',
  'ui.pluginHint.installQuestion': 'Would you like to install it?',
  'ui.pluginHint.yesInstall': 'Yes, install {name}',
  'ui.pluginHint.no': 'No',
  'ui.pluginHint.disableHints': 'No, and don\u2019t show plugin installation hints again',

  // LspRecommendationMenu
  'ui.pluginHint.lspTitle': 'LSP Plugin Recommendation',
  'ui.pluginHint.lspDescription':
    'LSP provides code intelligence like go-to-definition and error checking',
  'ui.pluginHint.lspPlugin': 'Plugin:',
  'ui.pluginHint.triggeredBy': 'Triggered by:',
  'ui.pluginHint.lspInstallQuestion': 'Would you like to install this LSP plugin?',
  'ui.pluginHint.yesInstallLsp': 'Yes, install {name}',
  'ui.pluginHint.notNow': 'No, not now',
  'ui.pluginHint.neverFor': 'Never for {name}',
  'ui.pluginHint.disableAll': 'Disable all LSP recommendations',
} as const

export const zh: Record<string, string> = {
  'ui.pluginHint.title': '插件推荐',
  'ui.pluginHint.commandSuggests': '{command} 命令建议安装一个插件。',
  'ui.pluginHint.plugin': '插件：',
  'ui.pluginHint.marketplace': '市场：',
  'ui.pluginHint.installQuestion': '是否要安装它？',
  'ui.pluginHint.yesInstall': '是，安装 {name}',
  'ui.pluginHint.no': '否',
  'ui.pluginHint.disableHints': '否，不再显示插件安装提示',

  'ui.pluginHint.lspTitle': 'LSP 插件推荐',
  'ui.pluginHint.lspDescription': 'LSP 提供代码智能，如跳转到定义和错误检查',
  'ui.pluginHint.lspPlugin': '插件：',
  'ui.pluginHint.triggeredBy': '触发条件：',
  'ui.pluginHint.lspInstallQuestion': '是否要安装此 LSP 插件？',
  'ui.pluginHint.yesInstallLsp': '是，安装 {name}',
  'ui.pluginHint.notNow': '暂时不',
  'ui.pluginHint.neverFor': '永不为 {name}',
  'ui.pluginHint.disableAll': '禁用所有 LSP 推荐',
}
