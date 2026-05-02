// ── Message component keys (en) ───────────────────────────
export const en = {
  // Advisor
  'msg.advisor.advising': 'Advising',
  'msg.advisor.unavailable': 'Advisor unavailable ({error_code})',
  'msg.advisor.reviewed': 'Advisor has reviewed the conversation and will apply the feedback',

  // Redacted Thinking
  'msg.redactedThinking': '\u273b Thinking\u2026',

  // Assistant Error Messages
  'msg.assistant.contextLimit': 'Context limit reached \u00b7 /compact or /clear to continue',
  'msg.assistant.creditBalanceLow': 'Credit balance too low \u00b7 Add funds: https://platform.claude.com/settings/billing',
  'msg.assistant.apiTimeoutHint': '(API_TIMEOUT_MS={ms}ms, try increasing it)',
  'msg.assistant.highDemand': 'We are experiencing high demand for Opus 4.',
  'msg.assistant.switchModel': 'To continue immediately, use /model to switch to {model} and continue coding.',
  'msg.assistant.waitAndRetry': 'Please wait a moment and try again.',
  'msg.assistant.unlockKeychain': '\u00b7 Run in another terminal: security unlock-keychain',

  // Attachment Messages
  'msg.attachment.taskAssigned': 'Task assigned: ',
  'msg.attachment.fromAssignedBy': ' (from {assignedBy})',
  'msg.attachment.listedDirectory': 'Listed directory {path}/',
  'msg.attachment.readCells': 'Read {path} ({count} cells)',
  'msg.attachment.unchanged': ' (unchanged)',
  'msg.attachment.lines': ' lines',
  'msg.attachment.referencedFile': 'Referenced file {path}',
  'msg.attachment.referencedPdf': 'Referenced PDF {path} ({count} pages)',
  'msg.attachment.selectedLines': '\u29c9 Selected {count} lines from {path} in {ideName}',
  'msg.attachment.loadedPath': 'Loaded {path}',
  'msg.attachment.recalledMemory': 'Recalled {count} {memoryLabel}',
  'msg.attachment.loadedSkill': 'Loaded {count} {skill} from {path}',
  'msg.attachment.relevantSkill': '{count} relevant {skill}: {names}',
  'msg.attachment.skillAvailable': '{count} {skill} available',
  'msg.attachment.agentAvailable': '{count} agent {type} available',
  'msg.attachment.planFileReferenced': 'Plan file referenced ({path})',
  'msg.attachment.skillsRestored': 'Skills restored ({names})',
  'msg.attachment.readMcpResource': 'Read MCP resource {name} from {server}',
  'msg.attachment.asyncHookCompleted': 'Async hook {hookEvent} completed',
  'msg.attachment.hookBlockingError': '{hookName} hook returned blocking error',
  'msg.attachment.hookError': '{hookName} hook error',
  'msg.attachment.hookWarning': '{hookName} hook warning',
  'msg.attachment.hookStoppedContinuation': '{hookName} hook stopped continuation: {message}',
  'msg.attachment.hookSays': '{hookName} says: {content}',
  'msg.attachment.hookDecision': '{decision} by {hookEvent} hook',
  'msg.attachment.taskCompletedBg': 'Task "{description}" completed in background',
  'msg.attachment.taskStopped': 'Task "{description}" stopped',
  'msg.attachment.taskRunningBg': 'Task "{description}" still running in background',
  'msg.attachment.teammateShutdown': 'Teammate {name} shut down gracefully',
  'msg.attachment.teammateShutdownPlural': '{count} teammates shut down gracefully',
  'msg.attachment.skillFeedback': '/skill-feedback {firstId} 1=wrong 2=noisy 3=good [comment]',

  // Verb pairs (for collapsed read/search content)
  'msg.verb.searchingFor': 'Searching for',
  'msg.verb.searchingForLower': 'searching for',
  'msg.verb.searchedFor': 'Searched for',
  'msg.verb.searchedForLower': 'searched for',
  'msg.verb.reading': 'Reading',
  'msg.verb.readingLower': 'reading',
  'msg.verb.read': 'Read',
  'msg.verb.readLower': 'read',
  'msg.verb.listing': 'Listing',
  'msg.verb.listingLower': 'listing',
  'msg.verb.listed': 'Listed',
  'msg.verb.listedLower': 'listed',
  'msg.verb.replIng': "REPL'ing",
  'msg.verb.replD': "REPL'd",
  'msg.verb.querying': 'Querying',
  'msg.verb.queryingLower': 'querying',
  'msg.verb.queried': 'Queried',
  'msg.verb.queriedLower': 'queried',
  'msg.verb.running': 'Running',
  'msg.verb.runningLower': 'running',
  'msg.verb.ran': 'Ran',
  'msg.verb.ranLower': 'ran',
  'msg.verb.recalling': 'Recalling',
  'msg.verb.recallingLower': 'recalling',
  'msg.verb.recalled': 'Recalled',
  'msg.verb.recalledLower': 'recalled',
  'msg.verb.searching': 'Searching',
  'msg.verb.searchingLower': 'searching',
  'msg.verb.searched': 'Searched',
  'msg.verb.searchedLower': 'searched',
  'msg.verb.writing': 'Writing',
  'msg.verb.writingLower': 'writing',
  'msg.verb.wrote': 'Wrote',
  'msg.verb.wroteLower': 'wrote',

  // Git verbs (for collapsed content)
  'msg.git.committed': 'committed',
  'msg.git.amendedCommit': 'amended commit',
  'msg.git.cherryPicked': 'cherry-picked',
  'msg.git.pushedTo': 'pushed to',
  'msg.git.merged': 'merged',
  'msg.git.rebasedOnto': 'rebased onto',
  'msg.git.created': 'created',
  'msg.git.edited': 'edited',
  'msg.git.commentedOn': 'commented on',
  'msg.git.closed': 'closed',
  'msg.git.markedReady': 'marked ready',

  // Plural nouns
  'msg.plural.pattern': 'pattern',
  'msg.plural.patterns': 'patterns',
  'msg.plural.file': 'file',
  'msg.plural.files': 'files',
  'msg.plural.directory': 'directory',
  'msg.plural.directories': 'directories',
  'msg.plural.time': 'time',
  'msg.plural.times': 'times',
  'msg.plural.memory': 'memory',
  'msg.plural.memories': 'memories',
  'msg.plural.line': 'line',
  'msg.plural.lines': 'lines',
  'msg.plural.hook': 'hook',
  'msg.plural.hooks': 'hooks',
  'msg.plural.command': 'command',
  'msg.plural.commands': 'commands',
  'msg.plural.nudge': 'nudge',
  'msg.plural.nudges': 'nudges',
  'msg.plural.second': 'second',
  'msg.plural.seconds': 'seconds',

  // Collapsed Read/Search content
  'msg.collapsed.ranPreToolUse': 'Ran {count} PreToolUse {hooks} ({time})',
  'msg.collapsed.recalledFilename': 'Recalled {filename}',
  'msg.collapsed.shellProgress': '({time} \u00b7 {count} {lines})',
  'msg.collapsed.memories': '{verb} memories',

  // Team Memory collapsed
  'msg.teamMem.teamMemories': '{verb} team memories',
  'msg.teamMem.team': 'team',

  // Compact Boundary
  'msg.compactBoundary': '\u273b Conversation compacted ({shortcut} for history)',

  // Highlighted Thinking
  'msg.highlightedThinking.you': 'You',

  // Hook Progress
  'msg.hookProgress.running': 'Running ',
  'msg.hookProgress.hookEllipsis': ' hook\u2026',
  'msg.hookProgress.hooksEllipsis': ' hooks\u2026',
  'msg.hookProgress.hook': ' hook',
  'msg.hookProgress.hooks': ' hooks',
  'msg.hookProgress.ran': ' ran',

  // Plan Approval
  'msg.planApproval.requestFrom': 'Plan Approval Request from {name}',
  'msg.planApproval.planFile': 'Plan file: {path}',
  'msg.planApproval.approvedBy': '\u2713 Plan Approved by {name}',
  'msg.planApproval.proceedImpl': 'You can now proceed with implementation. Your plan mode restrictions have been lifted.',
  'msg.planApproval.rejectedBy': '\u2717 Plan Rejected by {name}',
  'msg.planApproval.feedback': 'Feedback: {content}',
  'msg.planApproval.revisePlan': 'Please revise your plan based on the feedback and call ExitPlanMode again.',
  'msg.planApproval.briefRequest': '[Plan Approval Request from {name}]',
  'msg.planApproval.briefApproved': '[Plan Approved] You can now proceed with implementation',
  'msg.planApproval.briefRejected': '[Plan Rejected] {feedback}',

  // Rate Limit / Upsell
  'msg.rateLimit.extraUsage': '/extra-usage to finish what you\u2019re working on.',
  'msg.rateLimit.login': '/login to switch to an API usage-billed account.',
  'msg.rateLimit.openingOptions': 'Opening your options\u2026',
  'msg.rateLimit.upgrade': '/upgrade to increase your usage limit.',
  'msg.rateLimit.extraUsageAdmin': '/extra-usage to request more usage from your admin.',
  'msg.rateLimit.upgradeOrExtraUsage': '/upgrade or /extra-usage to finish what you\u2019re working on.',

  // Shutdown
  'msg.shutdown.requestFrom': 'Shutdown request from {name}',
  'msg.shutdown.reason': 'Reason: {content}',
  'msg.shutdown.rejectedBy': 'Shutdown rejected by {name}',
  'msg.shutdown.continueWork': 'Teammate is continuing to work. You may request shutdown again later.',
  'msg.shutdown.briefRequest': '[Shutdown Request from {name}]{reason}',
  'msg.shutdown.briefApproved': '[Shutdown Approved] {name} is now exiting',
  'msg.shutdown.briefRejected': '[Shutdown Rejected] {name}: {reason}',

  // System API Error
  'msg.systemApiError.retrying': 'Retrying in {seconds}s\u2026 (attempt {attempt}/{max})',
  'msg.systemApiError.apiTimeoutHint': 'API_TIMEOUT_MS={ms}ms, try increasing it',

  // System Text
  'msg.systemText.allAgentsStopped': 'All background agents stopped',
  'msg.systemText.allowedCommands': 'Allowed {commands}',
  'msg.systemText.ranHook': 'Ran {count} {hookLabel} {hooks} {time}',
  'msg.systemText.remoteControlActive': '/remote-control is active. Code in CLI or at',
  'msg.systemText.ranStopHook': 'Ran {count} {stop} {hooks}',
  'msg.systemText.hookError': '{hookLabel} hook error: {error}',
  'msg.systemText.worked': 'Worked',
  'msg.systemText.stillRunning': 'still running',
  'msg.systemText.memoryCount': '{count} {memories}',
  'msg.systemText.memorySaved': 'Saved',

  // Task Assignment
  'msg.taskAssignment.assignedBy': 'Task #{taskId} assigned by {assignedBy}',
  'msg.taskAssignment.briefAssigned': '[Task Assigned] #{taskId} - {subject}',

  // User Command
  'msg.userCommand.skillFormat': 'Skill({command})',

  // User Image
  'msg.userImage.imageWithId': '[Image #{imageId}]',
  'msg.userImage.image': '[Image]',

  // User Memory Input
  'msg.userMemory.gotIt': 'Got it.',
  'msg.userMemory.goodToKnow': 'Good to know.',
  'msg.userMemory.noted': 'Noted.',

  // User Plan
  'msg.userPlan.planToImplement': 'Plan to implement',

  // User Prompt
  'msg.userPrompt.truncatedLines': '\u2026 +{hiddenLines} lines \u2026',

  // Rejected Messages
  'msg.rejectedPlan': 'User rejected Claude\u2019s plan:',
  'msg.rejectedToolUse': 'Tool use rejected',

  // User Tool Error
  'msg.userToolError.classifierDenied': 'Denied by auto mode classifier {bullet} /feedback if incorrect',

  // User Tool Success
  'msg.userToolSuccess.autoApproved': 'Auto-approved \u00b7 matched ',
  'msg.userToolSuccess.classifierAllowed': 'Allowed by auto mode classifier',

  // Common labels used in verbose mode
  'msg.verbose.recalled': 'Recalled',
  'msg.verbose.searched': 'Searched',
  'msg.verbose.read': 'Read',
  'msg.verbose.listed': 'Listed',
} as const

// ── Message component keys (zh) ───────────────────────────
export const zh: Record<string, string> = {
  // Advisor
  'msg.advisor.advising': '建议中',
  'msg.advisor.unavailable': 'Advisor 不可用 ({error_code})',
  'msg.advisor.reviewed': 'Advisor 已审阅对话并将应用反馈',

  // Redacted Thinking
  'msg.redactedThinking': '\u273b 思考中\u2026',

  // Assistant Error Messages
  'msg.assistant.contextLimit': '上下文已达上限 \u00b7 使用 /compact 或 /clear 继续',
  'msg.assistant.creditBalanceLow': '信用余额过低 \u00b7 充值: https://platform.claude.com/settings/billing',
  'msg.assistant.apiTimeoutHint': '(API_TIMEOUT_MS={ms}ms，请尝试增大此值)',
  'msg.assistant.highDemand': 'Opus 4 当前需求过高。',
  'msg.assistant.switchModel': '要立即继续，请使用 /model 切换到 {model} 继续编码。',
  'msg.assistant.waitAndRetry': '请稍候再试。',
  'msg.assistant.unlockKeychain': '\u00b7 在另一个终端运行: security unlock-keychain',

  // Attachment Messages
  'msg.attachment.taskAssigned': '任务已分配: ',
  'msg.attachment.fromAssignedBy': ' (来自 {assignedBy})',
  'msg.attachment.listedDirectory': '已列出目录 {path}/',
  'msg.attachment.readCells': '已读取 {path} ({count} 个单元格)',
  'msg.attachment.unchanged': ' (未更改)',
  'msg.attachment.lines': ' 行',
  'msg.attachment.referencedFile': '引用的文件 {path}',
  'msg.attachment.referencedPdf': '引用的 PDF {path} ({count} 页)',
  'msg.attachment.selectedLines': '\u29c9 从 {path} 中选择了 {count} 行 (在 {ideName} 中)',
  'msg.attachment.loadedPath': '已加载 {path}',
  'msg.attachment.recalledMemory': '已回忆 {count} 条{memoryLabel}',
  'msg.attachment.loadedSkill': '已从 {path} 加载 {count} 个 {skill}',
  'msg.attachment.relevantSkill': '{count} 个相关 {skill}: {names}',
  'msg.attachment.skillAvailable': '{count} 个 {skill} 可用',
  'msg.attachment.agentAvailable': '{count} 个 agent {type} 可用',
  'msg.attachment.planFileReferenced': '引用的计划文件 ({path})',
  'msg.attachment.skillsRestored': '已恢复技能 ({names})',
  'msg.attachment.readMcpResource': '从 {server} 读取了 MCP 资源 {name}',
  'msg.attachment.asyncHookCompleted': '异步钩子 {hookEvent} 已完成',
  'msg.attachment.hookBlockingError': '{hookName} 钩子返回了阻塞错误',
  'msg.attachment.hookError': '{hookName} 钩子错误',
  'msg.attachment.hookWarning': '{hookName} 钩子警告',
  'msg.attachment.hookStoppedContinuation': '{hookName} 钩子停止了继续执行: {message}',
  'msg.attachment.hookSays': '{hookName} 说: {content}',
  'msg.attachment.hookDecision': '{decision} 通过 {hookEvent} 钩子',
  'msg.attachment.taskCompletedBg': '任务 "{description}" 已在后台完成',
  'msg.attachment.taskStopped': '任务 "{description}" 已停止',
  'msg.attachment.taskRunningBg': '任务 "{description}" 仍在后台运行',
  'msg.attachment.teammateShutdown': '队友 {name} 已正常关闭',
  'msg.attachment.teammateShutdownPlural': '{count} 个队友已正常关闭',
  'msg.attachment.skillFeedback': '/skill-feedback {firstId} 1=错误 2=噪声 3=好 [评论]',

  // Verb pairs (for collapsed read/search content)
  'msg.verb.searchingFor': '搜索中',
  'msg.verb.searchingForLower': '搜索中',
  'msg.verb.searchedFor': '已搜索',
  'msg.verb.searchedForLower': '已搜索',
  'msg.verb.reading': '读取中',
  'msg.verb.readingLower': '读取中',
  'msg.verb.read': '已读取',
  'msg.verb.readLower': '已读取',
  'msg.verb.listing': '列出中',
  'msg.verb.listingLower': '列出中',
  'msg.verb.listed': '已列出',
  'msg.verb.listedLower': '已列出',
  'msg.verb.replIng': 'REPL 中',
  'msg.verb.replD': 'REPL 已完成',
  'msg.verb.querying': '查询中',
  'msg.verb.queryingLower': '查询中',
  'msg.verb.queried': '已查询',
  'msg.verb.queriedLower': '已查询',
  'msg.verb.running': '运行中',
  'msg.verb.runningLower': '运行中',
  'msg.verb.ran': '已运行',
  'msg.verb.ranLower': '已运行',
  'msg.verb.recalling': '回忆中',
  'msg.verb.recallingLower': '回忆中',
  'msg.verb.recalled': '已回忆',
  'msg.verb.recalledLower': '已回忆',
  'msg.verb.searching': '搜索中',
  'msg.verb.searchingLower': '搜索中',
  'msg.verb.searched': '已搜索',
  'msg.verb.searchedLower': '已搜索',
  'msg.verb.writing': '写入中',
  'msg.verb.writingLower': '写入中',
  'msg.verb.wrote': '已写入',
  'msg.verb.wroteLower': '已写入',

  // Git verbs
  'msg.git.committed': '已提交',
  'msg.git.amendedCommit': '已修正提交',
  'msg.git.cherryPicked': '已 cherry-pick',
  'msg.git.pushedTo': '已推送到',
  'msg.git.merged': '已合并',
  'msg.git.rebasedOnto': '已变基到',
  'msg.git.created': '已创建',
  'msg.git.edited': '已编辑',
  'msg.git.commentedOn': '已评论',
  'msg.git.closed': '已关闭',
  'msg.git.markedReady': '已标记为就绪',

  // Plural nouns
  'msg.plural.pattern': '个模式',
  'msg.plural.patterns': '个模式',
  'msg.plural.file': '个文件',
  'msg.plural.files': '个文件',
  'msg.plural.directory': '个目录',
  'msg.plural.directories': '个目录',
  'msg.plural.time': '次',
  'msg.plural.times': '次',
  'msg.plural.memory': '条记忆',
  'msg.plural.memories': '条记忆',
  'msg.plural.line': '行',
  'msg.plural.lines': '行',
  'msg.plural.hook': '个钩子',
  'msg.plural.hooks': '个钩子',
  'msg.plural.command': '条命令',
  'msg.plural.commands': '条命令',
  'msg.plural.nudge': '次提醒',
  'msg.plural.nudges': '次提醒',
  'msg.plural.second': '秒',
  'msg.plural.seconds': '秒',

  // Collapsed Read/Search content
  'msg.collapsed.ranPreToolUse': '运行了 {count} 个 PreToolUse {hooks} ({time})',
  'msg.collapsed.recalledFilename': '已回忆 {filename}',
  'msg.collapsed.shellProgress': '({time} \u00b7 {count} {lines})',
  'msg.collapsed.memories': '{verb} 条记忆',

  // Team Memory collapsed
  'msg.teamMem.teamMemories': '{verb} 团队记忆',
  'msg.teamMem.team': '团队',

  // Compact Boundary
  'msg.compactBoundary': '\u273b 对话已压缩 ({shortcut} 查看历史)',

  // Highlighted Thinking
  'msg.highlightedThinking.you': '你',

  // Hook Progress
  'msg.hookProgress.running': '运行中 ',
  'msg.hookProgress.hookEllipsis': ' 个钩子\u2026',
  'msg.hookProgress.hooksEllipsis': ' 个钩子\u2026',
  'msg.hookProgress.hook': ' 个钩子',
  'msg.hookProgress.hooks': ' 个钩子',
  'msg.hookProgress.ran': ' 已运行',

  // Plan Approval
  'msg.planApproval.requestFrom': '来自 {name} 的计划审批请求',
  'msg.planApproval.planFile': '计划文件: {path}',
  'msg.planApproval.approvedBy': '\u2713 {name} 已批准计划',
  'msg.planApproval.proceedImpl': '现在可以继续实施了。您的计划模式限制已解除。',
  'msg.planApproval.rejectedBy': '\u2717 {name} 已拒绝计划',
  'msg.planApproval.feedback': '反馈: {content}',
  'msg.planApproval.revisePlan': '请根据反馈修改您的计划，然后再次调用 ExitPlanMode。',
  'msg.planApproval.briefRequest': '[来自 {name} 的计划审批请求]',
  'msg.planApproval.briefApproved': '[计划已批准] 现在可以继续实施',
  'msg.planApproval.briefRejected': '[计划已拒绝] {feedback}',

  // Rate Limit / Upsell
  'msg.rateLimit.extraUsage': '使用 /extra-usage 完成您正在进行的工作。',
  'msg.rateLimit.login': '使用 /login 切换到 API 按用量计费账户。',
  'msg.rateLimit.openingOptions': '正在打开选项\u2026',
  'msg.rateLimit.upgrade': '使用 /upgrade 增加您的用量限制。',
  'msg.rateLimit.extraUsageAdmin': '使用 /extra-usage 向管理员请求更多用量。',
  'msg.rateLimit.upgradeOrExtraUsage': '使用 /upgrade 或 /extra-usage 完成您正在进行的工作。',

  // Shutdown
  'msg.shutdown.requestFrom': '来自 {name} 的关闭请求',
  'msg.shutdown.reason': '原因: {content}',
  'msg.shutdown.rejectedBy': '{name} 已拒绝关闭',
  'msg.shutdown.continueWork': '队友正在继续工作。您可以稍后再次请求关闭。',
  'msg.shutdown.briefRequest': '[来自 {name} 的关闭请求]{reason}',
  'msg.shutdown.briefApproved': '[关闭已批准] {name} 正在退出',
  'msg.shutdown.briefRejected': '[关闭已拒绝] {name}: {reason}',

  // System API Error
  'msg.systemApiError.retrying': '将在 {seconds} 秒后重试\u2026 (第 {attempt}/{max} 次)',
  'msg.systemApiError.apiTimeoutHint': 'API_TIMEOUT_MS={ms}ms，请尝试增大此值',

  // System Text
  'msg.systemText.allAgentsStopped': '所有后台 agent 已停止',
  'msg.systemText.allowedCommands': '已允许 {commands}',
  'msg.systemText.ranHook': '运行了 {count} 个 {hookLabel} {hooks} {time}',
  'msg.systemText.remoteControlActive': '/remote-control 已激活。在 CLI 中编码或访问',
  'msg.systemText.ranStopHook': '运行了 {count} 个 {stop} {hooks}',
  'msg.systemText.hookError': '{hookLabel} 钩子错误: {error}',
  'msg.systemText.worked': '已完成',
  'msg.systemText.stillRunning': '仍在运行',
  'msg.systemText.memoryCount': '{count} {memories}',
  'msg.systemText.memorySaved': '已保存',

  // Task Assignment
  'msg.taskAssignment.assignedBy': '任务 #{taskId} 由 {assignedBy} 分配',
  'msg.taskAssignment.briefAssigned': '[任务已分配] #{taskId} - {subject}',

  // User Command
  'msg.userCommand.skillFormat': '技能({command})',

  // User Image
  'msg.userImage.imageWithId': '[图片 #{imageId}]',
  'msg.userImage.image': '[图片]',

  // User Memory Input
  'msg.userMemory.gotIt': '记住了。',
  'msg.userMemory.goodToKnow': '好的。',
  'msg.userMemory.noted': '已记录。',

  // User Plan
  'msg.userPlan.planToImplement': '实施计划',

  // User Prompt
  'msg.userPrompt.truncatedLines': '\u2026 +{hiddenLines} 行 \u2026',

  // Rejected Messages
  'msg.rejectedPlan': '用户拒绝了 Claude 的计划:',
  'msg.rejectedToolUse': '工具使用已被拒绝',

  // User Tool Error
  'msg.userToolError.classifierDenied': '被自动模式分类器拒绝 {bullet} 如有误请 /feedback',

  // User Tool Success
  'msg.userToolSuccess.autoApproved': '已自动批准 \u00b7 匹配 ',
  'msg.userToolSuccess.classifierAllowed': '被自动模式分类器允许',

  // Common labels used in verbose mode
  'msg.verbose.recalled': '已回忆',
  'msg.verbose.searched': '已搜索',
  'msg.verbose.read': '已读取',
  'msg.verbose.listed': '已列出',
}
