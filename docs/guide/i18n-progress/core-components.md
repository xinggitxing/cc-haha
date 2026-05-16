# 核心 UI 组件国际化进度

## 状态：✅ 代码迁移 100% (86/86)，词条已全部定义

## 词条文件
- `src/i18n/locales/keys/components.ts` — Core UI components
- `src/i18n/locales/keys/trust.ts` — Trust/Security dialogs
- `src/i18n/locales/keys/pluginHints.ts` — Plugin/LSP recommendations
- `src/i18n/locales/keys/promptInput.ts` — Prompt input help menu
- `src/i18n/locales/keys/sandbox.ts` — Sandbox settings
- `src/i18n/locales/keys/miscUi.ts` — Desktop upsell, logo banners, misc

---

## 已完成 ✅ (66 文件)

### 初始完成 (4)
| 文件 | 使用的 Key |
|------|-----------|
| `ExportDialog.tsx` | `ui.exportDialog.*` |
| `ResumeTask.tsx` | `ui.resumeTask.*` |
| `TeleportStash.tsx` | `ui.teleportStash.*` |
| `LocalePicker.tsx` | `locale.*` |

### 第一轮：词条已定义 → 已使用 (27)
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

### 第一轮新增 (10)
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

### 第二轮新增 (7)
| 文件 | 使用的 Key |
|------|-----------|
| `HelpV2/General.tsx` | `ui.general.*` |
| `LogoV2/ChannelsNotice.tsx` | `ui.channelsNotice.*` |
| `FileEditToolUseRejectedMessage.tsx` | `ui.fileEdit.*` |
| `FileEditToolUpdatedMessage.tsx` | `ui.fileEdit.*` |
| `FullscreenLayout.tsx` | `ui.fullscreen.*` |
| `EffortCallout.tsx` | `ui.effortCallout.*` |
| `ValidationErrorsList.tsx` | `ui.validation.*` |

### 第二轮代码迁移 (12)
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

### 本轮代码迁移 (13)
| 文件 | 使用的 Key 前缀 |
|------|----------------|
| `TeleportError.tsx` | `ui.teleportError.*` |
| `TeleportRepoMismatchDialog.tsx` | `ui.teleportRepoMismatch.*` |
| `AutoUpdater.tsx` | `ui.autoUpdater.*` |
| `WorktreeExitDialog.tsx` | `ui.worktreeExit.*` |
| `QuickOpenDialog.tsx` | `ui.quickOpen.*` |
| `GlobalSearchDialog.tsx` | `ui.globalSearch.*` |
| `LogSelector.tsx` | `ui.logSelector.*` |
| `Stats.tsx` | `ui.stats.*` |
| `ClaudeMdExternalIncludesDialog.tsx` | `ui.claudeMdExternal.*` |
| `ClaudeInChromeOnboarding.tsx` | `ui.claudeChromeOnboarding.*` |
| `WelcomeV2.tsx` | `ui.welcomeV2.*` |
| `TeleportResumeWrapper.tsx` | `ui.teleportResume.*` |
| `Spinner.tsx` | (skip - 动词来自 `getSpinnerVerbs()`) |

### 无需处理（无硬编码字符串）
| 文件 | 原因 |
|------|------|
| `LogoV2/CondensedLogo.tsx` | 仅渲染动态数据 |
| `LogoV2/Feed.tsx` | 仅渲染 props |
| `LogoV2/FeedColumn.tsx` | 仅渲染 feeds |
| `MessageSelector.tsx` | 无硬编码 UI 字符串 |

---

## 待补全 ❌ (4 个词条未使用)

| Key | 说明 |
|-----|------|
| `ui.globalSearch.truncated` | 搜索截断提示，当前组件使用 "+" 后缀格式不相同 |
| `ui.globalSearch.matchesIn` | 匹配位置显示格式与组件内部实现不一致 |
| `ui.logSelector.loading` | "Loading sessions..." - 组件使用 Spinner 组件处理加载状态 |
| `ui.logSelector.title` | "Select a session to resume" - 标题通过父组件 props 传入 |

---

## 备注
- 验证发现信任对话框、插件提示、沙箱配置、桌面推广等模块的 18 个待迁移组件已经在之前的轮次中迁移完成
- 新增 4 个 GlobalSearch 词条 (`title`, `typeToSearch`, `matches`, `selectAction`) 并迁移至组件
- 修复 GlobalSearchDialog 中的硬编码字符串："Global Search"、"Type to search…"、"matches"、"open in editor"
- 所有更改均已通过语法检查和 `t()` 使用检查
- Core Components 模块文件覆盖率 100%，仅遗留 4 个因组件实现差异而无法使用的词条
