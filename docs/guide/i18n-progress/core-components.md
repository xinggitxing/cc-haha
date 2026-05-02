# 核心 UI 组件国际化进度

## 状态：🔄 代码迁移 77% (66/86)，词条已全部定义

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

### 词条已添加（待迁移）

以下为新独立 key 文件，词条已定义但组件尚未迁移：

| 词条文件 | 目标组件 |
|----------|---------|
| `trust.ts` | `TrustDialog.tsx`, `ManagedSettingsSecurityDialog.tsx` |
| `pluginHints.ts` | `ClaudeCodeHint/PluginHintMenu.tsx`, `LspRecommendation/LspRecommendationMenu.tsx` |
| `promptInput.ts` | `PromptInput/PromptInputHelpMenu.tsx`, `PromptInput/PromptInputStashNotice.tsx`, `PromptInput/IssueFlagBanner.tsx`, `PromptInput/SandboxPromptFooterHint.tsx` |
| `sandbox.ts` | `sandbox/SandboxConfigTab.tsx`, `sandbox/SandboxDependenciesTab.tsx`, `sandbox/SandboxOverridesTab.tsx`, `sandbox/SandboxSettings.tsx` |
| `miscUi.ts` | `DesktopUpsell/DesktopUpsellStartup.tsx`, `LogoV2/GuestPassesUpsell.tsx`, `LogoV2/OverageCreditUpsell.tsx`, `LogoV2/Opus1mMergeNotice.tsx`, `LogoV2/VoiceModeNotice.tsx`, `MemoryUpdateNotification.tsx`, `NotebookEditToolUseRejectedMessage.tsx` |

---

## 待补全 ❌ (5 个词条未使用)

以下词条虽已定义，但在当前组件中未找到匹配的 UI 字符串（可能在子组件或未来需要）：

| Key | 说明 |
|-----|------|
| `ui.globalSearch.truncated` | 搜索截断提示，当前组件使用 "+" 后缀 |
| `ui.globalSearch.matchesIn` | 匹配位置显示格式不同 |
| `ui.logSelector.loading` | "Loading sessions..." - 可能在加载状态使用 |
| `ui.logSelector.title` | "Select a session to resume" - 标题可能通过 props 传入 |
| `ui.spinner.*` | Spinner 动词由 `getSpinnerVerbs()` 动态生成 |

---

## 汇总

| 状态 | 计数 | 占比 |
|------|------|------|
| 已完成代码迁移 | 66 | 77% |
| 词条已定义（待迁移） | 20 | 23% |
| **总计** | **86** | 100% |

## 备注
- 本轮完成了 13 个文件的代码迁移：`TeleportError.tsx`, `TeleportRepoMismatchDialog.tsx`, `AutoUpdater.tsx`, `WorktreeExitDialog.tsx`, `QuickOpenDialog.tsx`, `GlobalSearchDialog.tsx`, `LogSelector.tsx`, `Stats.tsx`, `ClaudeMdExternalIncludesDialog.tsx`, `ClaudeInChromeOnboarding.tsx`, `WelcomeV2.tsx`, `TeleportResumeWrapper.tsx`, `Spinner.tsx`（跳过）
- 4 个文件确认无需国际化：`CondensedLogo.tsx`, `Feed.tsx`, `FeedColumn.tsx`, `MessageSelector.tsx`
- 为上述文件添加了约 50+ 个新词条（中英文）
- 遗留 5 个词条虽已定义但暂未找到匹配的 UI 字符串

## 本轮新增：5 个独立词条文件

| 文件 | 词条数 | 覆盖组件 |
|------|--------|---------|
| `keys/trust.ts` | 16 | TrustDialog, ManagedSettingsSecurityDialog |
| `keys/pluginHints.ts` | 18 | PluginHintMenu, LspRecommendationMenu |
| `keys/promptInput.ts` | 22 | PromptInputHelpMenu, StashNotice, IssueFlagBanner, SandboxPromptFooterHint |
| `keys/sandbox.ts` | 36 | SandboxConfigTab, SandboxDependenciesTab, SandboxOverridesTab, SandboxSettings |
| `keys/miscUi.ts` | 17 | DesktopUpsellStartup, GuestPassesUpsell, OverageCreditUpsell, Opus1mMergeNotice, VoiceModeNotice, MemoryUpdateNotification, NotebookEditToolUseRejectedMessage |

**总计新增约 109 个词条（中英文），覆盖约 20 个组件文件，词条已就绪，待代码迁移。**

## 后续修复
- **ThinkingToggle.tsx**: 修复 `t()` 缺少 `{}` 包裹的问题（显示为字面文本）；将 `options` 中的硬编码英文字符串替换为 `t()`；为 mid-conversation 警告添加翻译
- **ConsoleOAuthFlow.tsx**: 修复 `t()` 缺少 `{}` 包裹的问题；替换选择项中的硬编码描述文字；新增 `ui.oauth.claudeAccount/consoleAccount/thirdParty` 等 6 个词条（中英文）
