# 核心 UI 组件国际化进度

## 状态：⚠️ 68% 完成 (48/71)

## 词条文件
`src/i18n/locales/keys/components.ts`

---

## 已完成 ✅ (31 文件)

### 初始完成 (4)
| 文件 | 使用的 Key |
|------|-----------|
| `ExportDialog.tsx` | `ui.exportDialog.*` |
| `ResumeTask.tsx` | `ui.resumeTask.*` |
| `TeleportStash.tsx` | `ui.teleportStash.*` |
| `LocalePicker.tsx` | `locale.*` |

### 本轮完成：词条已定义 → 已使用 (27)
| 文件 | 使用的 Key 前缀 |
|------|----------------|
| `ExitFlow.tsx` | `ui.exitFlow.*` (goodbye1-4) |
| `ThemePicker.tsx` | `ui.themePicker.*` (auto, dark, light 等 7 项) |
| `OutputStylePicker.tsx` | `ui.outputStylePicker.*` |
| `ModelPicker.tsx` | `ui.modelPicker.*` |
| `CompactSummary.tsx` | `ui.compactSummary.*` |
| `ContextVisualization.tsx` | `ui.contextVis.*` |
| `ThinkingToggle.tsx` | `ui.thinkingToggle.*` |
| `CostThresholdDialog.tsx` | `ui.costThreshold.*` |
| `InvalidConfigDialog.tsx` | `ui.invalidConfig.*` |
| `InvalidSettingsDialog.tsx` | `ui.invalidSettings.*` |
| `ChannelDowngradeDialog.tsx` | `ui.channelDowngrade.*` |
| `DevChannelsDialog.tsx` | `ui.devChannels.*` |
| `IdleReturnDialog.tsx` | `ui.idleReturn.*` |
| `AutoModeOptInDialog.tsx` | `ui.autoModeOptIn.*` |
| `BypassPermissionsModeDialog.tsx` | `ui.bypassPermissions.*` |
| `ApproveApiKey.tsx` | `ui.approveApiKey.*` |
| `WorkflowMultiselectDialog.tsx` | `ui.workflowSelect.*` |
| `PressEnterToContinue.tsx` | `ui.pressEnterToContinue` |
| `ConsoleOAuthFlow.tsx` | `ui.oauth.*` |
| `RemoteCallout.tsx` | `ui.remoteCallout.*` |
| `RemoteEnvironmentDialog.tsx` | `ui.remoteEnv.*` |
| `MCPServerApprovalDialog.tsx` | `ui.mcpApproval.*` |
| `BridgeDialog.tsx` | `ui.bridgeDialog.*` |
| `Feedback.tsx` | `ui.feedback.*` |
| `DiagnosticsDisplay.tsx` | `ui.diagnosticsDisplay.*` |
| `HistorySearchDialog.tsx` | `ui.historySearch.*` |
| `design-system/FuzzyPicker.tsx` | `ui.fuzzyPicker.*` |

### 本轮完成：新增 (10)
| 文件 | 使用的 Key |
|------|-----------|
| `ContextSuggestions.tsx` | `ui.contextSuggestions.*` |
| `InterruptedByUser.tsx` | `ui.interruptedByUser.*` |
| `PrBadge.tsx` | `ui.prBadge.*` |
| `AwsAuthStatusBox.tsx` | `ui.awsAuthStatus.*` |
| `KeybindingWarnings.tsx` | `ui.keybindingWarnings.*` |
| `SkillImprovementSurvey.tsx` | `ui.skillSurvey.*` |
| `LanguagePicker.tsx` | `ui.languagePicker.*` |
| `DesktopHandoff.tsx` | `ui.desktopHandoff.*` |
| `ShowInIDEPrompt.tsx` | `ui.showInIDE.*` |
| `FallbackToolUseErrorMessage.tsx` | `ui.fallbackError.*` |

### 本轮完成：新增第二批 (7)
| 文件 | 使用的 Key |
|------|-----------|
| `HelpV2/General.tsx` | `ui.general.*` |
| `LogoV2/ChannelsNotice.tsx` | `ui.channelsNotice.*` |
| `FileEditToolUseRejectedMessage.tsx` | `ui.fileEdit.*` |
| `FileEditToolUpdatedMessage.tsx` | `ui.fileEdit.*` |
| `FullscreenLayout.tsx` | `ui.fullscreen.*` |
| `EffortCallout.tsx` | `ui.effortCallout.*` |
| `ValidationErrorsList.tsx` | `ui.validation.*` |

### 词条已添加（待迁移）
以下文件的词条 key 已在 `components.ts` 中定义，但尚未迁移代码：
| 文件 | 使用的 Key 前缀 |
|------|----------------|
| `HelpV2/HelpV2.tsx` | `ui.helpV2.*` |
| `Onboarding.tsx` | `ui.onboarding.*` |
| `LogoV2/LogoV2.tsx` | `ui.logoV2.*` |

---

## 待补全 ❌ (23 文件)

### 帮助和引导 (2)
| 文件 | 说明 |
|------|------|
| `Onboarding.tsx` | 首次使用引导 |
| `HelpV2/HelpV2.tsx` | 帮助系统主页 |

### 欢迎页面和消息 (5)
| 文件 | 说明 |
|------|------|
| `LogoV2/WelcomeV2.tsx` | 欢迎消息 |
| `LogoV2/LogoV2.tsx` | 调试/沙箱信息 |
| `LogoV2/CondensedLogo.tsx` | 压缩 Logo |
| `LogoV2/Feed.tsx` | 动态消息 |
| `LogoV2/FeedColumn.tsx` | 动态消息列 |

### 反馈调查 (3)
| 文件 | 说明 |
|------|------|
| `FeedbackSurvey/FeedbackSurvey.tsx` | 调查入口 |
| `FeedbackSurvey/FeedbackSurveyView.tsx` | 评分视图 |
| `FeedbackSurvey/TranscriptSharePrompt.tsx` | 分享提示 |

### MCP 对话框 (3)
| 文件 | 说明 |
|------|------|
| `MCPServerMultiselectDialog.tsx` | MCP 多选 |
| `MCPServerDialogCopy.tsx` | MCP 说明 |
| `MCPServerDesktopImportDialog.tsx` | 桌面导入 |

### 搜索和选择器 (4)
| 文件 | 说明 |
|------|------|
| `LogSelector.tsx` | 会话列表 |
| `MessageSelector.tsx` | 消息恢复选项 |
| `GlobalSearchDialog.tsx` | 全局搜索 |
| `QuickOpenDialog.tsx` | 快速打开 |

### Teleport (3)
| 文件 | 说明 |
|------|------|
| `TeleportError.tsx` | Teleport 错误 |
| `TeleportRepoMismatchDialog.tsx` | 仓库不匹配 |
| `TeleportResumeWrapper.tsx` | 恢复包装 |

### IDE / 远程 (5)
| 文件 | 说明 |
|------|------|
| `IdeAutoConnectDialog.tsx` | IDE 自动连接 |
| `IdeOnboardingDialog.tsx` | IDE 引导 |
| `IdeStatusIndicator.tsx` | IDE 状态 |

### 设置和对话框 (4)
| 文件 | 说明 |
|------|------|
| `Stats.tsx` | 统计页面 |
| `ClaudeMdExternalIncludesDialog.tsx` | 外部导入 |
| `WorktreeExitDialog.tsx` | Worktree 退出 |
| `ClaudeInChromeOnboarding.tsx` | Chrome 引导 |

### 其他组件 (2)
| 文件 | 说明 |
|------|------|
| `Spinner.tsx` | 加载动画 |
| `AutoUpdater.tsx` | 自动更新 |

---

## 汇总

| 状态 | 计数 | 占比 |
|------|------|------|
| 已完成 | 48 | 68% |
| 待补全 | 23 | 32% |
| **总计** | **71** | 100% |

## 备注
- 本轮完成了第二批 7 个文件的迁移：`General.tsx`, `ChannelsNotice.tsx`, `FileEditToolUseRejectedMessage.tsx`, `FileEditToolUpdatedMessage.tsx`, `FullscreenLayout.tsx`, `EffortCallout.tsx`, `ValidationErrorsList.tsx`
- 为 `Onboarding.tsx`, `HelpV2/HelpV2.tsx`, `LogoV2/LogoV2.tsx` 预添加了词条 key，代码迁移待后续进行
- 剩余文件的词条需要在 `components.ts` 中先定义 key 再进行代码迁移
