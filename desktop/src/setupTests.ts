/**
 * Global Vitest setup for desktop tests.
 *
 * - Sets the default locale to 'en' so tests that assert English text pass
 *   regardless of the system/browser locale.
 */
import { useSettingsStore } from './stores/settingsStore'

// Must run before each test because other beforeEach blocks may reset the store
beforeEach(() => {
  useSettingsStore.setState({ locale: 'en' })
})
