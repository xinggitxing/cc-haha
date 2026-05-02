// ── Prompt Input / Help Menu keys ──────────────────
export const en = {
  'ui.promptInput.bashMode': '! for bash mode',
  'ui.promptInput.commands': '/ for commands',
  'ui.promptInput.filePaths': '@ for file paths',
  'ui.promptInput.background': '& for background',
  'ui.promptInput.sideQuestion': '/btw for side question',
  'ui.promptInput.doubleTapEsc': 'double tap esc to clear input',
  'ui.promptInput.autoAcceptEdits': 'to auto-accept edits',
  'ui.promptInput.cycleModes': 'to cycle modes',
  'ui.promptInput.verboseOutput': 'for verbose output',
  'ui.promptInput.toggleTasks': 'to toggle tasks',
  'ui.promptInput.terminal': 'for terminal',
  'ui.promptInput.undo': 'to undo',
  'ui.promptInput.suspend': 'ctrl + z to suspend',
  'ui.promptInput.pasteImages': 'to paste images',
  'ui.promptInput.switchModel': 'to switch model',
  'ui.promptInput.toggleFastMode': 'to toggle fast mode',
  'ui.promptInput.stashPrompt': 'to stash prompt',
  'ui.promptInput.editInEditor': 'to edit in $EDITOR',
  'ui.promptInput.customizeKeybindings': '/keybindings to customize',

  // Stash notice
  'ui.promptInput.stashNotice': 'Stashed (auto-restores after submit)',

  // Issue flag banner
  'ui.promptInput.issueFlag': '[ANT-ONLY] Something off with Claude? /issue to report it',

  // Sandbox prompt footer hint
  'ui.promptInput.sandboxBlocked': '\u2388 Sandbox blocked {count} operation(s) \u00b7 {shortcut} for details \u00b7 /sandbox to disable',
} as const

export const zh: Record<string, string> = {
  'ui.promptInput.bashMode': '! 进入 bash 模式',
  'ui.promptInput.commands': '/ 查看命令',
  'ui.promptInput.filePaths': '@ 引用文件路径',
  'ui.promptInput.background': '& 后台运行',
  'ui.promptInput.sideQuestion': '/btw 提出附带问题',
  'ui.promptInput.doubleTapEsc': '双击 esc 清空输入',
  'ui.promptInput.autoAcceptEdits': '自动接受编辑',
  'ui.promptInput.cycleModes': '切换模式',
  'ui.promptInput.verboseOutput': '详细输出',
  'ui.promptInput.toggleTasks': '切换任务',
  'ui.promptInput.terminal': '打开终端',
  'ui.promptInput.undo': '撤销',
  'ui.promptInput.suspend': 'ctrl + z 暂停',
  'ui.promptInput.pasteImages': '粘贴图片',
  'ui.promptInput.switchModel': '切换模型',
  'ui.promptInput.toggleFastMode': '切换快速模式',
  'ui.promptInput.stashPrompt': '暂存提示',
  'ui.promptInput.editInEditor': '在 $EDITOR 中编辑',
  'ui.promptInput.customizeKeybindings': '/keybindings 自定义快捷键',

  'ui.promptInput.stashNotice': '已暂存（提交后自动恢复）',

  'ui.promptInput.issueFlag': '[ANT-ONLY] Claude 有问题？使用 /issue 报告',

  'ui.promptInput.sandboxBlocked': '\u2388 沙箱已阻止 {count} 个操作 \u00b7 {shortcut} 查看详情 \u00b7 /sandbox 禁用',
}
