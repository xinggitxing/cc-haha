# 核心 UI 组件国际化进度

## 状态：⚠️ 代码迁移 ~80% (100 文件已迁移/修复，~15+ 文件待处理)

> 2026-05-17 更新：修复 14 个已完成文件的遗留硬编码字符串，迁移 Settings/ 模块 (2 文件)，添加 ~50 个新 key

## 词条文件
- `src/i18n/locales/keys/components.ts` — Core UI components (~600 keys)
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

## 已修复 ✅ (2026-05-17)

以下 14 个文件的遗留硬编码字符串已全部修复：

`ExportDialog.tsx` · `HistorySearchDialog.tsx` · `QuickOpenDialog.tsx` · `Feedback.tsx` · `CostThresholdDialog.tsx` · `ApproveApiKey.tsx` · `ChannelDowngradeDialog.tsx` · `BypassPermissionsModeDialog.tsx` · `AutoModeOptInDialog.tsx` · `DevChannelsDialog.tsx` · `IdleReturnDialog.tsx` · `WorkflowMultiselectDialog.tsx` · `IdeAutoConnectDialog.tsx` · `ConsoleOAuthFlow.tsx`

## 已迁移 ✅ — Settings 模块 (2026-05-17)

| 文件 | 迁移内容 |
|------|----------|
| `Settings/Settings.tsx` | Tab 标题: "Status"/"Config"/"Usage"/"Gates" → `t('ui.settings.*')` |
| `Settings/Config.tsx` | 全面 i18n: 36 个设置项 label、搜索框/自动更新对话框/disabled/thinking 警告/teammate 模型提示/页脚提示等全部 UI 字符串 → `t('ui.settings.*')` |

## 待迁移 ⏳ — 子目录模块 (~15 文件)

这些子目录完全未进行 i18n 处理：

### design-system (2 文件)
| 文件 | 行数 | 说明 |
|------|------|------|
| `design-system/Dialog.tsx` | 137 | `"Press {keyName} again to exit"` 在多处渲染 |
| `design-system/KeyboardShortcutHint.tsx` | 80 | `"{shortcutText} to {action}"` |

### hooks (5 文件)
| 文件 | 行数 | 说明 |
|------|------|------|
| `hooks/HooksConfigMenu.tsx` | 577 | `title="Hook Configuration - Disabled"`, `<Text>Esc to close</Text>` 等 |
| `hooks/ViewHookMode.tsx` | ~200 | `title="Hook details"`, `<Text>Esc to go back</Text>` |
| `hooks/SelectEventMode.tsx` | ~150 | `title="Hooks"` |
| `hooks/SelectHookMode.tsx` | ~150 | `<Text>Esc to go back</Text>` |
| `hooks/SelectMatcherMode.tsx` | ~180 | `<Text>Esc to go back</Text>` |

### diff (1 文件)
| 文件 | 行数 | 说明 |
|------|------|------|
| `diff/DiffDialog.tsx` | 382 | `"Loading diff..."`, `"No file changes in this turn"`, `"Too many files to display details"`, `"\u2190/\u2192 source"` 等 |

### 其他 (6 文件)
| 文件 | 行数 | 说明 |
|------|------|------|
| `grove/Grove.tsx` | 462 | 消费者条款/隐私策略 UI 文本（大量） |
| `memory/MemoryFileSelector.tsx` | 437 | "Saved in ~/.claude/CLAUDE.md" 等描述 |
| `mcp/MCPListPanel.tsx` | 503 | `title="Manage MCP servers"` |
| `skills/SkillsMenu.tsx` | 236 | `title="Skills" subtitle="No skills found"` |
| `tasks/BackgroundTasksDialog.tsx` | 651 | `title="Background tasks"` |
| `tasks/RemoteSessionDetailDialog.tsx` | 903 | `title="Stop ultraplan?"` 等多处 |

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
- 修复 14 个已完成文件中的遗留硬编码字符串需要新增 ~30 个 key
- Settings/Config.tsx (~1873 行) 是最大的单个待迁移文件
- Grove.tsx 包含法律文本（消费者条款/隐私政策），翻译需谨慎
- 所有 React Compiler 编译文件需注意 `$` 缓存数组的 locale 响应式处理
