# Messages 组件国际化进度

## 状态：⚠️ 45% 完成 (18/40)

## 词条文件
`src/i18n/locales/keys/messages.ts`

---

## 已完成 ✅ (18 文件)

### Assistant 消息
| 文件 | 使用的主要 Key |
|------|---------------|
| `AdvisorMessage.tsx` | `msg.advisor.advising`, `msg.advisor.unavailable`, `msg.advisor.reviewed` |
| `AssistantRedactedThinkingMessage.tsx` | `msg.redactedThinking` |
| `AssistantThinkingMessage.tsx` | `repl.thinking` |
| `AssistantToolUseMessage.tsx` | `tool.autoClassifierChecking`, `tool.bashClassifierChecking`, `tool.waitingForPermission` |
| `CompactBoundaryMessage.tsx` | `msg.compactBoundary` |
| `HighlightedThinkingText.tsx` | `msg.highlightedThinking.you` |
| `HookProgressMessage.tsx` | `msg.hookProgress.*` (6 keys) |
| `TaskAssignmentMessage.tsx` | `msg.taskAssignment.*` |

### 用户消息
| 文件 | 使用的主要 Key |
|------|---------------|
| `UserCommandMessage.tsx` | `msg.userCommand.skillFormat` |
| `UserImageMessage.tsx` | `msg.userImage.*` |
| `UserMemoryInputMessage.tsx` | `msg.userMemory.*` |
| `UserPlanMessage.tsx` | `msg.userPlan.planToImplement` |
| `UserPromptMessage.tsx` | `msg.userPrompt.truncatedLines` |

### 用户工具结果
| 文件 | 使用的主要 Key |
|------|---------------|
| `RejectedPlanMessage.tsx` | `msg.rejectedPlan` |
| `RejectedToolUseMessage.tsx` | `msg.rejectedToolUse` |
| `UserToolErrorMessage.tsx` | `msg.userToolError.classifierDenied` |
| `UserToolSuccessMessage.tsx` | `msg.userToolSuccess.autoApproved`, `msg.userToolSuccess.classifierAllowed` |

---

## 无需 i18n — (12 文件)

| 文件 | 原因 |
|------|------|
| `GroupedToolUseContent.tsx` | 纯逻辑，委托给 `tool.renderGroupedToolUse()` |
| `UserBashInputMessage.tsx` | 仅显示 `!` 前缀和动态命令文本 |
| `UserBashOutputMessage.tsx` | 纯数据传递 |
| `UserAgentNotificationMessage.tsx` | 仅状态彩色点和内部常量 |
| `UserChannelMessage.tsx` | 仅解析 XML 动态数据 |
| `UserLocalCommandOutputMessage.tsx` | 仅动态命令输出 |
| `UserResourceUpdateMessage.tsx` | 仅解析 XML 动态数据 |
| `UserTextMessage.tsx` | 路由器，委托给子组件 |
| `UserToolResultMessage/UserToolCanceledMessage.tsx` | 仅渲染 `InterruptedByUser` 组件 |
| `UserToolResultMessage/UserToolRejectMessage.tsx` | 委托给回退组件 |
| `UserToolResultMessage/UserToolResultMessage.tsx` | 路由器 |
| `UserToolResultMessage/utils.tsx` | 纯逻辑 Hook |

---

## 部分完成 ⚠️ (2 文件)

| 文件 | 问题 | 遗漏字符串 |
|------|------|-----------|
| `teamMemCollapsed.tsx` | 已 `import { t }` 但**从未调用** | Recalling/recalling/Recalled/recalled, Searching/searched, Writing/wrote, memory/memories, "team memories", ", " 连接词 |
| `UserTeammateMessage.tsx` | 未导入 i18n | `"Completed task #{taskId}"` |

---

## 未开始 ❌ (8 文件)

| 文件 | 主要硬编码字符串 | 优先级 |
|------|-----------------|--------|
| `AssistantTextMessage.tsx` | "Context limit reached /compact or /clear to continue", "Credit balance too low Add funds", API_TIMEOUT_MS 提示, "We are experiencing high demand for Opus 4" | P0 |
| `AttachmentMessage.tsx` | ~20 处：Task assigned/Listed directory/Read/Referenced file/Referenced PDF/Loaded/Skills restored/Async hook/hook error/hook warning/Allowed/Denied/shut down gracefully/Teammate 等 | P0 |
| `CollapsedReadSearchContent.tsx` | ~30 处：动词形态对 (Searching/searching/Searched/searched), (Reading/reading/Read/read), (Listing/listing/Listed/listed), 复数名词 (pattern/patterns, file/files, directory/directories), git 操作描述 (committed/amended/cherry-picked/pushed/merged/rebased/created/edited) | P1 |
| `PlanApprovalMessage.tsx` | "Plan Approval Request from {from}", "Plan file: {path}", "Plan Approved by {name}", "You can now proceed with implementation", "Plan Rejected by {name}", "Feedback:", "Agent idle", "Last DM: {summary}" | P1 |
| `ShutdownMessage.tsx` | "Shutdown request from {from}", "Reason: {text}", "Shutdown rejected by {from}", "Teammate is continuing to work", "[Shutdown Approved] {from} is now exiting" | P2 |
| `SystemAPIErrorMessage.tsx` | "Retrying in {seconds}... (attempt {n}/{max})", "second"/"seconds" | P2 |
| `SystemTextMessage.tsx` | "All background agents stopped", "Allowed", "Stop hook error:", "Worked", "Saved", "/remote-control is active", 各种 subtype 标签 | P2 |
| `RateLimitMessage.tsx` | "/extra-usage to finish", "/login to switch", "/upgrade to increase", "Opening your options..." (getUpsellMessage 函数) | P2 |

---

## 汇总

| 状态 | 计数 | 占比 |
|------|------|------|
| 已完成 | 18 | 45% |
| 部分完成 | 2 | 5% |
| 未开始 | 8 | 20% |
| 无需 i18n | 12 | 30% |
| **总计** | **40** | 100% |

## 备注
- 最主要缺失是 `AssistantTextMessage.tsx`（P0 错误消息）和 `AttachmentMessage.tsx`（~20 处附件描述）
- `CollapsedReadSearchContent.tsx` 的动词形态系统是最大挑战，需要设计动词时态/单复数 i18n 方案
- `teamMemCollapsed.tsx` 与 `CollapsedReadSearchContent.tsx` 共享相同的动词形态逻辑
