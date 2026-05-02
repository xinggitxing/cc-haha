import React, { createContext, useContext, useCallback, useMemo } from 'react'
import { getInitialSettings } from '../utils/settings/settings.js'
import { useAppStateMaybeOutsideOfProvider } from '../state/AppState.js'
import { escapeRegExp } from '../utils/stringUtils.js'
import { en, type TranslationKey } from './locales/en'
import { zh } from './locales/zh'

export type Locale = 'en' | 'zh'

/** Selector for useAppState(s => s.locale). Export to avoid duplicating across files. */
export const selectLocale = (s: { locale?: 'en' | 'zh' }) => s.locale

const translations: Record<Locale, Record<string, string>> = { en, zh }

/**
 * Module-level locale, synced from AppState via syncLocaleFromAppState().
 * Initialized lazily on first access to avoid calling getInitialSettings()
 * at module evaluation time — doing so causes Bun's module resolver to
 * deadlock on Windows when many components simultaneously import this module.
 */
let activeLocale: Locale = 'en'
let activeLocaleInitialized = false

function ensureActiveLocale(): void {
  if (activeLocaleInitialized) return
  activeLocaleInitialized = true
  activeLocale = (getInitialSettings()?.locale as Locale) === 'zh' ? 'zh' : 'en'
}

/**
 * Sync the locale from AppState. Called by onChangeAppState when locale changes.
 * This ensures t() picks up locale changes immediately without reading disk.
 */
export function syncLocaleFromAppState(locale: 'en' | 'zh'): void {
  activeLocale = locale
  activeLocaleInitialized = true
}

/**
 * Get the current locale. Reads from the in-memory activeLocale (synced from AppState).
 * This is fast and doesn't hit disk.
 */
function getLocale(): Locale {
  ensureActiveLocale()
  return activeLocale
}

/**
 * Translate a key with optional interpolation params.
 * Falls back to English if translation is missing, and to the key itself as last resort.
 */
export function translate(
  locale: Locale,
  key: TranslationKey,
  params?: Record<string, string | number>,
): string {
  let text = translations[locale]?.[key] ?? translations.en[key] ?? key
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`\\{${escapeRegExp(k)}\\}`, 'g'), String(v))
    }
  }
  return text
}

// ── React Context (optional — useTranslation() works without Provider) ─────

type LocaleContextValue = {
  locale: Locale
  t: (key: TranslationKey, params?: Record<string, string | number>) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

/**
 * Optional provider that overrides the default locale.
 * If not used, useTranslation() reads locale from AppState directly.
 *
 * Subscribes to AppState.locale so context consumers re-render on language switch.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const appStateLocale = useAppStateMaybeOutsideOfProvider(
    (s: { locale?: 'en' | 'zh' }) => s.locale,
  )
  const locale = appStateLocale ?? getLocale()

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>) =>
      translate(locale, key, params),
    [locale],
  )

  const value = useMemo(() => ({ locale, t }), [locale, t])

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

/**
 * React hook that returns a bound `t()` function for the current locale.
 * Works with or without a LocaleProvider in the tree.
 *
 * Reads locale from AppState so React Compiler properly invalidates caches
 * when the language changes. Falls back to the module-level activeLocale
 * when called outside of an AppStateProvider.
 */
export function useTranslation(): (
  key: TranslationKey,
  params?: Record<string, string | number>,
) => string {
  const ctx = useContext(LocaleContext)
  // Read locale from AppState for React reactivity (cache busting in React Compiler).
  // Falls back to module-level activeLocale when outside AppStateProvider.
  const appStateLocale = useAppStateMaybeOutsideOfProvider(
    (s: { locale?: 'en' | 'zh' }) => s.locale,
  )
  const locale = appStateLocale ?? getLocale()
  return useCallback(
    (key: TranslationKey, params?: Record<string, string | number>) =>
      ctx ? ctx.t(key, params) : translate(locale, key, params),
    [ctx, locale],
  )
}

/**
 * Get a translation outside of React (e.g. in utility code).
 * Reads locale from settings directly.
 */
export function t(
  key: TranslationKey,
  params?: Record<string, string | number>,
): string {
  return translate(getLocale(), key, params)
}

export type { TranslationKey }
