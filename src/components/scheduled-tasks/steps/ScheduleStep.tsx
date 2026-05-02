import React, { type ReactNode, useMemo, useState } from 'react'
import { Box, Text } from '../../../ink.js'
import { useKeybinding } from '../../../hooks/useKeybinding.js'
import { Select } from '../../CustomSelect/select.js'
import TextInput from '../../TextInput.js'
import { WizardDialogLayout } from '../../wizard/index.js'
import { useWizard } from '../../wizard/useWizard.js'
import {
  frequencyToCron,
  type Frequency,
} from '../../../utils/cronFrequency.js'
import { t } from '../../../i18n/index.js'
import type { ScheduledTaskWizardData } from '../types.js'

export function ScheduleStep(): ReactNode {
  const { goNext, goBack, updateWizardData, wizardData } =
    useWizard<ScheduledTaskWizardData>()

  const frequencyOptions = useMemo(
    () => [
      { label: t('task.freq.manual'), value: 'manual' as Frequency },
      { label: t('task.freq.hourly'), value: 'hourly' as Frequency },
      { label: t('task.freq.daily'), value: 'daily' as Frequency },
      { label: t('task.freq.weekdays'), value: 'weekdays' as Frequency },
      { label: t('task.freq.weekly'), value: 'weekly' as Frequency },
    ],
    [],
  )

  const [frequency, setFrequency] = useState<Frequency>(
    (wizardData.frequency as Frequency) ?? 'daily',
  )
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [time, setTime] = useState(wizardData.scheduledTime ?? '09:00')

  useKeybinding('confirm:no', goBack, { context: 'Settings' })

  const needsTime = frequency === 'daily' || frequency === 'weekdays' || frequency === 'weekly'

  const handleFrequencySelect = (value: string) => {
    const freq = value as Frequency
    setFrequency(freq)

    if (freq === 'manual' || freq === 'hourly') {
      // No time needed
      const cron = frequencyToCron(freq)
      updateWizardData({
        frequency: freq,
        scheduledTime: undefined,
        cron: cron || undefined,
      })
      goNext()
    } else {
      // Show time picker for daily/weekdays/weekly
      setShowTimePicker(true)
    }
  }

  const handleTimeSubmit = () => {
    // Validate time format HH:MM
    if (!/^\d{1,2}:\d{2}$/.test(time)) return
    const cron = frequencyToCron(frequency, time)
    updateWizardData({
      frequency,
      scheduledTime: time,
      cron: cron || undefined,
    })
    goNext()
  }

  if (showTimePicker && needsTime) {
    return (
      <WizardDialogLayout subtitle={t('task.schedule.timeSubtitle')}>
        <Box flexDirection="column">
          <Box marginBottom={1}>
            <Text dimColor>
              {t('task.schedule.timeDescription')}
            </Text>
          </Box>
          <TextInput
            value={time}
            onChange={setTime}
            onSubmit={handleTimeSubmit}
            placeholder={t('task.schedule.timePlaceholder')}
          />
          <Box marginTop={1}>
            <Text dimColor>
              {t('task.schedule.delayHint')}
            </Text>
          </Box>
        </Box>
      </WizardDialogLayout>
    )
  }

  return (
    <WizardDialogLayout subtitle={t('task.schedule.freqSubtitle')}>
      <Box flexDirection="column">
        <Box marginBottom={1}>
          <Text dimColor>{t('task.schedule.freqDescription')}</Text>
        </Box>
        <Select
          options={frequencyOptions}
          defaultValue={frequency}
          onChange={handleFrequencySelect}
          onCancel={goBack}
        />
      </Box>
    </WizardDialogLayout>
  )
}
