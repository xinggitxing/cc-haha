import React, { type ReactNode, useState } from 'react'
import { Box, Text } from '../../../ink.js'
import { t } from '../../../i18n/index.js'
import { useKeybinding } from '../../../hooks/useKeybinding.js'
import TextInput from '../../TextInput.js'
import { WizardDialogLayout } from '../../wizard/index.js'
import { useWizard } from '../../wizard/useWizard.js'
import type { ScheduledTaskWizardData } from '../types.js'

export function TaskDescriptionStep(): ReactNode {
  const { goNext, goBack, updateWizardData, wizardData } =
    useWizard<ScheduledTaskWizardData>()
  const [value, setValue] = useState(wizardData.description ?? '')
  const [error, setError] = useState<string | null>(null)

  useKeybinding('confirm:no', goBack, { context: 'Settings' })

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (!trimmed) {
      setError(t('task.desc.error.required'))
      return
    }
    setError(null)
    updateWizardData({ description: trimmed })
    goNext()
  }

  return (
    <WizardDialogLayout subtitle={t('task.desc.subtitle')}>
      <Box flexDirection="column">
        <Box marginBottom={1}>
          <Text dimColor>
            {t('task.desc.description')}
          </Text>
        </Box>
        <TextInput
          value={value}
          onChange={setValue}
          onSubmit={handleSubmit}
          placeholder={t('task.desc.placeholder')}
        />
        {error && (
          <Box marginTop={1}>
            <Text color="red">{error}</Text>
          </Box>
        )}
      </Box>
    </WizardDialogLayout>
  )
}
