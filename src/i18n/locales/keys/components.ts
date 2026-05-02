// ── Root-level UI component keys (en) ────────────────────
export const en = {
  // PressEnterToContinue
  'ui.pressEnterToContinue': 'Press Enter to continue\u2026',

  // TeleportStash
  'ui.teleportStash.title': 'Working Directory Has Changes',
  'ui.teleportStash.description':
    'Teleport will switch git branches. Would you like to stash these changes before continuing?',
  'ui.teleportStash.stashAndContinue': 'Stash changes and continue',
  'ui.teleportStash.exit': 'Exit',
  'ui.teleportStash.failedGetChanges': 'Failed to get changed files',
  'ui.teleportStash.failedStash': 'Failed to stash changes',
  'ui.teleportStash.checkingStatus': 'Checking git status...',
  'ui.teleportStash.stashing': 'Stashing changes...',
  'ui.teleportStash.noChanges': 'No changes to stash',
  'ui.teleportStash.noChangesDetected': 'No changes detected',
  'ui.teleportStash.foundChanges':
    'Teleport will switch git branches. The following changes were found:',
  'ui.teleportStash.filesChanged': '{count} files changed',

  // CompactSummary
  'ui.compactSummary.summarizedConversation': 'Summarized conversation',
  'ui.compactSummary.compactSummary': 'Compact summary',
  'ui.compactSummary.summarizedUpTo':
    'Summarized {count} messages up to this point',
  'ui.compactSummary.summarizedFrom':
    'Summarized {count} messages from this point',
  'ui.compactSummary.context': 'Context: "{context}"',

  // ThinkingToggle
  'ui.thinkingToggle.title': 'Toggle thinking mode',
  'ui.thinkingToggle.description':
    'Enable or disable thinking for this session.',
  'ui.thinkingToggle.changingMidConversation':
    'Changing thinking mode mid-conversation...',
  'ui.thinkingToggle.proceed': 'Do you want to proceed?',
  'ui.thinkingToggle.enabled': 'Enabled',
  'ui.thinkingToggle.disabled': 'Disabled',

  // ThemePicker
  'ui.themePicker.title': 'Theme',
  'ui.themePicker.description':
    'Choose the text style that looks best with your terminal',
  'ui.themePicker.letsGetStarted': "Let's get started.",
  'ui.themePicker.auto': 'Auto (match terminal)',
  'ui.themePicker.dark': 'Dark mode',
  'ui.themePicker.light': 'Light mode',
  'ui.themePicker.darkColorblind': 'Dark mode (colorblind-friendly)',
  'ui.themePicker.lightColorblind': 'Light mode (colorblind-friendly)',
  'ui.themePicker.darkAnsi': 'Dark mode (ANSI colors only)',
  'ui.themePicker.lightAnsi': 'Light mode (ANSI colors only)',

  // ModelPicker
  'ui.modelPicker.title': 'Select model',
  'ui.modelPicker.description':
    'Switch between Claude models for this conversation.',
  'ui.modelPicker.currentlyUsing':
    'Currently using {model} for this session...',
  'ui.modelPicker.currentModel': 'Current model',
  'ui.modelPicker.andMore': 'and {count} more\u2026',

  // OutputStylePicker
  'ui.outputStylePicker.title': 'Preferred output style',
  'ui.outputStylePicker.description':
    'This changes how Claude Code communicates with you',
  'ui.outputStylePicker.loading': 'Loading output styles\u2026',

  // ResumeTask
  'ui.resumeTask.loading': 'Loading Claude Code sessions\u2026',
  'ui.resumeTask.error': 'Error loading Claude Code sessions',
  'ui.resumeTask.noSessions': 'No Claude Code sessions found',
  'ui.resumeTask.selectToResume': 'Select a session to resume',
  'ui.resumeTask.sessionTitle': 'Session Title',
  'ui.resumeTask.checkInternet': 'Check your internet connection',
  'ui.resumeTask.requiresAccount':
    'Teleport requires a Claude account',
  'ui.resumeTask.claudeError': 'Sorry, Claude encountered an error',
  'ui.resumeTask.claudeCodeError': 'Sorry, Claude Code encountered an error',
  'ui.resumeTask.retrying': 'Retrying\u2026',
  'ui.resumeTask.fetching': 'Fetching your Claude Code sessions\u2026',
  'ui.resumeTask.loginHint':
    'Run /login and select "Claude account with subscription"',

  // WorkflowMultiselectDialog
  'ui.workflowSelect.title': 'Select GitHub workflows to install',
  'ui.workflowSelect.requireOne':
    'You must select at least one workflow to continue',

  // BridgeDialog (Remote Control)
  'ui.bridgeDialog.title': 'Remote Control',
  'ui.bridgeDialog.keyboardHint':
    'd to disconnect \u00b7 space for QR code \u00b7 Enter/Esc to close',

  // ContextVisualization
  'ui.contextVis.title': 'Context Usage',
  'ui.contextVis.tokens': 'tokens',
  'ui.contextVis.estimatedByCategory': 'Estimated usage by category',
  'ui.contextVis.mcpTools': 'MCP tools',
  'ui.contextVis.loadedOnDemand': ' (loaded on-demand)',
  'ui.contextVis.loaded': 'Loaded',
  'ui.contextVis.available': 'Available',
  'ui.contextVis.mcpSlash': '/mcp',
  'ui.contextVis.customAgents': 'Custom agents',
  'ui.contextVis.agentsSlash': ' /agents',
  'ui.contextVis.memoryFiles': 'Memory files',
  'ui.contextVis.memorySlash': ' /memory',
  'ui.contextVis.skills': 'Skills',
  'ui.contextVis.skillsSlash': ' /skills',
  'ui.contextVis.freeSpace': 'Free space',
  'ui.contextVis.collapseErrors': 'Collapse errors: {errors}/{spawns} spawns failed',
  'ui.contextVis.collapseIdle':
    'Collapse idle: {count} consecutive empty runs',
  'ui.contextVis.contextStrategy': 'Context strategy: collapse ({summary})',
  'ui.contextVis.waitingForTrigger': 'waiting for first trigger',
  'ui.contextVis.nothingStaged': 'nothing staged yet',
  'ui.contextVis.staged': 'staged',
  'ui.contextVis.span': 'span',
  'ui.contextVis.spans': 'spans',
  'ui.contextVis.spawn': 'spawn',
  'ui.contextVis.spawns': 'spawns',
  'ui.contextVis.summarized': 'summarized',

  // DiagnosticsDisplay
  'ui.diagnosticsDisplay.found':
    'Found {totalIssues} new diagnostic {issues} in {fileCount} {files}',
  'ui.diagnosticsDisplay.issue': 'issue',
  'ui.diagnosticsDisplay.issues': 'issues',
  'ui.diagnosticsDisplay.file': 'file',
  'ui.diagnosticsDisplay.files': 'files',
  'ui.diagnosticsDisplay.fileProtocol': '(file://)',
  'ui.diagnosticsDisplay.claudeFsRight': '(claude_fs_right)',
  'ui.diagnosticsDisplay.line': '[Line {line}:{col}]',

  // ExportDialog
  'ui.exportDialog.title': 'Export Conversation',
  'ui.exportDialog.subtitle': 'Select export method:',
  'ui.exportDialog.copyToClipboard': 'Copy to clipboard',
  'ui.exportDialog.copyDescription':
    'Copy the conversation to your system clipboard',
  'ui.exportDialog.saveToFile': 'Save to file',
  'ui.exportDialog.saveDescription':
    'Save the conversation to a file in the current directory',
  'ui.exportDialog.copiedToClipboard': 'Conversation copied to clipboard',
  'ui.exportDialog.exportedTo': 'Conversation exported to: {filepath}',
  'ui.exportDialog.failedExport':
    'Failed to export conversation: {error}',
  'ui.exportDialog.cancelled': 'Export cancelled',
  'ui.exportDialog.enterFilename': 'Enter filename:',
  'ui.exportDialog.save': 'save',
  'ui.exportDialog.goBack': 'go back',
  'ui.exportDialog.cancel': 'cancel',
  'ui.exportDialog.pressAgain': 'Press {keyName} again to exit',

  // Feedback
  'ui.feedback.title': 'Submit Feedback / Bug Report',
  'ui.feedback.describeIssue': 'Describe the issue below:',
  'ui.feedback.editAndRetry':
    'Edit and press Enter to retry, or Esc to cancel',
  'ui.feedback.reportIncludes': 'This report will include:',
  'ui.feedback.yourDescription': '- Your feedback / bug description:',
  'ui.feedback.envInfo': '- Environment info:',
  'ui.feedback.gitMetadata': '- Git repo metadata:',
  'ui.feedback.currentTranscript': '- Current session transcript',
  'ui.feedback.privacyNotice':
    'We will use your feedback to debug related issues or to improve Claude Code\u2019s functionality (eg. to reduce the risk of bugs occurring in the future).',
  'ui.feedback.pressEnterToSubmit':
    'Press Enter to confirm and submit.',
  'ui.feedback.submitting': 'Submitting report\u2026',
  'ui.feedback.thankYou': 'Thank you for your report!',
  'ui.feedback.notSynced': ', not synced',
  'ui.feedback.hasLocalChanges': ', has local changes',
  'ui.feedback.submitted': 'Feedback / bug report submitted',
  'ui.feedback.cancelled': 'Feedback / bug report cancelled',
  'ui.feedback.errorSubmitting':
    'Error submitting feedback / bug report',
  'ui.feedback.feedbackId': 'Feedback ID: {feedbackId}',
  'ui.feedback.pressEnterToOpen':
    'Press Enter to open your browser and draft a GitHub issue, or any other key to close.',
  'ui.feedback.continue': 'continue',
  'ui.feedback.submit': 'submit',
  'ui.feedback.cancelAction': 'cancel',
  'ui.feedback.couldNotSubmit':
    'Could not submit feedback. Please try again later.',
  'ui.feedback.zdrNotAvailable':
    'Feedback collection is not available for organizations with custom data retention policies.',

  // ExitFlow
  'ui.exitFlow.goodbye1': 'Goodbye!',
  'ui.exitFlow.goodbye2': 'See you later!',
  'ui.exitFlow.goodbye3': 'Bye!',
  'ui.exitFlow.goodbye4': 'Later!',

  // ConsoleOAuthFlow
  'ui.oauth.title': 'Device Registration',
  'ui.oauth.visitUrl': 'Visit {url}',
  'ui.oauth.enterCode': 'and enter code: {code}',
  'ui.oauth.waiting': 'Waiting for authentication...',
  'ui.oauth.success': 'Successfully authenticated!',
  'ui.oauth.failed': 'Authentication failed.',
  'ui.oauth.cancelled': 'Authentication cancelled.',
  'ui.oauth.refreshError': 'Session refresh failed. Please re-authenticate.',
  'ui.oauth.checking': 'Checking authentication status...',
  'ui.oauth.expired': 'Session expired. Please re-authenticate.',
  'ui.oauth.codeCopied': '(Code copied to clipboard)',

  // CostThresholdDialog
  'ui.costThreshold.title': 'Cost Threshold Reached',
  'ui.costThreshold.description':
    "You've spent {amount} on the {api} this session.",

  // InvalidConfigDialog
  'ui.invalidConfig.title': 'Configuration Error',
  'ui.invalidConfig.fixAndExit': 'Exit and fix manually',
  'ui.invalidConfig.resetConfig': 'Reset with default configuration',

  // InvalidSettingsDialog
  'ui.invalidSettings.title': 'Settings Error',
  'ui.invalidSettings.continue': 'Continue without these settings',

  // ChannelDowngradeDialog
  'ui.channelDowngrade.title': 'Switch to Stable Channel',
  'ui.channelDowngrade.description':
    'Allow possible downgrade to stable version',

  // DevChannelsDialog
  'ui.devChannels.warning': 'WARNING: Loading development channels',

  // IdleReturnDialog
  'ui.idleReturn.description':
    "You've been away {formattedIdle}. What would you like to do?",
  'ui.idleReturn.continue': 'Continue this conversation',
  'ui.idleReturn.newConversation':
    'Send message as a new conversation',

  // AutoModeOptInDialog
  'ui.autoModeOptIn.title': 'Enable auto mode?',

  // BypassPermissionsModeDialog
  'ui.bypassPermissions.warning':
    'WARNING: Claude Code running in Bypass Permissions mode',

  // ApproveApiKey
  'ui.approveApiKey.description':
    'Detected a custom API key in your command or environment.',
  'ui.approveApiKey.yes': 'Yes',
  'ui.approveApiKey.noRecommended': 'No (recommended)',

  // HistorySearchDialog
  'ui.historySearch.placeholder': 'Filter history\u2026',
  'ui.historySearch.empty': 'No matching prompts',

  // RemoteCallout
  'ui.remoteCallout.title': 'Remote Control',
  'ui.remoteCallout.enable': 'Enable Remote Control for this session',
  'ui.remoteCallout.neverMind': 'Never mind',

  // RemoteEnvironmentDialog
  'ui.remoteEnv.title': 'Select Remote Environment',
  'ui.remoteEnv.configure':
    'Configure environments at: https://claude.ai/code',

  // MCPServerApprovalDialog
  'ui.mcpApproval.title':
    'New MCP server found in .mcp.json: {serverName}',
  'ui.mcpApproval.allow': 'Allow',
  'ui.mcpApproval.deny': 'Deny',

  // Quick search / fuzzy picker common
  'ui.fuzzyPicker.selectAction': 'Select',

  // ContextSuggestions
  'ui.contextSuggestions.title': 'Suggestions',
  'ui.contextSuggestions.save': 'save ~{tokens}',

  // InterruptedByUser
  'ui.interruptedByUser.text': 'Interrupted ',
  'ui.interruptedByUser.whatShouldClaudeDo': '\u00b7 What should Claude do instead?',

  // PrBadge
  'ui.prBadge.label': 'PR',

  // AwsAuthStatusBox
  'ui.awsAuthStatus.title': 'Cloud Authentication',

  // KeybindingWarnings
  'ui.keybindingWarnings.title': 'Keybinding Configuration Issues',
  'ui.keybindingWarnings.location': 'Location: ',
  'ui.keybindingWarnings.error': '[Error]',
  'ui.keybindingWarnings.warning': '[Warning]',

  // SkillImprovementSurvey
  'ui.skillSurvey.title': 'Skill improvement suggested for "{skillName}"',
  'ui.skillSurvey.apply': ': Apply',
  'ui.skillSurvey.dismiss': ': Dismiss',

  // LanguagePicker
  'ui.languagePicker.title': 'Enter your preferred response and voice language:',
  'ui.languagePicker.placeholder': 'e.g., Japanese, \u65e5\u672c\u8a9e, Espa\u00f1ol\u2026',
  'ui.languagePicker.defaultHint': 'Leave empty for default (English)',

  // DesktopHandoff
  'ui.desktopHandoff.checking': 'Checking for Claude Desktop\u2026',
  'ui.desktopHandoff.flushing': 'Saving session\u2026',
  'ui.desktopHandoff.opening': 'Opening Claude Desktop\u2026',
  'ui.desktopHandoff.success': 'Opening in Claude Desktop\u2026',
  'ui.desktopHandoff.error': 'Error: {error}',
  'ui.desktopHandoff.pressAnyKey': 'Press any key to continue\u2026',
  'ui.desktopHandoff.downloadPrompt': 'Download now? (y/n)',

  // ShowInIDEPrompt
  'ui.showInIDE.openedChanges': 'Opened changes in {ideName} \u29c9',
  'ui.showInIDE.editPrompt': 'Do you want to make this edit to ',
  'ui.showInIDE.saveFileHint': 'Save file to continue\u2026',
  'ui.showInIDE.escToCancel': 'Esc to cancel',
  'ui.showInIDE.tabToAmend': '\u00b7 Tab to amend',
  'ui.showInIDE.symlinkOutside': 'This will modify {target} (outside working directory) via a symlink',
  'ui.showInIDE.symlinkTarget': 'Symlink target: {target}',

  // FallbackToolUseErrorMessage
  'ui.fallbackError.toolFailed': 'Tool execution failed',
  'ui.fallbackError.invalidParams': 'Invalid tool parameters',
  'ui.fallbackError.plusLines': '\u2026 +{count} {lines} (',
  'ui.fallbackError.toSeeAll': 'to see all)',
  'ui.fallbackError.line': 'line',
  'ui.fallbackError.lines': 'lines',

  // General (HelpV2)
  'ui.general.description':
    'Claude understands your codebase, makes edits with your permission, and executes commands \u2014 right from your terminal.',
  'ui.general.shortcuts': 'Shortcuts',

  // HelpV2
  'ui.helpV2.dismissed': 'Help dialog dismissed',
  'ui.helpV2.browseDefault': 'Browse default commands:',
  'ui.helpV2.browseCustom': 'Browse custom commands:',
  'ui.helpV2.noCustom': 'No custom commands found',
  'ui.helpV2.forMoreHelp': 'For more help:',
  'ui.helpV2.toCancel': '{shortcut} to cancel',

  // ChannelsNotice
  'ui.channelsNotice.ignored': '{flag} ignored ({list})',
  'ui.channelsNotice.notAvailable': 'Channels are not currently available',
  'ui.channelsNotice.requiresAuth':
    'Channels require claude.ai authentication \u00b7 run /login, then restart',
  'ui.channelsNotice.blockedByPolicy': '{flag} blocked by org policy ({list})',
  'ui.channelsNotice.inboundDropped': 'Inbound messages will be silently dropped',
  'ui.channelsNotice.adminHint':
    'Have an administrator set channelsEnabled: true in managed settings to enable',
  'ui.channelsNotice.listening': 'Listening for channel messages from: {list}',
  'ui.channelsNotice.experimental':
    'Experimental \u00b7 inbound messages will be pushed into this session, this carries prompt injection risks. Restart Claude Code without {flag} to disable.',

  // FileEditTool use rejected/updated messages
  'ui.fileEdit.rejected': 'User rejected {operation} to ',
  'ui.fileEdit.noContent': '(No content)',
  'ui.fileEdit.plusLines': '\u2026 +{count} lines',
  'ui.fileEdit.added': 'Added ',
  'ui.fileEdit.removed': '{case}emoved ',
  'ui.fileEdit.line': 'line',
  'ui.fileEdit.lines': 'lines',

  // EffortCallout
  'ui.effortCallout.mediumRecommended': 'Medium (recommended)',
  'ui.effortCallout.high': 'High',
  'ui.effortCallout.low': 'Low',
  'ui.effortCallout.lowLabel': 'low',
  'ui.effortCallout.mediumLabel': 'medium',
  'ui.effortCallout.highLabel': 'high',

  // ValidationErrorsList
  'ui.validation.learnMore': 'Learn more: {link}',
  'ui.validation.fileNotSpecified': '(file not specified)',

  // FullscreenLayout - NewMessagesPill
  'ui.fullscreen.jumpToBottom': 'Jump to bottom',
  'ui.fullscreen.newMessages': '{count} new {messages}',

  // Onboarding
  'ui.onboarding.securityNotes': 'Security notes:',
  'ui.onboarding.claudeMistakes': 'Claude can make mistakes',
  'ui.onboarding.reviewResponses':
    'You should always review Claude\u2019s responses, especially when running code.',
  'ui.onboarding.promptInjection':
    'Due to prompt injection risks, only use it with code you trust',
  'ui.onboarding.moreDetails': 'For more details see:',
  'ui.onboarding.terminalSetup': 'Use Claude Code\u2019s terminal setup?',
  'ui.onboarding.optimalExperience':
    'For the optimal coding experience, enable the recommended settings for your terminal:',
  'ui.onboarding.optionEnter': 'Option+Enter for newlines and visual bell',
  'ui.onboarding.shiftEnter': 'Shift+Enter for newlines',
  'ui.onboarding.yesRecommended': 'Yes, use recommended settings',
  'ui.onboarding.noLater': 'No, maybe later with /terminal-setup',
  'ui.onboarding.confirmSkip': 'Enter to confirm \u00b7 Esc to skip',
  'ui.onboarding.changeThemeLater': 'To change this later, run /theme',

  // LogoV2 - condensed mode messages
  'ui.logoV2.debugMode': 'Debug mode enabled',
  'ui.logoV2.loggingTo': 'Logging to: {path}',
  'ui.logoV2.tmuxSession': 'tmux session: {session}',
  'ui.logoV2.messageFrom': 'Message from {org}:',
  'ui.logoV2.sandboxWarning':
    'Your bash commands will be sandboxed. Disable with /sandbox.',
} as const

// ── Root-level UI component keys (zh) ────────────────────
export const zh: Record<string, string> = {
  // PressEnterToContinue
  'ui.pressEnterToContinue': '按 Enter 继续\u2026',

  // TeleportStash
  'ui.teleportStash.title': '工作目录有更改',
  'ui.teleportStash.description':
    'Teleport 将切换 git 分支。是否要在继续之前存储这些更改？',
  'ui.teleportStash.stashAndContinue': '存储更改并继续',
  'ui.teleportStash.exit': '退出',
  'ui.teleportStash.failedGetChanges': '获取更改的文件失败',
  'ui.teleportStash.failedStash': '存储更改失败',
  'ui.teleportStash.checkingStatus': '正在检查 git 状态...',
  'ui.teleportStash.stashing': '正在存储更改...',
  'ui.teleportStash.noChanges': '没有需要存储的更改',
  'ui.teleportStash.noChangesDetected': '未检测到更改',
  'ui.teleportStash.foundChanges': 'Teleport 将切换 git 分支。发现了以下更改：',
  'ui.teleportStash.filesChanged': '{count} 个文件已更改',

  // CompactSummary
  'ui.compactSummary.summarizedConversation': '已摘要对话',
  'ui.compactSummary.compactSummary': '紧凑摘要',
  'ui.compactSummary.summarizedUpTo':
    '已摘要此点之前的 {count} 条消息',
  'ui.compactSummary.summarizedFrom':
    '已摘要从此点开始的 {count} 条消息',
  'ui.compactSummary.context': '上下文: "{context}"',

  // ThinkingToggle
  'ui.thinkingToggle.title': '切换思考模式',
  'ui.thinkingToggle.description':
    '为本次会话启用或禁用思考。',
  'ui.thinkingToggle.changingMidConversation':
    '正在对话中切换思考模式...',
  'ui.thinkingToggle.proceed': '是否继续？',
  'ui.thinkingToggle.enabled': '已启用',
  'ui.thinkingToggle.disabled': '已禁用',

  // ThemePicker
  'ui.themePicker.title': '主题',
  'ui.themePicker.description':
    '选择最适合您终端的文本样式',
  'ui.themePicker.letsGetStarted': '让我们开始吧。',
  'ui.themePicker.auto': '自动（匹配终端）',
  'ui.themePicker.dark': '深色模式',
  'ui.themePicker.light': '浅色模式',
  'ui.themePicker.darkColorblind': '深色模式（色盲友好）',
  'ui.themePicker.lightColorblind': '浅色模式（色盲友好）',
  'ui.themePicker.darkAnsi': '深色模式（仅 ANSI 颜色）',
  'ui.themePicker.lightAnsi': '浅色模式（仅 ANSI 颜色）',

  // ModelPicker
  'ui.modelPicker.title': '选择模型',
  'ui.modelPicker.description':
    '切换本次对话使用的 Claude 模型。',
  'ui.modelPicker.currentlyUsing':
    '当前会话正在使用 {model}...',
  'ui.modelPicker.currentModel': '当前模型',
  'ui.modelPicker.andMore': '还有 {count} 个\u2026',

  // OutputStylePicker
  'ui.outputStylePicker.title': '首选输出风格',
  'ui.outputStylePicker.description':
    '这将改变 Claude Code 与您沟通的方式',
  'ui.outputStylePicker.loading': '正在加载输出风格\u2026',

  // ResumeTask
  'ui.resumeTask.loading': '正在加载 Claude Code 会话\u2026',
  'ui.resumeTask.error': '加载 Claude Code 会话时出错',
  'ui.resumeTask.noSessions': '未找到 Claude Code 会话',
  'ui.resumeTask.selectToResume': '选择一个要恢复的会话',
  'ui.resumeTask.sessionTitle': '会话标题',
  'ui.resumeTask.checkInternet': '请检查您的网络连接',
  'ui.resumeTask.requiresAccount': 'Teleport 需要 Claude 账户',
  'ui.resumeTask.claudeError': '抱歉，Claude 遇到了错误',
  'ui.resumeTask.claudeCodeError': '抱歉，Claude Code 遇到了错误',
  'ui.resumeTask.retrying': '正在重试\u2026',
  'ui.resumeTask.fetching': '正在获取您的 Claude Code 会话\u2026',
  'ui.resumeTask.loginHint': '运行 /login 并选择"带订阅的 Claude 账户"',

  // WorkflowMultiselectDialog
  'ui.workflowSelect.title': '选择要安装的 GitHub 工作流',
  'ui.workflowSelect.requireOne': '必须至少选择一个工作流才能继续',

  // BridgeDialog (Remote Control)
  'ui.bridgeDialog.title': '远程控制',
  'ui.bridgeDialog.keyboardHint':
    'd 断开连接 \u00b7 空格显示二维码 \u00b7 Enter/Esc 关闭',

  // ContextVisualization
  'ui.contextVis.title': '上下文使用情况',
  'ui.contextVis.tokens': 'tokens',
  'ui.contextVis.estimatedByCategory': '按类别估算的使用量',
  'ui.contextVis.mcpTools': 'MCP 工具',
  'ui.contextVis.loadedOnDemand': '（按需加载）',
  'ui.contextVis.loaded': '已加载',
  'ui.contextVis.available': '可用',
  'ui.contextVis.mcpSlash': '/mcp',
  'ui.contextVis.customAgents': '自定义 Agents',
  'ui.contextVis.agentsSlash': ' /agents',
  'ui.contextVis.memoryFiles': '记忆文件',
  'ui.contextVis.memorySlash': ' /memory',
  'ui.contextVis.skills': '技能',
  'ui.contextVis.skillsSlash': ' /skills',
  'ui.contextVis.freeSpace': '空闲空间',
  'ui.contextVis.collapseErrors': '折叠错误: {errors}/{spawns} 次生成失败',
  'ui.contextVis.collapseIdle':
    '折叠空闲: {count} 次连续空运行',
  'ui.contextVis.contextStrategy': '上下文策略: 折叠 ({summary})',
  'ui.contextVis.waitingForTrigger': '等待首次触发',
  'ui.contextVis.nothingStaged': '尚未暂存',
  'ui.contextVis.staged': '已暂存',
  'ui.contextVis.span': '跨度',
  'ui.contextVis.spans': '个跨度',
  'ui.contextVis.spawn': '次生成',
  'ui.contextVis.spawns': '次生成',
  'ui.contextVis.summarized': '已摘要',

  // DiagnosticsDisplay
  'ui.diagnosticsDisplay.found':
    '在 {fileCount} {files} 中发现了 {totalIssues} 个新诊断{issues}',
  'ui.diagnosticsDisplay.issue': '个问题',
  'ui.diagnosticsDisplay.issues': '个问题',
  'ui.diagnosticsDisplay.file': '个文件',
  'ui.diagnosticsDisplay.files': '个文件',
  'ui.diagnosticsDisplay.fileProtocol': '(file://)',
  'ui.diagnosticsDisplay.claudeFsRight': '(claude_fs_right)',
  'ui.diagnosticsDisplay.line': '[第 {line}:{col} 行]',

  // ExportDialog
  'ui.exportDialog.title': '导出对话',
  'ui.exportDialog.subtitle': '选择导出方式：',
  'ui.exportDialog.copyToClipboard': '复制到剪贴板',
  'ui.exportDialog.copyDescription':
    '将对话内容复制到系统剪贴板',
  'ui.exportDialog.saveToFile': '保存到文件',
  'ui.exportDialog.saveDescription':
    '将对话内容保存到当前目录的文件中',
  'ui.exportDialog.copiedToClipboard': '对话已复制到剪贴板',
  'ui.exportDialog.exportedTo': '对话已导出到：{filepath}',
  'ui.exportDialog.failedExport':
    '导出对话失败：{error}',
  'ui.exportDialog.cancelled': '导出已取消',
  'ui.exportDialog.enterFilename': '输入文件名：',
  'ui.exportDialog.save': '保存',
  'ui.exportDialog.goBack': '返回',
  'ui.exportDialog.cancel': '取消',
  'ui.exportDialog.pressAgain': '按 {keyName} 再次退出',

  // Feedback
  'ui.feedback.title': '提交反馈 / Bug 报告',
  'ui.feedback.describeIssue': '请在下方描述问题：',
  'ui.feedback.editAndRetry':
    '编辑后按 Enter 重试，或按 Esc 取消',
  'ui.feedback.reportIncludes': '此报告将包含：',
  'ui.feedback.yourDescription': '- 您的反馈 / Bug 描述：',
  'ui.feedback.envInfo': '- 环境信息：',
  'ui.feedback.gitMetadata': '- Git 仓库元数据：',
  'ui.feedback.currentTranscript': '- 当前会话记录',
  'ui.feedback.privacyNotice':
    '我们将使用您的反馈来调试相关问题或改进 Claude Code 的功能（例如，降低未来出现 Bug 的风险）。',
  'ui.feedback.pressEnterToSubmit':
    '按 Enter 确认并提交。',
  'ui.feedback.submitting': '正在提交报告\u2026',
  'ui.feedback.thankYou': '感谢您的报告！',
  'ui.feedback.notSynced': '，未同步',
  'ui.feedback.hasLocalChanges': '，有本地更改',
  'ui.feedback.submitted': '反馈 / Bug 报告已提交',
  'ui.feedback.cancelled': '反馈 / Bug 报告已取消',
  'ui.feedback.errorSubmitting': '提交反馈 / Bug 报告时出错',
  'ui.feedback.feedbackId': '反馈 ID：{feedbackId}',
  'ui.feedback.pressEnterToOpen':
    '按 Enter 打开浏览器起草 GitHub Issue，或按任意其他键关闭。',
  'ui.feedback.continue': '继续',
  'ui.feedback.submit': '提交',
  'ui.feedback.cancelAction': '取消',
  'ui.feedback.couldNotSubmit':
    '无法提交反馈。请稍后重试。',
  'ui.feedback.zdrNotAvailable':
    '具有自定义数据保留策略的组织无法使用反馈收集功能。',

  // ExitFlow
  'ui.exitFlow.goodbye1': '再见！',
  'ui.exitFlow.goodbye2': '下次见！',
  'ui.exitFlow.goodbye3': '拜拜！',
  'ui.exitFlow.goodbye4': '回头见！',

  // ConsoleOAuthFlow
  'ui.oauth.title': '设备注册',
  'ui.oauth.visitUrl': '访问 {url}',
  'ui.oauth.enterCode': '并输入代码：{code}',
  'ui.oauth.waiting': '等待身份验证...',
  'ui.oauth.success': '验证成功！',
  'ui.oauth.failed': '验证失败。',
  'ui.oauth.cancelled': '验证已取消。',
  'ui.oauth.refreshError': '会话刷新失败。请重新验证。',
  'ui.oauth.checking': '正在检查验证状态...',
  'ui.oauth.expired': '会话已过期。请重新验证。',
  'ui.oauth.codeCopied': '（代码已复制到剪贴板）',

  // CostThresholdDialog
  'ui.costThreshold.title': '达到费用阈值',
  'ui.costThreshold.description':
    '本次会话您在 {api} 上已花费 {amount}。',

  // InvalidConfigDialog
  'ui.invalidConfig.title': '配置错误',
  'ui.invalidConfig.fixAndExit': '退出并手动修复',
  'ui.invalidConfig.resetConfig': '重置为默认配置',

  // InvalidSettingsDialog
  'ui.invalidSettings.title': '设置错误',
  'ui.invalidSettings.continue': '不使用这些设置继续',

  // ChannelDowngradeDialog
  'ui.channelDowngrade.title': '切换到稳定频道',
  'ui.channelDowngrade.description':
    '允许可能降级到稳定版本',

  // DevChannelsDialog
  'ui.devChannels.warning': '警告：正在加载开发频道',

  // IdleReturnDialog
  'ui.idleReturn.description':
    '您已离开 {formattedIdle}。想做什么？',
  'ui.idleReturn.continue': '继续此对话',
  'ui.idleReturn.newConversation':
    '作为新对话发送消息',

  // AutoModeOptInDialog
  'ui.autoModeOptIn.title': '启用自动模式？',

  // BypassPermissionsModeDialog
  'ui.bypassPermissions.warning':
    '警告：Claude Code 正在以绕过权限模式运行',

  // ApproveApiKey
  'ui.approveApiKey.description':
    '在您的命令或环境中检测到自定义 API 密钥。',
  'ui.approveApiKey.yes': '是',
  'ui.approveApiKey.noRecommended': '否（推荐）',

  // HistorySearchDialog
  'ui.historySearch.placeholder': '筛选历史\u2026',
  'ui.historySearch.empty': '没有匹配的提示',

  // RemoteCallout
  'ui.remoteCallout.title': '远程控制',
  'ui.remoteCallout.enable': '为本次会话启用远程控制',
  'ui.remoteCallout.neverMind': '算了',

  // RemoteEnvironmentDialog
  'ui.remoteEnv.title': '选择远程环境',
  'ui.remoteEnv.configure':
    '配置环境：https://claude.ai/code',

  // MCPServerApprovalDialog
  'ui.mcpApproval.title':
    '在 .mcp.json 中发现新的 MCP 服务器：{serverName}',
  'ui.mcpApproval.allow': '允许',
  'ui.mcpApproval.deny': '拒绝',

  // Quick search / fuzzy picker common
  'ui.fuzzyPicker.selectAction': '选择',

  // ContextSuggestions
  'ui.contextSuggestions.title': '建议',
  'ui.contextSuggestions.save': '节省约 ~{tokens}',

  // InterruptedByUser
  'ui.interruptedByUser.text': '已中断 ',
  'ui.interruptedByUser.whatShouldClaudeDo': '\u00b7 Claude 应该怎么做？',

  // PrBadge
  'ui.prBadge.label': 'PR',

  // AwsAuthStatusBox
  'ui.awsAuthStatus.title': '云身份验证',

  // KeybindingWarnings
  'ui.keybindingWarnings.title': '键位绑定配置问题',
  'ui.keybindingWarnings.location': '位置：',
  'ui.keybindingWarnings.error': '[错误]',
  'ui.keybindingWarnings.warning': '[警告]',

  // SkillImprovementSurvey
  'ui.skillSurvey.title': '为"{skillName}"建议的技能改进',
  'ui.skillSurvey.apply': '：应用',
  'ui.skillSurvey.dismiss': '：忽略',

  // LanguagePicker
  'ui.languagePicker.title': '输入您偏好的回复和语音语言：',
  'ui.languagePicker.placeholder': '例如：日语, \u65e5\u672c\u8a9e, Espa\u00f1ol\u2026',
  'ui.languagePicker.defaultHint': '留空则使用默认语言（英语）',

  // DesktopHandoff
  'ui.desktopHandoff.checking': '正在检查 Claude Desktop\u2026',
  'ui.desktopHandoff.flushing': '正在保存会话\u2026',
  'ui.desktopHandoff.opening': '正在打开 Claude Desktop\u2026',
  'ui.desktopHandoff.success': '正在在 Claude Desktop 中打开\u2026',
  'ui.desktopHandoff.error': '错误：{error}',
  'ui.desktopHandoff.pressAnyKey': '按任意键继续\u2026',
  'ui.desktopHandoff.downloadPrompt': '现在下载？(y/n)',

  // ShowInIDEPrompt
  'ui.showInIDE.openedChanges': '在 {ideName} 中打开了更改 \u29c9',
  'ui.showInIDE.editPrompt': '您想对此文件进行此编辑吗 ',
  'ui.showInIDE.saveFileHint': '保存文件以继续\u2026',
  'ui.showInIDE.escToCancel': 'Esc 取消',
  'ui.showInIDE.tabToAmend': '\u00b7 Tab 修改',
  'ui.showInIDE.symlinkOutside': '将通过符号链接修改 {target}（工作目录外）',
  'ui.showInIDE.symlinkTarget': '符号链接目标：{target}',

  // FallbackToolUseErrorMessage
  'ui.fallbackError.toolFailed': '工具执行失败',
  'ui.fallbackError.invalidParams': '无效的工具参数',
  'ui.fallbackError.plusLines': '\u2026 +{count} {lines}（',
  'ui.fallbackError.toSeeAll': '查看全部）',
  'ui.fallbackError.line': '行',
  'ui.fallbackError.lines': '行',

  // General (HelpV2)
  'ui.general.description': 'Claude 能理解你的代码库，在你的许可下进行编辑，并执行命令——一切都在终端中完成。',
  'ui.general.shortcuts': '快捷键',

  // HelpV2
  'ui.helpV2.dismissed': '帮助对话框已关闭',
  'ui.helpV2.browseDefault': '浏览默认命令：',
  'ui.helpV2.browseCustom': '浏览自定义命令：',
  'ui.helpV2.noCustom': '未找到自定义命令',
  'ui.helpV2.forMoreHelp': '更多帮助：',
  'ui.helpV2.toCancel': '{shortcut} 取消',

  // ChannelsNotice
  'ui.channelsNotice.ignored': '{flag} 已忽略 ({list})',
  'ui.channelsNotice.notAvailable': '频道当前不可用',
  'ui.channelsNotice.requiresAuth': '频道需要 claude.ai 认证 · 运行 /login，然后重新启动',
  'ui.channelsNotice.blockedByPolicy': '{flag} 被组织策略阻止 ({list})',
  'ui.channelsNotice.inboundDropped': '入站消息将被静默丢弃',
  'ui.channelsNotice.adminHint': '请管理员在托管设置中将 channelsEnabled 设置为 true 以启用',
  'ui.channelsNotice.listening': '正在监听来自以下频道的消息：{list}',
  'ui.channelsNotice.experimental': '实验性 · 入站消息将被推送到此会话，存在提示注入风险。重启 Claude Code 时不使用 {flag} 以禁用。',

  // FileEditTool use rejected/updated messages
  'ui.fileEdit.rejected': '用户拒绝了 {operation} ',
  'ui.fileEdit.noContent': '（无内容）',
  'ui.fileEdit.plusLines': '\u2026 +{count} 行',
  'ui.fileEdit.added': '添加了 ',
  'ui.fileEdit.removed': '{case}删除了 ',
  'ui.fileEdit.line': '行',
  'ui.fileEdit.lines': '行',

  // EffortCallout
  'ui.effortCallout.mediumRecommended': '中等（推荐）',
  'ui.effortCallout.high': '高',
  'ui.effortCallout.low': '低',
  'ui.effortCallout.lowLabel': '低',
  'ui.effortCallout.mediumLabel': '中',
  'ui.effortCallout.highLabel': '高',

  // ValidationErrorsList
  'ui.validation.learnMore': '了解更多：{link}',
  'ui.validation.fileNotSpecified': '（未指定文件）',

  // FullscreenLayout - NewMessagesPill
  'ui.fullscreen.jumpToBottom': '跳到底部',
  'ui.fullscreen.newMessages': '{count} 条新{messages}',

  // Onboarding
  'ui.onboarding.securityNotes': '安全提示：',
  'ui.onboarding.claudeMistakes': 'Claude 可能会犯错',
  'ui.onboarding.reviewResponses': '你应该始终审查 Claude 的回复，特别是在运行代码时。',
  'ui.onboarding.promptInjection': '由于提示注入风险，只能与你信任的代码一起使用',
  'ui.onboarding.moreDetails': '更多详情请参阅：',
  'ui.onboarding.terminalSetup': '使用 Claude Code 的终端设置？',
  'ui.onboarding.optimalExperience': '为获得最佳编码体验，请为你的终端启用推荐设置：',
  'ui.onboarding.optionEnter': 'Option+Enter 换行和视觉铃声',
  'ui.onboarding.shiftEnter': 'Shift+Enter 换行',
  'ui.onboarding.yesRecommended': '是的，使用推荐设置',
  'ui.onboarding.noLater': '不，稍后通过 /terminal-setup 设置',
  'ui.onboarding.confirmSkip': 'Enter 确认 · Esc 跳过',
  'ui.onboarding.changeThemeLater': '要稍后更改，请运行 /theme',

  // LogoV2 - condensed mode messages
  'ui.logoV2.debugMode': '调试模式已启用',
  'ui.logoV2.loggingTo': '日志输出到：{path}',
  'ui.logoV2.tmuxSession': 'tmux 会话：{session}',
  'ui.logoV2.messageFrom': '来自 {org} 的消息：',
  'ui.logoV2.sandboxWarning': '你的 bash 命令将被沙箱化。使用 /sandbox 禁用。',
}
