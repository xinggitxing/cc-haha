// ── Scheduled Task wizard keys (en) ──────────────────────
export const en = {
  // Wizard titles
  'task.wizard.title.create': 'New scheduled task',
  'task.wizard.title.edit': 'Edit scheduled task',

  // NameStep
  'task.name.subtitle': 'Task name',
  'task.name.description':
    'Give your scheduled task a short, descriptive name (e.g. "daily-code-review").',
  'task.name.placeholder': 'e.g. daily-code-review',
  'task.name.error.required': 'Name is required',

  // TaskDescriptionStep
  'task.desc.subtitle': 'Description',
  'task.desc.description': 'Briefly describe what this scheduled task does.',
  'task.desc.placeholder':
    "e.g. Review yesterday's commits and flag anything concerning",
  'task.desc.error.required': 'Description is required',

  // TaskPromptStep
  'task.prompt.subtitle': 'Prompt',
  'task.prompt.description':
    'Enter the prompt that will be sent to Claude when this task runs.',
  'task.prompt.placeholder':
    'e.g. Look at the commits from the last 24 hours...',
  'task.prompt.error.required': 'Prompt is required',

  // TaskModelStep
  'task.model.subtitle': 'Model',

  // PermissionStep
  'task.perm.subtitle': 'Permission mode',
  'task.perm.description': 'Choose the permission mode for this scheduled task.',
  'task.perm.option.ask': 'Ask permissions',
  'task.perm.option.askDesc': 'Always ask before making changes',
  'task.perm.option.autoAccept': 'Auto accept edits',
  'task.perm.option.autoAcceptDesc': 'Automatically accept all file edits',
  'task.perm.option.plan': 'Plan mode',
  'task.perm.option.planDesc': 'Create a plan before making changes',
  'task.perm.option.bypass': 'Bypass permissions',
  'task.perm.option.bypassDesc': 'Accepts all permissions',

  // FolderStep
  'task.folder.subtitle': 'Working directory',
  'task.folder.description': 'Select the folder where this task will run.',
  'task.folder.customDesc': 'Enter the full path to the working directory:',
  'task.folder.error.empty': 'Path cannot be empty',
  'task.folder.error.invalid': 'Invalid path',
  'task.folder.placeholder': '/path/to/project',
  'task.folder.customOption': '+ Choose a different folder',
  'task.folder.customOptionDesc': 'Enter a custom path',

  // ScheduleStep
  'task.schedule.timeSubtitle': 'Schedule time',
  'task.schedule.timeDescription':
    'Enter the time for this task (24-hour format, e.g. 09:00):',
  'task.schedule.timePlaceholder': '09:00',
  'task.schedule.delayHint':
    'Scheduled tasks use a randomized delay of several minutes for server performance.',
  'task.schedule.freqSubtitle': 'Frequency',
  'task.schedule.freqDescription': 'How often should this task run?',

  // Frequency options (from cronFrequency.ts)
  'task.freq.manual': 'Manual',
  'task.freq.hourly': 'Hourly',
  'task.freq.daily': 'Daily',
  'task.freq.weekdays': 'Weekdays',
  'task.freq.weekly': 'Weekly',

  // TaskConfirmStep
  'task.confirm.subtitle': 'Review & confirm',
  'task.confirm.label.name': 'Name: ',
  'task.confirm.label.desc': 'Description: ',
  'task.confirm.label.prompt': 'Prompt: ',
  'task.confirm.label.model': 'Model: ',
  'task.confirm.label.permissions': 'Permissions: ',
  'task.confirm.label.folder': 'Folder: ',
  'task.confirm.label.worktree': 'Worktree: ',
  'task.confirm.label.schedule': 'Schedule: ',
  'task.confirm.dash': '\u2014',
  'task.confirm.default.model': 'default',
  'task.confirm.default.ask': 'ask',
  'task.confirm.default.currentProject': 'current project',
  'task.confirm.default.yes': 'yes',
  'task.confirm.default.no': 'no',
  'task.confirm.manualOnDemand': 'Manual (on demand)',
  'task.confirm.notSet': 'Not set',
  'task.confirm.actionHint': 'Press Enter to confirm, Esc to go back.',
} as const

// ── Scheduled Task wizard keys (zh) ──────────────────────
export const zh: Record<string, string> = {
  'task.wizard.title.create': '新建定时任务',
  'task.wizard.title.edit': '编辑定时任务',

  'task.name.subtitle': '任务名称',
  'task.name.description':
    '为定时任务取一个简短、描述性的名称（例如 "daily-code-review"）。',
  'task.name.placeholder': '例如 daily-code-review',
  'task.name.error.required': '名称不能为空',

  'task.desc.subtitle': '描述',
  'task.desc.description': '简要描述此定时任务的功能。',
  'task.desc.placeholder':
    '例如 Review yesterday\'s commits and flag anything concerning',
  'task.desc.error.required': '描述不能为空',

  'task.prompt.subtitle': '提示词',
  'task.prompt.description': '输入任务运行时将发送给 Claude 的提示词。',
  'task.prompt.placeholder': '例如查看过去 24 小时的提交记录...',
  'task.prompt.error.required': '提示词不能为空',

  'task.model.subtitle': '模型',

  'task.perm.subtitle': '权限模式',
  'task.perm.description': '选择此定时任务的权限模式。',
  'task.perm.option.ask': '询问权限',
  'task.perm.option.askDesc': '进行更改前始终询问',
  'task.perm.option.autoAccept': '自动接受编辑',
  'task.perm.option.autoAcceptDesc': '自动接受所有文件编辑',
  'task.perm.option.plan': '计划模式',
  'task.perm.option.planDesc': '进行更改前先创建计划',
  'task.perm.option.bypass': '绕过权限',
  'task.perm.option.bypassDesc': '接受所有权限',

  'task.folder.subtitle': '工作目录',
  'task.folder.description': '选择此任务将在哪个文件夹中运行。',
  'task.folder.customDesc': '输入工作目录的完整路径：',
  'task.folder.error.empty': '路径不能为空',
  'task.folder.error.invalid': '路径无效',
  'task.folder.placeholder': '/path/to/project',
  'task.folder.customOption': '+ 选择其他文件夹',
  'task.folder.customOptionDesc': '输入自定义路径',

  'task.schedule.timeSubtitle': '调度时间',
  'task.schedule.timeDescription': '输入此任务的执行时间（24 小时格式，例如 09:00）：',
  'task.schedule.timePlaceholder': '09:00',
  'task.schedule.delayHint': '为优化服务器性能，定时任务会有几分钟的随机延迟。',
  'task.schedule.freqSubtitle': '执行频率',
  'task.schedule.freqDescription': '此任务应该多久运行一次？',

  'task.freq.manual': '手动',
  'task.freq.hourly': '每小时',
  'task.freq.daily': '每天',
  'task.freq.weekdays': '工作日',
  'task.freq.weekly': '每周',

  'task.confirm.subtitle': '审查并确认',
  'task.confirm.label.name': '名称：',
  'task.confirm.label.desc': '描述：',
  'task.confirm.label.prompt': '提示词：',
  'task.confirm.label.model': '模型：',
  'task.confirm.label.permissions': '权限：',
  'task.confirm.label.folder': '文件夹：',
  'task.confirm.label.worktree': '工作树：',
  'task.confirm.label.schedule': '调度：',
  'task.confirm.dash': '\u2014',
  'task.confirm.default.model': '默认',
  'task.confirm.default.ask': '询问',
  'task.confirm.default.currentProject': '当前项目',
  'task.confirm.default.yes': '是',
  'task.confirm.default.no': '否',
  'task.confirm.manualOnDemand': '手动（按需执行）',
  'task.confirm.notSet': '未设置',
  'task.confirm.actionHint': '按 Enter 确认，按 Esc 返回。',
}
