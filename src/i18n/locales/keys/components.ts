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
    'Changing thinking mode mid-conversation will increase latency and may reduce quality. For best results, set this at the start of a session.',
  'ui.thinkingToggle.proceed': 'Do you want to proceed?',
  'ui.thinkingToggle.enabled': 'Enabled',
  'ui.thinkingToggle.enabledDesc': 'Claude will think before responding',
  'ui.thinkingToggle.disabled': 'Disabled',
  'ui.thinkingToggle.disabledDesc': 'Claude will respond without extended thinking',

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
  'ui.workflowSelect.subtitleDetailed':
    'We\'ll create a workflow file in your repository for each one you select.',
  'ui.workflowSelect.requireOne':
    'You must select at least one workflow to continue',
  'ui.workflowSelect.moreExamples':
    'More workflow examples (issue triage, CI fixes, etc.) at:',
  'ui.workflowSelect.pressAgain': 'Press {keyName} again to exit',

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
  'ui.feedback.pressAgain': 'Press {keyName} again to exit',
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
  'ui.oauth.pasteHere': 'Paste code here if prompted > ',
  'ui.oauth.tokenInfo': 'Your OAuth token (valid for 1 year):',
  'ui.oauth.selectMethod': 'Select login method:',
  'ui.oauth.openingBrowser': 'Opening browser to sign in\u2026',
  'ui.oauth.creatingApiKey': 'Creating API key for Claude Code\u2026',
  'ui.oauth.bedrockDesc': 'Claude Code supports Amazon Bedrock, Microsoft Foundry, and Vertex AI. Set the required environment variables, then restart Claude Code.',
  'ui.oauth.enterpriseContact': 'If you are part of an enterprise organization, contact your administrator for setup instructions.',
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
  'ui.oauth.claudeAccount': 'Claude account',
  'ui.oauth.claudeAccountDesc': 'Pro, Max, Team, or Enterprise',
  'ui.oauth.consoleAccount': 'Console account',
  'ui.oauth.consoleAccountDesc': 'API usage billing',
  'ui.oauth.thirdParty': 'Third-party API',
  'ui.oauth.thirdPartyDesc': 'Amazon Bedrock, Microsoft Foundry, or Vertex AI',

  // CostThresholdDialog
  'ui.costThreshold.title': 'Cost Threshold Reached',
  'ui.costThreshold.description':
    "You've spent {amount} on the {api} this session.",
  'ui.costThreshold.learnMore': 'Learn more about how to monitor your spending:',
  'ui.costThreshold.gotIt': 'Got it, thanks!',

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
  'ui.channelDowngrade.stableWarning':
    'The stable channel may have an older version than what you\'re currently running ({currentVersion}).',

  // DevChannelsDialog
  'ui.devChannels.warning': 'WARNING: Loading development channels',
  'ui.devChannels.dangerousWarning':
    '--dangerously-load-development-channels is for local channel development only. Do not use this option to run channels you have downloaded off the internet.',
  'ui.devChannels.useChannelsFlag':
    'Please use --channels to run a list of approved channels.',
  'ui.devChannels.localDev': 'I am using this for local development',
  'ui.devChannels.exit': 'Exit',

  // IdleReturnDialog
  'ui.idleReturn.description':
    "You've been away {formattedIdle}. What would you like to do?",
  'ui.idleReturn.continue': 'Continue this conversation',
  'ui.idleReturn.newConversation':
    'Send message as a new conversation',
  'ui.idleReturn.newTaskHint':
    'If this is a new task, clearing context will save usage and be faster.',
  'ui.idleReturn.dontAskAgain': 'Don\'t ask me again',

  // AutoModeOptInDialog
  'ui.autoModeOptIn.title': 'Enable auto mode?',
  'ui.autoModeOptIn.noExit': 'No, exit',
  'ui.autoModeOptIn.noGoBack': 'No, go back',
  'ui.autoModeOptIn.yesDefault': 'Yes, and make it my default mode',
  'ui.autoModeOptIn.yesEnable': 'Yes, enable auto mode',

  // BypassPermissionsModeDialog
  'ui.bypassPermissions.warning':
    'WARNING: Claude Code running in Bypass Permissions mode',
  'ui.bypassPermissions.desc1':
    'In Bypass Permissions mode, Claude Code will not ask for your approval before running potentially dangerous commands.',
  'ui.bypassPermissions.desc2':
    'This mode should only be used in a sandboxed container/VM that has restricted internet access and can easily be restored if damaged.',
  'ui.bypassPermissions.responsibility':
    'By proceeding, you accept all responsibility for actions taken while running in Bypass Permissions mode.',
  'ui.bypassPermissions.noExit': 'No, exit',
  'ui.bypassPermissions.yesAccept': 'Yes, I accept',

  // ApproveApiKey
  'ui.approveApiKey.description':
    'Detected a custom API key in your command or environment.',
  'ui.approveApiKey.yes': 'Yes',
  'ui.approveApiKey.noRecommended': 'No (recommended)',
  'ui.approveApiKey.question': 'Do you want to use this API key?',

  // HistorySearchDialog
  'ui.historySearch.title': 'Search prompts',
  'ui.historySearch.placeholder': 'Filter history\u2026',
  'ui.historySearch.empty': 'No matching prompts',
  'ui.historySearch.loading': 'Loading\u2026',
  'ui.historySearch.noHistory': 'No history yet',

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

  // WelcomeV2
  'ui.welcomeV2.title': 'Welcome to Claude Code',

  // TeleportResumeWrapper
  'ui.teleportResume.resuming': 'Resuming session\u2026',
  'ui.teleportResume.loading': 'Loading "{title}"\u2026',
  'ui.teleportResume.failed': 'Failed to resume session',
  'ui.teleportResume.pressEsc': 'Press {key} to cancel',

  // LogoV2 - condensed mode messages
  'ui.logoV2.debugMode': 'Debug mode enabled',
  'ui.logoV2.loggingTo': 'Logging to: {path}',
  'ui.logoV2.tmuxSession': 'tmux session: {session}',
  'ui.logoV2.messageFrom': 'Message from {org}:',
  'ui.logoV2.sandboxWarning':
    'Your bash commands will be sandboxed. Disable with /sandbox.',

  // FeedbackSurvey
  'ui.feedbackSurvey.thanks': 'Thanks for the feedback!',
  'ui.feedbackSurvey.submitted': '\u2713 Thanks for sharing your transcript!',
  'ui.feedbackSurvey.submitting': 'Sharing transcript\u2026',
  'ui.feedbackSurvey.followUp':
    '(Optional) Press [1] to tell us what went well \u00b7 {command}',
  'ui.feedbackSurvey.reportIssue':
    'Use /issue to report model behavior issues.',
  'ui.feedbackSurvey.shareFeedback':
    'Use {command} to share detailed feedback anytime.',

  // FeedbackSurveyView
  'ui.feedbackSurveyView.question':
    'How is Claude doing this session? (optional)',
  'ui.feedbackSurveyView.bad': 'Bad',
  'ui.feedbackSurveyView.fine': 'Fine',
  'ui.feedbackSurveyView.good': 'Good',
  'ui.feedbackSurveyView.dismiss': 'Dismiss',

  // TranscriptSharePrompt
  'ui.transcriptShare.question':
    'Can Anthropic look at your session transcript to help us improve Claude Code?',
  'ui.transcriptShare.learnMore':
    'Learn more: https://code.claude.com/docs/en/data-usage#session-quality-surveys',
  'ui.transcriptShare.yes': 'Yes',
  'ui.transcriptShare.no': 'No',
  'ui.transcriptShare.dontAsk': 'Don\u2019t ask again',

  // MCPServerMultiselectDialog
  'ui.mcpMultiselect.title':
    '{count} new MCP servers found in .mcp.json',
  'ui.mcpMultiselect.subtitle': 'Select any you wish to enable.',

  // MCPServerDialogCopy
  'ui.mcpDialogCopy.text':
    'MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the ',
  'ui.mcpDialogCopy.docLink': 'MCP documentation',

  // MCPServerDesktopImportDialog
  'ui.mcpDesktopImport.title': 'Import MCP Servers from Claude Desktop',
  'ui.mcpDesktopImport.subtitle': 'Found {count} MCP {servers} in Claude Desktop.',
  'ui.mcpDesktopImport.success': 'Successfully imported {count} MCP {servers} to {scope} config.',
  'ui.mcpDesktopImport.noneImported': 'No servers were imported.',
  'ui.mcpDesktopImport.noteCollisions':
    'Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix.',
  'ui.mcpDesktopImport.selectPrompt': 'Please select the servers you want to import:',
  'ui.mcpDesktopImport.alreadyExists': ' (already exists)',
  'ui.mcpDesktopImport.cancel': 'cancel',

  // IdeAutoConnectDialog
  'ui.ideAutoConnect.title': 'Automatically connect to IDE on startup?',
  'ui.ideAutoConnect.description':
    'You can also configure this in /config or with the --ide flag',
  'ui.ideAutoConnect.disableTitle': 'Do you wish to disable auto-connect to IDE?',
  'ui.ideAutoConnect.disableSubtitle': 'You can also configure this in /config',

  // IdeOnboardingDialog
  'ui.ideOnboarding.title': 'IDE Extension Setup',
  'ui.ideOnboarding.description':
    'Claude Code integrates with your IDE to provide better context awareness.',

  // IdeStatusIndicator
  'ui.ideStatus.linesSelected': '{count} {lines} selected',
  'ui.ideStatus.inFile': 'In {name}',
  'ui.ideStatus.line': 'line',
  'ui.ideStatus.lines': 'lines',

  // TeleportError
  'ui.teleportError.loginRequired':
    'You need to log in with a Claude account to use Teleport.',
  'ui.teleportError.gitStashRequired':
    'Please stash or commit your changes before teleporting.',
  'ui.teleportError.requiresAccount': 'Teleport requires a Claude.ai account.',
  'ui.teleportError.proWillBeUsed': 'Your Claude Pro/Max subscription will be used by Claude Code.',
  'ui.teleportError.loginTitle': 'Log in to Claude',
  'ui.teleportError.loginWithAccount': 'Login with Claude account',

  // TeleportRepoMismatch
  'ui.teleportRepoMismatch.title': 'Repository path mismatch',
  'ui.teleportRepoMismatch.selectPath':
    'Select the local path matching {repo}:',
  'ui.teleportRepoMismatch.cancel': 'Cancel teleport',
  'ui.teleportRepoMismatch.validating': 'Validating path...',
  'ui.teleportRepoMismatch.dialogTitle': 'Teleport to Repo',
  'ui.teleportRepoMismatch.usePath': 'Use {path}',
  'ui.teleportRepoMismatch.openIn': 'Open Claude Code in {repo}:',
  'ui.teleportRepoMismatch.validatingRepo': 'Validating repository\u2026',
  'ui.teleportRepoMismatch.runFrom': 'Run claude --teleport from a checkout of {repo}',
  'ui.teleportRepoMismatch.noLongerValid': '{path} no longer contains the correct repository. Select another path.',
  'ui.teleportRepoMismatch.cancelOption': 'Cancel',

  // QuickOpenDialog
  'ui.quickOpen.title': 'Quick Open',
  'ui.quickOpen.placeholder': 'Search files by name...',
  'ui.quickOpen.noResults': 'No files found',
  'ui.quickOpen.selectAction': 'open in editor',

  // GlobalSearchDialog
  'ui.globalSearch.title': 'Global Search',
  'ui.globalSearch.placeholder': 'Search across files...',
  'ui.globalSearch.noResults': 'No matches found',
  'ui.globalSearch.searching': 'Searching...',
  'ui.globalSearch.truncated': 'Results truncated. Refine your search.',
  'ui.globalSearch.matchesIn': 'matches in {file}',
  'ui.globalSearch.matches': 'matches',
  'ui.globalSearch.typeToSearch': 'Type to search\u2026',
  'ui.globalSearch.selectAction': 'open in editor',

  // LogSelector
  'ui.logSelector.title': 'Select a session to resume',
  'ui.logSelector.empty': 'No sessions found',
  'ui.logSelector.loading': 'Loading sessions...',
  'ui.logSelector.deleteConfirm': 'Are you sure you want to delete this session?',
  'ui.logSelector.searching': 'Searching\u2026',
  'ui.logSelector.claudeFound': 'Claude found these results:',
  'ui.logSelector.noMatches': 'No matching sessions found.',
  'ui.logSelector.searchFailed': 'Search failed',

  // Spinner
  'ui.spinner.thinking': 'Thinking',
  'ui.spinner.working': 'Working',
  'ui.spinner.searching': 'Searching',
  'ui.spinner.editing': 'Editing',
  'ui.spinner.reading': 'Reading',
  'ui.spinner.waiting': 'Waiting',
  'ui.spinner.processing': 'Processing',

  // AutoUpdater
  'ui.autoUpdater.updateAvailable': 'Update available: v{version}',
  'ui.autoUpdater.updating': 'Updating...',
  'ui.autoUpdater.updated': 'Updated to v{version}',
  'ui.autoUpdater.latest': 'You have the latest version.',
  'ui.autoUpdater.error': 'Update failed: {error}',
  'ui.autoUpdater.skipVersion': 'Skip this version',
  'ui.autoUpdater.installNow': 'Install now',
  'ui.autoUpdater.later': 'Later',
  'ui.autoUpdater.autoUpdating': 'Auto-updating\u2026',
  'ui.autoUpdater.restartToApply': '\u2713 Update installed \u00b7 Restart to apply',
  'ui.autoUpdater.updateFailed': '\u2717 Auto-update failed \u00b7 Try',
  'ui.autoUpdater.or': 'or',

  // Settings
  'ui.settings.status': 'Status',
  'ui.settings.config': 'Config',
  'ui.settings.usage': 'Usage',
  'ui.settings.gates': 'Gates',
  'ui.settings.searchPlaceholder': 'Search settings\u2026',
  'ui.settings.enableAutoUpdates': 'Enable Auto-Updates',
  'ui.settings.autoUpdateEnvControlled': 'Auto-updates are controlled by an environment variable and cannot be changed here.',
  'ui.settings.autoUpdateDevDisabled': 'Auto-updates are disabled in development builds.',
  'ui.settings.autoUpdateUnsetEnv': 'Unset {envVar} to re-enable auto-updates.',
  'ui.settings.autoUpdateLatestChannel': 'Enable with latest channel',
  'ui.settings.autoUpdateStableChannel': 'Enable with stable channel',
  'ui.settings.disabled': 'Disabled',

  // Setting labels
  'ui.settings.autoCompact': 'Auto-compact',
  'ui.settings.showTips': 'Show tips',
  'ui.settings.reduceMotion': 'Reduce motion',
  'ui.settings.thinkingMode': 'Thinking mode',
  'ui.settings.promptSuggestions': 'Prompt suggestions',
  'ui.settings.speculativeExecution': 'Speculative execution',
  'ui.settings.rewindCode': 'Rewind code (checkpoints)',
  'ui.settings.verboseOutput': 'Verbose output',
  'ui.settings.terminalProgressBar': 'Terminal progress bar',
  'ui.settings.showTerminalStatus': 'Show status in terminal tab',
  'ui.settings.showTurnDuration': 'Show turn duration',
  'ui.settings.defaultPermissionMode': 'Default permission mode',
  'ui.settings.autoModeDuringPlan': 'Use auto mode during plan',
  'ui.settings.respectGitignore': 'Respect .gitignore in file picker',
  'ui.settings.alwaysCopyFull': 'Always copy full response (skip /copy picker)',
  'ui.settings.copyOnSelect': 'Copy on select',
  'ui.settings.autoUpdateChannel': 'Auto-update channel',
  'ui.settings.theme': 'Theme',
  'ui.settings.pushWhenIdle': 'Push when idle',
  'ui.settings.pushWhenInputNeeded': 'Push when input needed',
  'ui.settings.pushWhenClaudeDecides': 'Push when Claude decides',
  'ui.settings.outputStyle': 'Output style',
  'ui.settings.wysiwyg': 'What you see by default',
  'ui.settings.language': 'Language',
  'ui.settings.uiLanguage': 'UI Language',
  'ui.settings.editorMode': 'Editor mode',
  'ui.settings.showPrStatus': 'Show PR status footer',
  'ui.settings.model': 'Model',
  'ui.settings.diffTool': 'Diff tool',
  'ui.settings.autoConnectIde': 'Auto-connect to IDE (external terminal)',
  'ui.settings.autoInstallIdeExt': 'Auto-install IDE extension',
  'ui.settings.claudeChromeDefault': 'Claude in Chrome enabled by default',
  'ui.settings.defaultTeammateModel': 'Default teammate model',
  'ui.settings.enableRemoteForAll': 'Enable Remote Control for all sessions',
  'ui.settings.externalClaudeMd': 'External CLAUDE.md includes',

  // Config UI strings
  'ui.settings.typeToFilter': 'Type to filter',
  'ui.settings.moreBelow': 'more below',
  'ui.settings.defaultLeadersModel': 'Default (leader\'s model)',
  'ui.settings.clear': 'clear',
  'ui.settings.change': 'change',
  'ui.settings.search': 'search',
  'ui.settings.disableExternalIncludes': 'disable external includes',
  'ui.settings.teammateModelHeader': 'Default model for newly spawned teammates. The leader can override via the tool call\'s model parameter.',
  'ui.settings.changingThinkingWarning': 'Changing thinking mode mid-conversation will increase latency and may reduce quality.',

  // Stats
  'ui.stats.title': 'Session Statistics',
  'ui.stats.tokensUsed': 'Tokens used',
  'ui.stats.apiCalls': 'API calls',
  'ui.stats.toolsUsed': 'Tools used',
  'ui.stats.sessionTime': 'Session time',
  'ui.stats.tabOverview': 'Overview',
  'ui.stats.tabModels': 'Models',

  // ClaudeMdExternalIncludes
  'ui.claudeMdExternal.title': 'External Configuration Includes',
  'ui.claudeMdExternal.description':
    'CLAUDE.md files in the following locations will be included:',
  'ui.claudeMdExternal.allowTitle': 'Allow external CLAUDE.md file imports?',
  'ui.claudeMdExternal.warning': "This project's CLAUDE.md imports files outside the current working directory. Never allow this for third-party repositories.",
  'ui.claudeMdExternal.externalImports': 'External imports:',
  'ui.claudeMdExternal.securityWarning': 'Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks',
  'ui.claudeMdExternal.yesAllow': 'Yes, allow external imports',
  'ui.claudeMdExternal.noDisable': 'No, disable external imports',

  // WorktreeExitDialog
  'ui.worktreeExit.title': 'Exit Worktree',
  'ui.worktreeExit.keep': 'Keep changes',
  'ui.worktreeExit.discard': 'Discard changes',
  'ui.worktreeExit.exitingTitle': 'Exiting worktree session',
  'ui.worktreeExit.keeping': 'Keeping worktree\u2026',
  'ui.worktreeExit.removing': 'Removing worktree\u2026',
  'ui.worktreeExit.removedNoChanges': 'Worktree removed (no changes)',
  'ui.worktreeExit.cleanupFailed': 'Worktree cleanup failed, exiting anyway',
  'ui.worktreeExit.noActiveSession': 'No active worktree session found',
  'ui.worktreeExit.keepWorktree': 'Keep worktree',
  'ui.worktreeExit.keepWithTmux': 'Keep worktree and tmux session',
  'ui.worktreeExit.keepKillTmux': 'Keep worktree, kill tmux session',
  'ui.worktreeExit.removeWorktree': 'Remove worktree',
  'ui.worktreeExit.removeWithTmux': 'Remove worktree and tmux session',
  'ui.worktreeExit.keepDesc': 'Stays at {path}',
  'ui.worktreeExit.keepWithTmuxDesc': 'Stays at {path}. Reattach with: tmux attach -t {session}',
  'ui.worktreeExit.keepKillTmuxDesc': 'Keeps worktree at {path}, terminates tmux session.',
  'ui.worktreeExit.removeDescAll': 'All changes and commits will be lost.',
  'ui.worktreeExit.removeDescClean': 'Clean up the worktree directory.',
  'ui.worktreeExit.youHaveBoth': 'You have {changes} uncommitted {files} and {commits} {commitLabel} on {branch}. All will be lost if you remove.',
  'ui.worktreeExit.youHaveChanges': 'You have {changes} uncommitted {files}. These will be lost if you remove the worktree.',
  'ui.worktreeExit.youHaveCommits': 'You have {commits} {commitLabel} on {branch}. The branch will be deleted if you remove the worktree.',
  'ui.worktreeExit.workingInWorktree': 'You are working in a worktree. Keep it to continue working there, or remove it to clean up.',
  'ui.worktreeExit.removedWithUncommitted': 'Worktree removed. {commits} {commitLabel} and uncommitted changes were discarded.{tmuxNote}',
  'ui.worktreeExit.removedWithCommits': 'Worktree removed. {commits} {commitLabel} on {branch} {wasLabel} discarded.{tmuxNote}',
  'ui.worktreeExit.removedWithChanges': 'Worktree removed. Uncommitted changes were discarded.{tmuxNote}',
  'ui.worktreeExit.removedSimple': 'Worktree removed.{tmuxNote}',
  'ui.worktreeExit.keptWithPath': 'Worktree kept. Your work is saved at {path} on branch {branch}.',
  'ui.worktreeExit.keptTmux': 'Worktree kept. Your work is saved at {path} on branch {branch}. Reattach to tmux session with: tmux attach -t {session}',
  'ui.worktreeExit.keptKillTmux': 'Worktree kept at {path} on branch {branch}. Tmux session terminated.',
  'ui.worktreeExit.tmuxTerminated': ' Tmux session terminated.',

  // ClaudeInChromeOnboarding
  'ui.claudeChromeOnboarding.title': 'Claude in Chrome',
  'ui.claudeChromeOnboarding.description':
    'Enable Claude in Chrome to browse the web during conversations.',
  'ui.claudeChromeOnboarding.dialogTitle': 'Claude in Chrome (Beta)',
  'ui.claudeChromeOnboarding.requiresExtension': 'Requires the Chrome extension. Get started at',
  'ui.claudeChromeOnboarding.mainDesc': 'Claude in Chrome works with the Chrome extension to let you control your browser directly from Claude Code. You can navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests.',
  'ui.claudeChromeOnboarding.sitePermissions': 'Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites Claude can browse, click, and type on',
  'ui.claudeChromeOnboarding.forMoreInfo': 'For more info, use',
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
    '在对话中切换思考模式会增加延迟并可能降低质量。为获得最佳效果，请在会话开始时设置此选项。',
  'ui.thinkingToggle.proceed': '是否继续？',
  'ui.thinkingToggle.enabled': '已启用',
  'ui.thinkingToggle.enabledDesc': 'Claude 将在回复前进行思考',
  'ui.thinkingToggle.disabled': '已禁用',
  'ui.thinkingToggle.disabledDesc': 'Claude 将直接回复，不进行扩展思考',

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
  'ui.workflowSelect.subtitleDetailed': '我们将在您的仓库中为您选择的每个工作流创建工作流文件。',
  'ui.workflowSelect.requireOne': '必须至少选择一个工作流才能继续',
  'ui.workflowSelect.moreExamples': '更多工作流示例（问题分类、CI 修复等）请访问：',
  'ui.workflowSelect.pressAgain': '按 {keyName} 再次退出',

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
  'ui.feedback.pressAgain': '按 {keyName} 再次退出',
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
  'ui.oauth.pasteHere': '如果提示，请在此粘贴代码 > ',
  'ui.oauth.tokenInfo': '您的 OAuth 令牌（有效期 1 年）：',
  'ui.oauth.selectMethod': '选择登录方式：',
  'ui.oauth.openingBrowser': '正在打开浏览器登录\u2026',
  'ui.oauth.creatingApiKey': '正在为 Claude Code 创建 API 密钥\u2026',
  'ui.oauth.bedrockDesc': 'Claude Code 支持 Amazon Bedrock、Microsoft Foundry 和 Vertex AI。设置所需的环境变量，然后重新启动 Claude Code。',
  'ui.oauth.enterpriseContact': '如果您是企业组织的成员，请联系管理员获取设置说明。',
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
  'ui.oauth.claudeAccount': 'Claude 账户',
  'ui.oauth.claudeAccountDesc': 'Pro、Max、团队或企业版',
  'ui.oauth.consoleAccount': '控制台账户',
  'ui.oauth.consoleAccountDesc': 'API 使用计费',
  'ui.oauth.thirdParty': '第三方 API',
  'ui.oauth.thirdPartyDesc': 'Amazon Bedrock、Microsoft Foundry 或 Vertex AI',

  // CostThresholdDialog
  'ui.costThreshold.title': '达到费用阈值',
  'ui.costThreshold.description':
    '本次会话您在 {api} 上已花费 {amount}。',
  'ui.costThreshold.learnMore': '了解更多关于如何监控支出的信息：',
  'ui.costThreshold.gotIt': '知道了，谢谢！',

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
  'ui.channelDowngrade.stableWarning':
    '稳定频道可能比您当前运行的版本 ({currentVersion}) 更旧。',

  // DevChannelsDialog
  'ui.devChannels.warning': '警告：正在加载开发频道',
  'ui.devChannels.dangerousWarning': '--dangerously-load-development-channels 仅用于本地频道开发。请勿使用此选项运行从互联网下载的频道。',
  'ui.devChannels.useChannelsFlag': '请使用 --channels 运行已批准的频道列表。',
  'ui.devChannels.localDev': '我用于本地开发',
  'ui.devChannels.exit': '退出',

  // IdleReturnDialog
  'ui.idleReturn.description':
    '您已离开 {formattedIdle}。想做什么？',
  'ui.idleReturn.continue': '继续此对话',
  'ui.idleReturn.newConversation':
    '作为新对话发送消息',
  'ui.idleReturn.newTaskHint':
    '如果是新任务，清除上下文将节省用量并更快。',
  'ui.idleReturn.dontAskAgain': '不再询问',

  // AutoModeOptInDialog
  'ui.autoModeOptIn.title': '启用自动模式？',
  'ui.autoModeOptIn.noExit': '否，退出',
  'ui.autoModeOptIn.noGoBack': '否，返回',
  'ui.autoModeOptIn.yesDefault': '是，并将其设为我的默认模式',
  'ui.autoModeOptIn.yesEnable': '是，启用自动模式',

  // BypassPermissionsModeDialog
  'ui.bypassPermissions.warning':
    '警告：Claude Code 正在以绕过权限模式运行',
  'ui.bypassPermissions.desc1':
    '在绕过权限模式下，Claude Code 在运行潜在危险命令之前不会请求您的批准。',
  'ui.bypassPermissions.desc2':
    '此模式应仅在沙箱化容器/虚拟机中使用，该环境应限制互联网访问且在受损时可轻松恢复。',
  'ui.bypassPermissions.responsibility':
    '继续即表示您接受在绕过权限模式下运行时所采取行动的全部责任。',
  'ui.bypassPermissions.noExit': '否，退出',
  'ui.bypassPermissions.yesAccept': '是，我接受',

  // ApproveApiKey
  'ui.approveApiKey.description':
    '在您的命令或环境中检测到自定义 API 密钥。',
  'ui.approveApiKey.yes': '是',
  'ui.approveApiKey.noRecommended': '否（推荐）',
  'ui.approveApiKey.question': '是否要使用此 API 密钥？',

  // HistorySearchDialog
  'ui.historySearch.title': '搜索提示',
  'ui.historySearch.placeholder': '筛选历史\u2026',
  'ui.historySearch.empty': '没有匹配的提示',
  'ui.historySearch.loading': '加载中\u2026',
  'ui.historySearch.noHistory': '暂无历史记录',

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

  // WelcomeV2
  'ui.welcomeV2.title': '欢迎使用 Claude Code',

  // TeleportResumeWrapper
  'ui.teleportResume.resuming': '正在恢复会话\u2026',
  'ui.teleportResume.loading': '正在加载"{title}"\u2026',
  'ui.teleportResume.failed': '恢复会话失败',
  'ui.teleportResume.pressEsc': '按 {key} 取消',

  // LogoV2 - condensed mode messages
  'ui.logoV2.debugMode': '调试模式已启用',
  'ui.logoV2.loggingTo': '日志输出到：{path}',
  'ui.logoV2.tmuxSession': 'tmux 会话：{session}',
  'ui.logoV2.messageFrom': '来自 {org} 的消息：',
  'ui.logoV2.sandboxWarning': '你的 bash 命令将被沙箱化。使用 /sandbox 禁用。',

  // FeedbackSurvey
  'ui.feedbackSurvey.thanks': '感谢您的反馈！',
  'ui.feedbackSurvey.submitted': '\u2713 感谢分享您的对话记录！',
  'ui.feedbackSurvey.submitting': '正在分享对话记录\u2026',
  'ui.feedbackSurvey.followUp': '（可选）按 [1] 告诉我们哪些地方做得好 \u00b7 {command}',
  'ui.feedbackSurvey.reportIssue': '使用 /issue 报告模型行为问题。',
  'ui.feedbackSurvey.shareFeedback': '使用 {command} 随时分享详细反馈。',

  // FeedbackSurveyView
  'ui.feedbackSurveyView.question': 'Claude 本次会话表现如何？（可选）',
  'ui.feedbackSurveyView.bad': '不好',
  'ui.feedbackSurveyView.fine': '还行',
  'ui.feedbackSurveyView.good': '很好',
  'ui.feedbackSurveyView.dismiss': '忽略',

  // TranscriptSharePrompt
  'ui.transcriptShare.question': 'Anthropic 是否可以查看您的会话记录以帮助改进 Claude Code？',
  'ui.transcriptShare.learnMore': '了解更多：https://code.claude.com/docs/en/data-usage#session-quality-surveys',
  'ui.transcriptShare.yes': '是',
  'ui.transcriptShare.no': '否',
  'ui.transcriptShare.dontAsk': '不再询问',

  // MCPServerMultiselectDialog
  'ui.mcpMultiselect.title': '在 .mcp.json 中发现 {count} 个新 MCP 服务器',
  'ui.mcpMultiselect.subtitle': '选择您想要启用的服务器。',

  // MCPServerDialogCopy
  'ui.mcpDialogCopy.text': 'MCP 服务器可以执行代码或访问系统资源。所有工具调用都需要批准。了解更多请参阅 ',
  'ui.mcpDialogCopy.docLink': 'MCP 文档',

  // MCPServerDesktopImportDialog
  'ui.mcpDesktopImport.title': '从 Claude Desktop 导入 MCP 服务器',
  'ui.mcpDesktopImport.subtitle': '在 Claude Desktop 中发现 {count} 个 MCP {servers}。',
  'ui.mcpDesktopImport.success': '成功将 {count} 个 MCP {servers} 导入到 {scope} 配置。',
  'ui.mcpDesktopImport.noneImported': '没有导入任何服务器。',
  'ui.mcpDesktopImport.noteCollisions': '注意：部分服务器已存在同名。如果选中，它们将以编号后缀导入。',
  'ui.mcpDesktopImport.selectPrompt': '请选择您要导入的服务器：',
  'ui.mcpDesktopImport.alreadyExists': '（已存在）',
  'ui.mcpDesktopImport.cancel': '取消',

  // IdeAutoConnectDialog
  'ui.ideAutoConnect.title': '启动时自动连接到 IDE？',
  'ui.ideAutoConnect.description': '您也可以在 /config 或使用 --ide 标志进行配置',
  'ui.ideAutoConnect.disableTitle': '是否要禁用 IDE 自动连接？',
  'ui.ideAutoConnect.disableSubtitle': '您也可以在 /config 中进行配置',

  // IdeOnboardingDialog
  'ui.ideOnboarding.title': 'IDE 扩展设置',
  'ui.ideOnboarding.description': 'Claude Code 与您的 IDE 集成，以提供更好的上下文感知能力。',

  // IdeStatusIndicator
  'ui.ideStatus.linesSelected': '已选择 {count} {lines}',
  'ui.ideStatus.inFile': '在 {name} 中',
  'ui.ideStatus.line': '行',
  'ui.ideStatus.lines': '行',

  // TeleportError
  'ui.teleportError.loginRequired': '您需要使用 Claude 账户登录才能使用 Teleport。',
  'ui.teleportError.gitStashRequired': '请在传输前暂存或提交您的更改。',
  'ui.teleportError.requiresAccount': 'Teleport 需要 Claude.ai 账户。',
  'ui.teleportError.proWillBeUsed': '您的 Claude Pro/Max 订阅将被 Claude Code 使用。',
  'ui.teleportError.loginTitle': '登录到 Claude',
  'ui.teleportError.loginWithAccount': '使用 Claude 账户登录',

  // TeleportRepoMismatch
  'ui.teleportRepoMismatch.title': '仓库路径不匹配',
  'ui.teleportRepoMismatch.selectPath': '选择与 {repo} 匹配的本地路径：',
  'ui.teleportRepoMismatch.cancel': '取消传输',
  'ui.teleportRepoMismatch.validating': '正在验证路径...',
  'ui.teleportRepoMismatch.dialogTitle': '传输到仓库',
  'ui.teleportRepoMismatch.usePath': '使用 {path}',
  'ui.teleportRepoMismatch.openIn': '在 {repo} 中打开 Claude Code：',
  'ui.teleportRepoMismatch.validatingRepo': '正在验证仓库\u2026',
  'ui.teleportRepoMismatch.runFrom': '从 {repo} 的检出目录运行 claude --teleport',
  'ui.teleportRepoMismatch.noLongerValid': '{path} 不再包含正确的仓库。请选择其他路径。',
  'ui.teleportRepoMismatch.cancelOption': '取消',

  // QuickOpenDialog
  'ui.quickOpen.title': '快速打开',
  'ui.quickOpen.placeholder': '按名称搜索文件...',
  'ui.quickOpen.noResults': '未找到文件',
  'ui.quickOpen.selectAction': '在编辑器中打开',

  // GlobalSearchDialog
  'ui.globalSearch.title': '全局搜索',
  'ui.globalSearch.placeholder': '跨文件搜索...',
  'ui.globalSearch.noResults': '未找到匹配项',
  'ui.globalSearch.searching': '正在搜索...',
  'ui.globalSearch.truncated': '结果已截断。请优化搜索条件。',
  'ui.globalSearch.matchesIn': '在 {file} 中的匹配项',
  'ui.globalSearch.matches': '个匹配',
  'ui.globalSearch.typeToSearch': '输入关键词搜索\u2026',
  'ui.globalSearch.selectAction': '在编辑器中打开',

  // LogSelector
  'ui.logSelector.title': '选择要恢复的会话',
  'ui.logSelector.empty': '未找到会话',
  'ui.logSelector.loading': '正在加载会话...',
  'ui.logSelector.deleteConfirm': '确定要删除此会话吗？',
  'ui.logSelector.searching': '搜索中\u2026',
  'ui.logSelector.claudeFound': 'Claude 找到了以下结果：',
  'ui.logSelector.noMatches': '未找到匹配的会话。',
  'ui.logSelector.searchFailed': '搜索失败',

  // Spinner
  'ui.spinner.thinking': '思考中',
  'ui.spinner.working': '工作中',
  'ui.spinner.searching': '搜索中',
  'ui.spinner.editing': '编辑中',
  'ui.spinner.reading': '读取中',
  'ui.spinner.waiting': '等待中',
  'ui.spinner.processing': '处理中',

  // AutoUpdater
  'ui.autoUpdater.updateAvailable': '有可用更新：v{version}',
  'ui.autoUpdater.updating': '正在更新...',
  'ui.autoUpdater.updated': '已更新到 v{version}',
  'ui.autoUpdater.latest': '您已使用最新版本。',
  'ui.autoUpdater.error': '更新失败：{error}',
  'ui.autoUpdater.skipVersion': '跳过此版本',
  'ui.autoUpdater.installNow': '立即安装',
  'ui.autoUpdater.later': '稍后',
  'ui.autoUpdater.autoUpdating': '自动更新\u2026',
  'ui.autoUpdater.restartToApply': '\u2713 更新已安装 \u00b7 重启以应用',
  'ui.autoUpdater.updateFailed': '\u2717 自动更新失败 \u00b7 尝试',
  'ui.autoUpdater.or': '或',

  // Settings
  'ui.settings.status': '状态',
  'ui.settings.config': '配置',
  'ui.settings.usage': '用量',
  'ui.settings.gates': '门控',
  'ui.settings.searchPlaceholder': '搜索设置\u2026',
  'ui.settings.enableAutoUpdates': '启用自动更新',
  'ui.settings.autoUpdateEnvControlled': '自动更新由环境变量控制，无法在此处更改。',
  'ui.settings.autoUpdateDevDisabled': '自动更新在开发版本中已禁用。',
  'ui.settings.autoUpdateUnsetEnv': '取消设置 {envVar} 以重新启用自动更新。',
  'ui.settings.autoUpdateLatestChannel': '使用最新频道启用',
  'ui.settings.autoUpdateStableChannel': '使用稳定频道启用',
  'ui.settings.disabled': '已禁用',

  // Setting labels
  'ui.settings.autoCompact': '自动压缩',
  'ui.settings.showTips': '显示提示',
  'ui.settings.reduceMotion': '减少动画',
  'ui.settings.thinkingMode': '思考模式',
  'ui.settings.promptSuggestions': '提示建议',
  'ui.settings.speculativeExecution': '推测执行',
  'ui.settings.rewindCode': '回退代码（检查点）',
  'ui.settings.verboseOutput': '详细输出',
  'ui.settings.terminalProgressBar': '终端进度条',
  'ui.settings.showTerminalStatus': '在终端标签中显示状态',
  'ui.settings.showTurnDuration': '显示轮次耗时',
  'ui.settings.defaultPermissionMode': '默认权限模式',
  'ui.settings.autoModeDuringPlan': '计划期间使用自动模式',
  'ui.settings.respectGitignore': '文件选择器中遵循 .gitignore',
  'ui.settings.alwaysCopyFull': '始终复制完整回复（跳过 /copy 选择器）',
  'ui.settings.copyOnSelect': '选择时复制',
  'ui.settings.autoUpdateChannel': '自动更新频道',
  'ui.settings.theme': '主题',
  'ui.settings.pushWhenIdle': '空闲时推送',
  'ui.settings.pushWhenInputNeeded': '需要输入时推送',
  'ui.settings.pushWhenClaudeDecides': 'Claude 决定时推送',
  'ui.settings.outputStyle': '输出风格',
  'ui.settings.wysiwyg': '所见即所得',
  'ui.settings.language': '语言',
  'ui.settings.uiLanguage': '界面语言',
  'ui.settings.editorMode': '编辑器模式',
  'ui.settings.showPrStatus': '显示 PR 状态页脚',
  'ui.settings.model': '模型',
  'ui.settings.diffTool': '差异工具',
  'ui.settings.autoConnectIde': '自动连接 IDE（外部终端）',
  'ui.settings.autoInstallIdeExt': '自动安装 IDE 扩展',
  'ui.settings.claudeChromeDefault': '默认启用 Claude in Chrome',
  'ui.settings.defaultTeammateModel': '默认队友模型',
  'ui.settings.enableRemoteForAll': '为所有会话启用远程控制',
  'ui.settings.externalClaudeMd': '外部 CLAUDE.md 包含',

  // Config UI strings
  'ui.settings.typeToFilter': '输入筛选',
  'ui.settings.moreBelow': '更多以下内容',
  'ui.settings.defaultLeadersModel': '默认（队长模型）',
  'ui.settings.clear': '清除',
  'ui.settings.change': '更改',
  'ui.settings.search': '搜索',
  'ui.settings.disableExternalIncludes': '禁用外部包含',
  'ui.settings.teammateModelHeader': '新生成队友的默认模型。队长可通过工具调用的 model 参数覆盖。',
  'ui.settings.changingThinkingWarning': '在对话中切换思考模式会增加延迟并可能降低质量。',

  // Stats
  'ui.stats.title': '会话统计',
  'ui.stats.tokensUsed': '已使用 Tokens',
  'ui.stats.apiCalls': 'API 调用',
  'ui.stats.toolsUsed': '工具使用',
  'ui.stats.sessionTime': '会话时间',
  'ui.stats.tabOverview': '概览',
  'ui.stats.tabModels': '模型',

  // ClaudeMdExternalIncludes
  'ui.claudeMdExternal.title': '外部配置包含',
  'ui.claudeMdExternal.description': '以下位置的 CLAUDE.md 文件将被包含：',
  'ui.claudeMdExternal.allowTitle': '允许外部 CLAUDE.md 文件导入？',
  'ui.claudeMdExternal.warning': '此项目的 CLAUDE.md 导入了当前工作目录之外的文件。切勿对第三方仓库允许此操作。',
  'ui.claudeMdExternal.externalImports': '外部导入：',
  'ui.claudeMdExternal.securityWarning': '重要提示：仅将 Claude Code 用于您信任的文件。访问不受信任的文件可能存在安全风险',
  'ui.claudeMdExternal.yesAllow': '是，允许外部导入',
  'ui.claudeMdExternal.noDisable': '否，禁用外部导入',

  // WorktreeExitDialog
  'ui.worktreeExit.title': '退出 Worktree',
  'ui.worktreeExit.keep': '保留更改',
  'ui.worktreeExit.discard': '放弃更改',
  'ui.worktreeExit.exitingTitle': '正在退出 worktree 会话',
  'ui.worktreeExit.keeping': '正在保留 worktree\u2026',
  'ui.worktreeExit.removing': '正在移除 worktree\u2026',
  'ui.worktreeExit.removedNoChanges': 'Worktree 已移除（无更改）',
  'ui.worktreeExit.cleanupFailed': 'Worktree 清理失败，无论如何退出',
  'ui.worktreeExit.noActiveSession': '未找到活跃的 worktree 会话',
  'ui.worktreeExit.keepWorktree': '保留 worktree',
  'ui.worktreeExit.keepWithTmux': '保留 worktree 和 tmux 会话',
  'ui.worktreeExit.keepKillTmux': '保留 worktree，终止 tmux 会话',
  'ui.worktreeExit.removeWorktree': '移除 worktree',
  'ui.worktreeExit.removeWithTmux': '移除 worktree 和 tmux 会话',
  'ui.worktreeExit.keepDesc': '保存在 {path}',
  'ui.worktreeExit.keepWithTmuxDesc': '保存在 {path}。重新连接：tmux attach -t {session}',
  'ui.worktreeExit.keepKillTmuxDesc': '保留 worktree 在 {path}，终止 tmux 会话。',
  'ui.worktreeExit.removeDescAll': '所有更改和提交都将丢失。',
  'ui.worktreeExit.removeDescClean': '清理 worktree 目录。',
  'ui.worktreeExit.youHaveBoth': '您在 {branch} 上有 {changes} 个未提交的{files}和 {commits} 个{commitLabel}。如果移除，所有内容将丢失。',
  'ui.worktreeExit.youHaveChanges': '您有 {changes} 个未提交的{files}。如果移除 worktree，这些将丢失。',
  'ui.worktreeExit.youHaveCommits': '您在 {branch} 上有 {commits} 个{commitLabel}。如果移除 worktree，该分支将被删除。',
  'ui.worktreeExit.workingInWorktree': '您正在 worktree 中工作。保留它以继续工作，或移除它以清理。',
  'ui.worktreeExit.removedWithUncommitted': 'Worktree 已移除。{commits} 个{commitLabel}和未提交的更改已被丢弃。{tmuxNote}',
  'ui.worktreeExit.removedWithCommits': 'Worktree 已移除。{branch} 上的 {commits} 个{commitLabel}已被丢弃。{tmuxNote}',
  'ui.worktreeExit.removedWithChanges': 'Worktree 已移除。未提交的更改已被丢弃。{tmuxNote}',
  'ui.worktreeExit.removedSimple': 'Worktree 已移除。{tmuxNote}',
  'ui.worktreeExit.keptWithPath': 'Worktree 已保留。您的工作保存在 {path} 的分支 {branch} 上。',
  'ui.worktreeExit.keptTmux': 'Worktree 已保留。您的工作保存在 {path} 的分支 {branch} 上。重新连接到 tmux 会话：tmux attach -t {session}',
  'ui.worktreeExit.keptKillTmux': 'Worktree 保留在 {path} 的分支 {branch} 上。Tmux 会话已终止。',
  'ui.worktreeExit.tmuxTerminated': ' Tmux 会话已终止。',

  // ClaudeInChromeOnboarding
  'ui.claudeChromeOnboarding.title': 'Claude in Chrome',
  'ui.claudeChromeOnboarding.description': '启用 Claude in Chrome 以在对话期间浏览网页。',
  'ui.claudeChromeOnboarding.dialogTitle': 'Claude in Chrome（Beta）',
  'ui.claudeChromeOnboarding.requiresExtension': '需要 Chrome 扩展程序。请访问',
  'ui.claudeChromeOnboarding.mainDesc': 'Claude in Chrome 与 Chrome 扩展程序配合使用，让您直接从 Claude Code 控制浏览器。您可以浏览网站、填写表单、截取屏幕截图、录制 GIF，以及使用控制台日志和网络请求进行调试。',
  'ui.claudeChromeOnboarding.sitePermissions': '站点级权限继承自 Chrome 扩展程序。在 Chrome 扩展程序设置中管理权限，以控制 Claude 可以浏览、点击和输入的站点',
  'ui.claudeChromeOnboarding.forMoreInfo': '更多信息，请使用',
}
