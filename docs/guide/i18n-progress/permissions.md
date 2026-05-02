# Permissions 组件国际化进度

## 状态：⚠️ 23% 完成 (10/44)

## 词条文件
`src/i18n/locales/keys/permissions.ts` (~140 keys, 较完善)

---

## 已完成 ✅ (10 文件)

| 文件 | 使用的主要 Key |
|------|---------------|
| `PermissionPrompt.tsx` | `perm.proceed`, `perm.tellClaudeNext`, `perm.tellClaudeDifferently`, `perm.tabToAmend`, `perm.escToCancel` |
| `FallbackPermissionRequest.tsx` | `perm.yes`, `perm.yesDontAskAgainShort`, `perm.commandsIn`, `perm.no`, `perm.toolUse` |
| `SandboxPermissionRequest.tsx` | `perm.yes`, `perm.yesDontAskAgain`, `perm.hostLabel`, `perm.allowConnection`, `perm.titleNetworkSandbox` |
| `FilePermissionDialog/FilePermissionDialog.tsx` | `perm.proceed`, `perm.symlinkWarning`, `perm.symlinkTarget`, `perm.escToCancel`, `perm.tabToAmend` |
| `FilePermissionDialog/permissionOptions.tsx` | `perm.yes`, `perm.sessionAllow*`, `perm.thisDirectory`, `perm.no` |
| `WebFetchPermissionRequest/WebFetchPermissionRequest.tsx` | `perm.yes`, `perm.fetchQuestion`, `perm.titleFetch` |
| `BashPermissionRequest/bashToolUseOptions.tsx` | `perm.yes`, `perm.tellClaudeNext`, `perm.yesDontAskAgainShort`, `perm.no` |
| `PowerShellPermissionRequest/powershellToolUseOptions.tsx` | `perm.yes`, `perm.psPrefixPlaceholder`, `perm.no` |
| `shellPermissionHelpers.tsx` | `perm.and`, `perm.commaAnd`, `perm.similar`, `perm.andNMore`, `perm.shell*` (12+ keys) |

### 无需 i18n — (3 文件)
| 文件 | 原因 |
|------|------|
| `PermissionDialog.tsx` | 纯包装组件，title/subtitle/children 均通过 props 传入 |
| `PermissionRequestTitle.tsx` | 纯渲染组件，仅装饰性字符 |
| `WorkerBadge.tsx` | 纯渲染组件，仅 `@name` 格式 |

---

## 部分完成 ⚠️ (1 文件)

| 文件 | 问题 | 遗漏字符串 |
|------|------|-----------|
| `PermissionRuleDescription.tsx` | 已 `import { t }` 但**从未调用** | `"Any Bash command starting with "`, `"The Bash command "`, `"Any Bash command"`, `"Any use of the "` + toolName + `" tool"` |

---

## 未开始 ❌ (30 文件)

### 规则管理 (7 文件)
| 文件 | 主要硬编码字符串 |
|------|-----------------|
| `rules/PermissionRuleList.tsx` | "Rule details", "Delete {tool} tool?", Tab 标题 "Recently denied"/"Allow"/"Ask"/"Deny"/"Workspace", 键盘提示 |
| `rules/PermissionRuleInput.tsx` | "Add {behavior} permission rule", 帮助文本, 键盘提示 |
| `rules/AddPermissionRules.tsx` | "Project settings (local)", "User settings", 保存位置描述, "Where should this rule be saved?" |
| `rules/AddWorkspaceDirectory.tsx` | "Enter the path to the directory:", title="Add directory to workspace" |
| `rules/RemoveWorkspaceDirectory.tsx` | "Claude Code will no longer have access...", title="Remove directory from workspace?" |
| `rules/RecentDenialsTab.tsx` | "No recent denials.", "Commands recently denied by the auto mode classifier." |
| `rules/WorkspaceTab.tsx` | "(Original working directory)", "Add directory…", "Workspace dialog dismissed" |

### 权限请求对话框 (17 文件)
| 文件 | 主要硬编码字符串 |
|------|-----------------|
| `BashPermissionRequest/BashPermissionRequest.tsx` | "Bash command (unsandboxed)", "Do you want to proceed?", Ctrl-D 提示 |
| `PowerShellPermissionRequest/PowerShellPermissionRequest.tsx` | "PowerShell command", "Do you want to proceed?" |
| `EnterPlanModePermissionRequest/EnterPlanModePermissionRequest.tsx` | "Claude wants to enter plan mode...", "In plan mode, Claude will:" + 4 列表项 |
| `ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx` | "Exit plan mode?", "Ready to code?", "Here is Claude's plan:" |
| `ComputerUseApproval/ComputerUseApproval.tsx` | "Accessibility:", "Screen Recording:", "Grant the missing permissions..." |
| `FileEditPermissionRequest/FileEditPermissionRequest.tsx` | "Edit file", "Do you want to make this edit to" |
| `FileWritePermissionRequest/FileWritePermissionRequest.tsx` | "overwrite"/"create", "Overwrite file"/"Create file" |
| `FileWritePermissionRequest/FileWriteToolDiff.tsx` | "(No content)" |
| `FilesystemPermissionRequest/FilesystemPermissionRequest.tsx` | "Read"/"Edit", "Read file"/"Edit file" |
| `NotebookEditPermissionRequest/NotebookEditPermissionRequest.tsx` | "Edit notebook", insert/delete/replace 操作描述 |
| `NotebookEditPermissionRequest/NotebookEditToolDiff.tsx` | "Insert new cell"/"Delete cell"/"Replace cell contents" |
| `SedEditPermissionRequest/SedEditPermissionRequest.tsx` | "Edit file", "Do you want to make this edit to" |
| `SkillPermissionRequest/SkillPermissionRequest.tsx` | "Yes, and don't ask again for", "Claude may use instructions..." |
| `WorkerPendingPermission.tsx` | "Waiting for team lead approval", "Tool: ", "Action: " |

### 用户问题权限 (5 文件)
| 文件 | 主要硬编码字符串 |
|------|-----------------|
| `AskUserQuestionPermissionRequest/AskUserQuestionPermissionRequest.tsx` | "Pasted image" |
| `AskUserQuestionPermissionRequest/SubmitQuestionsView.tsx` | "Review your answers", "Submit answers"/"Cancel" |
| `AskUserQuestionPermissionRequest/QuestionView.tsx` | "Type something", "Skip interview and plan immediately", "Submit"/"Next" |
| `AskUserQuestionPermissionRequest/PreviewQuestionView.tsx` | "Notes:", "No preview available", 键盘导航提示 |
| `AskUserQuestionPermissionRequest/QuestionNavigationBar.tsx` | "Submit" |
| `AskUserQuestionPermissionRequest/PreviewBox.tsx` | 预览/面试相关文本 |

### 其他 (1 文件)
| 文件 | 主要硬编码字符串 |
|------|-----------------|
| `PermissionRequest.tsx` | "Claude Code needs your attention", 工具名格式化 |
| `PermissionRuleExplanation.tsx` | 分类器/规则/Hook 解释文本 (~8 处) |
| `PermissionExplanation.tsx` | "Explanation unavailable" |
| `PermissionDecisionDebugInfo.tsx` | "Suggestions", "None", "Behavior", "Message", "Reason" |

---

## 汇总

| 状态 | 计数 | 占比 |
|------|------|------|
| 已完成 | 10 | 23% |
| 部分完成 | 1 | 2% |
| 未开始 | 30 | 68% |
| 无需 i18n | 3 | 7% |
| **总计** | **44** | 100% |

## 备注
- `shellPermissionHelpers.tsx` 和 `permissionOptions.tsx` 等辅助文件已完成，代表"选项层"
- 主要 UI 对话框（Bash/PowerShell/PlanMode/ComputerUse 等）几乎未开始
- `rules/` 子目录 8 个文件几乎全部未国际化
- `AskUserQuestionPermissionRequest/` 子目录 6 个文件全部未开始
