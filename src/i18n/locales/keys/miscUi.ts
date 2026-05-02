// ── Desktop upsell / Logo banners / Misc keys ─────
export const en = {
  // DesktopUpsellStartup
  'ui.desktopUpsell.title': 'Try Claude Code Desktop',
  'ui.desktopUpsell.description':
    'Same Claude Code with visual diffs, live app preview, parallel sessions, and more.',
  'ui.desktopUpsell.openDesktop': 'Open in Claude Code Desktop',
  'ui.desktopUpsell.notNow': 'Not now',
  'ui.desktopUpsell.dontAskAgain': 'Don\u2019t ask again',

  // LogoV2 banners
  'ui.logoBanner.guestPasses': 'Share Claude Code and earn {amount} of extra usage \u00b7 /passes',
  'ui.logoBanner.guestPassesFallback': '3 guest passes at /passes',
  'ui.logoBanner.overageCredit': '{amount} in extra usage for third-party apps \u00b7 /extra-usage',
  'ui.logoBanner.overageCreditOnUs': 'On us. Works on third-party apps \u00b7 /extra-usage',
  'ui.logoBanner.overageCreditFallback': '{amount} in extra usage',
  'ui.logoBanner.opus1mContext': 'Opus now defaults to 1M context \u00b7 5x more room, same pricing',
  'ui.logoBanner.voiceMode': 'Voice mode is now available \u00b7 /voice to enable',

  // Memory update notification
  'ui.misc.memoryUpdated': 'Memory updated in {path} \u00b7 /memory to edit',

  // Notebook edit rejected message
  'ui.misc.editRejected': 'User rejected {operation}',
} as const

export const zh: Record<string, string> = {
  'ui.desktopUpsell.title': '尝试 Claude Code Desktop',
  'ui.desktopUpsell.description': '同样的 Claude Code，增加可视化差异、实时应用预览、并行会话等功能。',
  'ui.desktopUpsell.openDesktop': '在 Claude Code Desktop 中打开',
  'ui.desktopUpsell.notNow': '稍后',
  'ui.desktopUpsell.dontAskAgain': '不再询问',

  'ui.logoBanner.guestPasses': '分享 Claude Code 赚取 {amount} 额外用量 \u00b7 /passes',
  'ui.logoBanner.guestPassesFallback': '3 个访客通行证，位于 /passes',
  'ui.logoBanner.overageCredit': '{amount} 第三方应用额外用量 \u00b7 /extra-usage',
  'ui.logoBanner.overageCreditOnUs': '我们请客。适用于第三方应用 \u00b7 /extra-usage',
  'ui.logoBanner.overageCreditFallback': '{amount} 额外用量',
  'ui.logoBanner.opus1mContext': 'Opus 现在默认 1M 上下文 \u00b7 空间增大 5 倍，价格不变',
  'ui.logoBanner.voiceMode': '语音模式现已可用 \u00b7 /voice 启用',

  'ui.misc.memoryUpdated': '记忆已更新于 {path} \u00b7 /memory 编辑',

  'ui.misc.editRejected': '用户拒绝了 {operation}',
}
