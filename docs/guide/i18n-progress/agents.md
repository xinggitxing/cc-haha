# Agents 组件国际化进度

## 状态：✅ 100% 完成 (22/22)

## 词条文件
`src/i18n/locales/keys/agents.ts`

## 已完成文件列表

### Agent 列表/菜单
- [x] `AgentsList.tsx` — 列表页：创建按钮、空状态、built-in 分组标题
- [x] `AgentsMenu.tsx` — 菜单：查看/编辑/删除选项，删除确认

### Agent 详情/编辑
- [x] `AgentDetail.tsx` — 详情页：字段标签 (Tools/Model/Memory 等)
- [x] `AgentEditor.tsx` — 编辑器：菜单项 (Open in editor/Edit tools 等)
- [x] `AgentNavigationFooter.tsx` — 底部导航提示

### 选择器组件
- [x] `ColorPicker.tsx` — 颜色选择器
- [x] `ModelSelector.tsx` — 模型选择器
- [x] `ToolSelector.tsx` — 工具选择器 (分类标签、按钮文本)

### Agent 创建向导
- [x] `CreateAgentWizard.tsx` — 向导入口标题
- [x] `ConfirmStepWrapper.tsx` — 保存确认逻辑
- [x] `validateAgent.ts` — 验证错误消息

### 向导步骤 (wizard-steps/)
- [x] `TypeStep.tsx` — Agent 类型输入
- [x] `MethodStep.tsx` — 创建方式选择 (生成/手动)
- [x] `DescriptionStep.tsx` — 描述输入
- [x] `ModelStep.tsx` — 模型选择
- [x] `ToolsStep.tsx` — 工具选择
- [x] `ColorStep.tsx` — 颜色选择
- [x] `GenerateStep.tsx` — AI 生成
- [x] `LocationStep.tsx` — 存储位置选择
- [x] `MemoryStep.tsx` — 记忆配置选择
- [x] `PromptStep.tsx` — 系统提示词
- [x] `ConfirmStep.tsx` — 确认并保存

## 词条 Key 概述

| 分类 | 数量 | 示例 |
|------|------|------|
| `agent.validation.*` | 16 | typeRequired, typePattern, descriptionIsRequired |
| `agent.wizard.*` | 16 | subtitleConfirm, subtitleDescription, descriptionPlaceholder |
| `agent.list.*` | 12 | createNew, emptyTitle, builtIn, shadowedBy |
| `agent.menu.*` | 14 | viewAgent, editAgent, deleteAgent, deleteConfirm |
| `agent.tools.*` | 9 | readOnly, edit, execution, mcp, continue |
| `agent.confirm.*` | 9 | name, location, tools, model, memory |

## 备注
- 所有文件均为 React Compiler 编译输出，部分文件有 `$` memo cache
- 已验证导入路径正确性
