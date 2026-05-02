import React from 'react'
import { Box, Text } from '../ink.js'
import type { OptionWithDescription } from './CustomSelect/select.js'
import { Select } from './CustomSelect/select.js'
import { Dialog } from './design-system/Dialog.js'
import { type Locale, t } from '../i18n/index.js'

type Props = {
  initialLocale: Locale | undefined
  onComplete: (locale: Locale) => void
  onCancel: () => void
}

export function LocalePicker({
  initialLocale,
  onComplete,
  onCancel,
}: Props): React.ReactNode {
  const handleSelect = (value: string) => {
    onComplete(value as Locale)
  }

  const options: OptionWithDescription[] = [
    { label: t('locale.en'), value: 'en', description: t('locale.enDesc') },
    { label: t('locale.zh'), value: 'zh', description: t('locale.zhDesc') },
  ]

  return (
    <Dialog
      title={t('locale.title')}
      onCancel={onCancel}
      hideInputGuide
      hideBorder
    >
      <Box flexDirection="column" gap={1}>
        <Box marginTop={1}>
          <Text dimColor>
            {t('locale.title')}
          </Text>
        </Box>
        <Select
          options={options}
          onChange={handleSelect}
          visibleOptionCount={2}
          defaultValue={initialLocale ?? 'en'}
        />
      </Box>
    </Dialog>
  )
}
