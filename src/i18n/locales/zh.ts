import type { TranslationKey } from './en'
import { zh as commonZh } from './keys/common'
import { zh as localePickerZh } from './keys/localePicker'
import { zh as configZh } from './keys/config'
import { zh as doctorZh } from './keys/doctor'
import { zh as resumeZh } from './keys/resume'
import { zh as replZh } from './keys/repl'
import { zh as toolZh } from './keys/tool'
import { zh as permZh } from './keys/permissions'
import { zh as taskZh } from './keys/scheduledTasks'
import { zh as msgZh } from './keys/messages'
import { zh as agentZh } from './keys/agents'
import { zh as componentsZh } from './keys/components'
import { zh as trustZh } from './keys/trust'
import { zh as pluginHintsZh } from './keys/pluginHints'
import { zh as promptInputZh } from './keys/promptInput'
import { zh as sandboxZh } from './keys/sandbox'
import { zh as miscUiZh } from './keys/miscUi'

export const zh: Record<TranslationKey, string> = {
  // ── 通用 ──────────────────────────────────────────────
  ...commonZh,

  // ── 语言选择器 ────────────────────────────────────────
  ...localePickerZh,

  // ── 设置 ──────────────────────────────────────────────
  ...configZh,

  // ── 诊断 ──────────────────────────────────────────────
  ...doctorZh,

  // ── 会话恢复 ──────────────────────────────────────────
  ...resumeZh,

  // ── REPL ──────────────────────────────────────────────
  ...replZh,

  // ── 工具使用消息 ──────────────────────────────────────
  ...toolZh,

  // ── 权限提示 ─────────────────────────────────────────
  ...permZh,

  // ── 定时任务 ─────────────────────────────────────────
  ...taskZh,

  // ── 消息组件 ─────────────────────────────────────────
  ...msgZh,

  // ── 代理组件 ─────────────────────────────────────────
  ...agentZh,

  // ── 根 UI 组件 ──────────────────────────────────────
  ...componentsZh,

  // ── 信任/安全对话框 ─────────────────────────────────
  ...trustZh,

  // ── 插件/LSP 推荐对话框 ─────────────────────────────
  ...pluginHintsZh,

  // ── 输入提示帮助菜单 ────────────────────────────────
  ...promptInputZh,

  // ── 沙箱设置 ───────────────────────────────────────
  ...sandboxZh,

  // ── 杂项 UI ─────────────────────────────────────────
  ...miscUiZh,
}
