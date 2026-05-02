import { en as commonEn } from './keys/common'
import { en as localePickerEn } from './keys/localePicker'
import { en as configEn } from './keys/config'
import { en as doctorEn } from './keys/doctor'
import { en as resumeEn } from './keys/resume'
import { en as replEn } from './keys/repl'
import { en as toolEn } from './keys/tool'
import { en as permEn } from './keys/permissions'
import { en as taskEn } from './keys/scheduledTasks'
import { en as msgEn } from './keys/messages'
import { en as agentEn } from './keys/agents'
import { en as componentsEn } from './keys/components'
import { en as trustEn } from './keys/trust'
import { en as pluginHintsEn } from './keys/pluginHints'
import { en as promptInputEn } from './keys/promptInput'
import { en as sandboxEn } from './keys/sandbox'
import { en as miscUiEn } from './keys/miscUi'

export const en = {
  // ── Common ────────────────────────────────────────────
  ...commonEn,

  // ── Locale Picker ─────────────────────────────────────
  ...localePickerEn,

  // ── Config / Settings ─────────────────────────────────
  ...configEn,

  // ── Doctor / Diagnostics ──────────────────────────────
  ...doctorEn,

  // ── Resume Conversation ───────────────────────────────
  ...resumeEn,

  // ── REPL ──────────────────────────────────────────────
  ...replEn,

  // ── Tool Use Messages ────────────────────────────────
  ...toolEn,

  // ── Permission Prompts ───────────────────────────────
  ...permEn,

  // ── Scheduled Tasks ──────────────────────────────────
  ...taskEn,

  // ── Message Components ──────────────────────────────
  ...msgEn,

  // ── Agent Components ────────────────────────────────
  ...agentEn,

  // ── Root UI Components ──────────────────────────────
  ...componentsEn,

  // ── Trust / Security Dialogs ────────────────────────
  ...trustEn,

  // ── Plugin / LSP Recommendation Dialogs ────────────
  ...pluginHintsEn,

  // ── Prompt Input Help Menu ─────────────────────────
  ...promptInputEn,

  // ── Sandbox Settings ───────────────────────────────
  ...sandboxEn,

  // ── Misc UI (DesktopUpsell, LogoBanners, etc.) ────
  ...miscUiEn,
} as const

export type TranslationKey = keyof typeof en
