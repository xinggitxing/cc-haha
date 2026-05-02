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

### 本轮完成：代码迁移 (12)
| 文件 | 使用的 Key 前缀 |
|------|----------------|
| `Onboarding.tsx` | `ui.onboarding.*` |
| `HelpV2/HelpV2.tsx` | `ui.helpV2.*` |
| `LogoV2/LogoV2.tsx` | `ui.logoV2.*` |
| `FeedbackSurvey/FeedbackSurvey.tsx` | `ui.feedbackSurvey.*` |
| `FeedbackSurvey/FeedbackSurveyView.tsx` | `ui.feedbackSurveyView.*` |
| `FeedbackSurvey/TranscriptSharePrompt.tsx` | `ui.transcriptShare.*` |
| `MCPServerMultiselectDialog.tsx` | `ui.mcpMultiselect.*` |
| `MCPServerDialogCopy.tsx` | `ui.mcpDialogCopy.*` |
| `MCPServerDesktopImportDialog.tsx` | `ui.mcpDesktopImport.*` |
| `IdeAutoConnectDialog.tsx` | `ui.ideAutoConnect.*` |
| `IdeOnboardingDialog.tsx` | `ui.ideOnboarding.*` |
| `IdeStatusIndicator.tsx` | `ui.ideStatus.*` |

### 词条已添加（待迁移）
以下文件的词条 key 已在 `components.ts` 中定义，但尚未迁移代码：
| 文件 | 使用的 Key 前缀 |
|------|----------------|
| `TeleportError.tsx` | `ui.teleportError.*` |
| `TeleportRepoMismatchDialog.tsx` | `ui.teleportRepoMismatch.*` |
| `QuickOpenDialog.tsx` | `ui.quickOpen.*` |
| `GlobalSearchDialog.tsx` | `ui.globalSearch.*` |
| `LogSelector.tsx` | `ui.logSelector.*` |
| `Spinner.tsx` | `ui.spinner.*` |
| `AutoUpdater.tsx` | `ui.autoUpdater.*` |
| `Stats.tsx` | `ui.stats.*` |
| `ClaudeMdExternalIncludesDialog.tsx` | `ui.claudeMdExternal.*` |
| `WorktreeExitDialog.tsx` | `ui.worktreeExit.*` |
| `ClaudeInChromeOnboarding.tsx` | `ui.claudeChromeOnboarding.*` |

---

## 待补全 ❌ (23 文件 → 待迁移)

### 待迁移 (11)
| 文件 | 状态 |
|------|------|
| `LogoV2/WelcomeV2.tsx` | ❌ |
| `LogoV2/CondensedLogo.tsx` | ❌ |
| `LogoV2/Feed.tsx` | ❌ |
| `LogoV2/FeedColumn.tsx` | ❌ |
| `LogSelector.tsx` | Keys added ❌ |
| `MessageSelector.tsx` | ❌ |
| `GlobalSearchDialog.tsx` | Keys added ❌ |
| `QuickOpenDialog.tsx` | Keys added ❌ |
| `TeleportError.tsx` | Keys added ❌ |
| `TeleportRepoMismatchDialog.tsx` | Keys added ❌ |
| `TeleportResumeWrapper.tsx` | ❌ |
| `Stats.tsx` | Keys added ❌ |
| `ClaudeMdExternalIncludesDialog.tsx` | Keys added ❌ |
| `WorktreeExitDialog.tsx` | Keys added ❌ |
| `ClaudeInChromeOnboarding.tsx` | Keys added ❌ |
| `Spinner.tsx` | Keys added ❌ |
| `AutoUpdater.tsx` | Keys added ❌ |

---

## 汇总

| 状态 | 计数 | 占比 |
|------|------|------|
| 已完成 | 60 | 85% |
| Keys 已添加待迁移 | 11 | 15% |
| **总计** | **71** | 100% |

## 备注
- 第三批完成了 12 个文件的迁移：`Onboarding.tsx`, `HelpV2/HelpV2.tsx`, `LogoV2/LogoV2.tsx`, `FeedbackSurvey/*` (3), `MCPServer*` (3), `Ide*` (3)
- 为 11 个文件新添加了词条 key（`TeleportError`, `QuickOpenDialog`, `GlobalSearchDialog`, `LogSelector`, `Spinner`, `AutoUpdater`, `Stats`, `ClaudeMdExternalIncludesDialog`, `WorktreeExitDialog`, `ClaudeInChromeOnboarding` 等），待后续迁移代码
- 还剩余 17 个文件待处理：11 个已添加 keys（待迁移）+ 6 个未开始（`WelcomeV2`, `CondensedLogo`, `Feed`, `FeedColumn`, `MessageSelector`, `TeleportResumeWrapper`）
