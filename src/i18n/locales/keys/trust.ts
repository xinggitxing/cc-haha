// ── Trust / Security dialog keys ────────────────────
export const en = {
  // TrustDialog
  'ui.trust.title': 'Accessing workspace:',
  'ui.trust.safetyCheck':
    'Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work from your team). If not, take a moment to review what\u2019s in this folder first.',
  'ui.trust.claudeCapabilities':
    'Claude Code\u2019ll be able to read, edit, and execute files here.',
  'ui.trust.securityGuide': 'Security guide',
  'ui.trust.trustOption': 'Yes, I trust this folder',
  'ui.trust.exitOption': 'No, exit',
  'ui.trust.pressAgain': 'Press {key} again to exit',
  'ui.trust.enterConfirm': 'Enter to confirm \u00b7 Esc to cancel',

  // ManagedSettingsSecurityDialog
  'ui.trust.managedTitle': 'Managed settings require approval',
  'ui.trust.managedBody':
    'Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.',
  'ui.trust.managedSubtitle': 'Settings requiring approval:',
  'ui.trust.managedWarning':
    'Only accept if you trust your organization\u2019s IT administration and expect these settings to be configured.',
  'ui.trust.managedAccept': 'Yes, I trust these settings',
  'ui.trust.managedExit': 'No, exit Claude Code',
  'ui.trust.managedEnterConfirm': 'Enter to confirm \u00b7 Esc to exit',
} as const

export const zh: Record<string, string> = {
  // TrustDialog
  'ui.trust.title': '访问工作区：',
  'ui.trust.safetyCheck':
    '快速安全检查：这是您创建或信任的项目吗？（比如您自己的代码、知名的开源项目或团队的工作）。如果不是，请先花点时间查看此文件夹中的内容。',
  'ui.trust.claudeCapabilities':
    'Claude Code 将能够在此处读取、编辑和执行文件。',
  'ui.trust.securityGuide': '安全指南',
  'ui.trust.trustOption': '是的，我信任此文件夹',
  'ui.trust.exitOption': '不，退出',
  'ui.trust.pressAgain': '按 {key} 再次退出',
  'ui.trust.enterConfirm': 'Enter 确认 \u00b7 Esc 取消',

  // ManagedSettingsSecurityDialog
  'ui.trust.managedTitle': '托管设置需要批准',
  'ui.trust.managedBody':
    '您的组织已配置了可能允许执行任意代码或拦截您的提示和响应的托管设置。',
  'ui.trust.managedSubtitle': '需要批准的设置：',
  'ui.trust.managedWarning':
    '仅当您信任组织的 IT 管理并预期这些设置被配置时才接受。',
  'ui.trust.managedAccept': '是的，我信任这些设置',
  'ui.trust.managedExit': '不，退出 Claude Code',
  'ui.trust.managedEnterConfirm': 'Enter 确认 \u00b7 Esc 退出',
}
