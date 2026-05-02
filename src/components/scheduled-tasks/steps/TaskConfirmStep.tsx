import React, { type ReactNode } from 'react'
import { Box, Text } from '../../../ink.js'
import { t } from '../../../i18n/index.js'
import { useKeybinding } from '../../../hooks/useKeybinding.js'
import { cronToHuman } from '../../../utils/cron.js'
import { WizardDialogLayout } from '../../wizard/index.js'
import { useWizard } from '../../wizard/useWizard.js'
import type { ScheduledTaskWizardData } from '../types.js'

export function TaskConfirmStep(): ReactNode {
  const { goNext, goBack, wizardData } =
    useWizard<ScheduledTaskWizardData>()

  useKeybinding('confirm:no', goBack, { context: 'Settings' })

  const schedule = wizardData.cron
    ? cronToHuman(wizardData.cron)
    : wizardData.frequency === 'manual'
      ? t('task.confirm.manualOnDemand')
      : t('task.confirm.notSet')

  return (
    <WizardDialogLayout subtitle={t('task.confirm.subtitle')}>
      <Box flexDirection="column" gap={1}>
        <Box>
          <Text bold>{t('task.confirm.label.name')}</Text>
          <Text>{wizardData.name ?? t('task.confirm.dash')}</Text>
        </Box>
        <Box>
          <Text bold>{t('task.confirm.label.desc')}</Text>
          <Text>{wizardData.description ?? t('task.confirm.dash')}</Text>
        </Box>
        <Box>
          <Text bold>{t('task.confirm.label.prompt')}</Text>
          <Text>
            {wizardData.prompt
              ? wizardData.prompt.length > 60
                ? wizardData.prompt.slice(0, 57) + '...'
                : wizardData.prompt
              : t('task.confirm.dash')}
          </Text>
        </Box>
        <Box>
          <Text bold>{t('task.confirm.label.model')}</Text>
          <Text>{wizardData.model ?? t('task.confirm.default.model')}</Text>
        </Box>
        <Box>
          <Text bold>{t('task.confirm.label.permissions')}</Text>
          <Text>{wizardData.permissionMode ?? t('task.confirm.default.ask')}</Text>
        </Box>
        <Box>
          <Text bold>{t('task.confirm.label.folder')}</Text>
          <Text>{wizardData.folder ?? t('task.confirm.default.currentProject')}</Text>
        </Box>
        <Box>
          <Text bold>{t('task.confirm.label.worktree')}</Text>
          <Text>{wizardData.worktree ? t('task.confirm.default.yes') : t('task.confirm.default.no')}</Text>
        </Box>
        <Box>
          <Text bold>{t('task.confirm.label.schedule')}</Text>
          <Text>{schedule}</Text>
        </Box>

        <Box marginTop={1}>
          <Text dimColor>{t('task.confirm.actionHint')}</Text>
        </Box>
      </Box>
    </WizardDialogLayout>
  )
}
