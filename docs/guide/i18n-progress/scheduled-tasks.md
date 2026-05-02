# Scheduled-Tasks 组件国际化进度

## 状态：✅ 100% 完成 (9/9)

## 词条文件
`src/i18n/locales/keys/scheduledTasks.ts`

## 已完成文件列表

### Wizard 入口
- [x] `ScheduledTaskWizard.tsx` — 标题 (New/Edit scheduled task)

### 向导步骤 (steps/)
- [x] `NameStep.tsx` — 任务名称输入
- [x] `TaskDescriptionStep.tsx` — 描述输入
- [x] `TaskPromptStep.tsx` — Prompt 输入
- [x] `TaskModelStep.tsx` — 模型选择
- [x] `PermissionStep.tsx` — 权限模式选择 (10 个选项)
- [x] `FolderStep.tsx` — 工作目录选择 (自定义路径/选择模式)
- [x] `ScheduleStep.tsx` — 时间设置 + 频率选项
- [x] `TaskConfirmStep.tsx` — 确认页面 (17 个字段标签)

## 词条 Key 概述

| 分类 | 数量 | 示例 |
|------|------|------|
| `task.wizard.*` | 2 | titleNew, titleEdit |
| `task.name.*` | 4 | subtitle, description, placeholder, errorRequired |
| `task.desc.*` | 4 | subtitle, description, placeholder, errorRequired |
| `task.prompt.*` | 4 | subtitle, description, placeholder, errorRequired |
| `task.model.*` | 1 | subtitle |
| `task.perm.*` | 10 | subtitle, description, permission option labels/descs |
| `task.folder.*` | 8 | subtitle, description, placeholders, errors |
| `task.schedule.*` | 6 | timeSubtitle, timeDesc, frequencySubtitle, frequencyDesc |
| `task.freq.*` | 5 | manual, hourly, daily, weekdays, weekly |
| `task.confirm.*` | 16 | subtitle, field labels (Name/Description/Prompt 等), hints |

## 备注
- `cronFrequency.ts` 中的频率选项也使用了 t() 国际化
- PermissionStep 使用 useMemo 动态构建选项数组
