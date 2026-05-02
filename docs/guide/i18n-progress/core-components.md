# 核心 UI 组件国际化进度

## 状态：⚠️ 58% 完成 (41/71)

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

---

## 待补全 ❌ (40 文件)

### 帮助和引导 (3)
| 文件 | 说明 |
|------|------|
| `Onboarding.tsx` | 首次使用引导 |
| `HelpV2/General.tsx` | 帮助介绍 |
| `HelpV2/HelpV2.tsx` | 帮助系统主页 |

### 欢迎页面和消息 (6)
| 文件 | 说明 |
|------|------|
| `LogoV2/WelcomeV2.tsx` | 欢迎消息 |
| `LogoV2/LogoV2.tsx` | 调试/沙箱信息 |
| `LogoV2/ChannelsNotice.tsx` | 频道状态 |
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
| `FullscreenLayout.tsx` / `EffortCallout.tsx` | 状态/提示组件 |
| `ValidationErrorsList.tsx` / `FileEditToolUseRejectedMessage.tsx` / `FileEditToolUpdatedMessage.tsx` | 错误/状态消息 |

---

## 汇总

| 状态 | 计数 | 占比 |
|------|------|------|
| 已完成 | 41 | 58% |
| 待补全 | 30 | 42% |
| **总计** | **71** | 100% |

## 备注
- 本轮完成了全部 27 个"词条已定义"的文件迁移（Group 1）
- 剩余 40 个文件需要先在 `components.ts` 中定义词条 key
- 已完成文件覆盖了最常用的对话框和交互组件
