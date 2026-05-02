import React, { type ReactNode, useMemo } from 'react'
import { Box, Text } from '../../../ink.js'
import { Select } from '../../CustomSelect/select.js'
import { WizardDialogLayout } from '../../wizard/index.js'
import { useWizard } from '../../wizard/useWizard.js'
import { t } from '../../../i18n/index.js'
import type { ScheduledTaskWizardData } from '../types.js'

export function PermissionStep(): ReactNode {
  const { goNext, goBack, updateWizardData, wizardData } =
    useWizard<ScheduledTaskWizardData>()

  const permissionOptions = useMemo(
    () => [
      {
        label: t('task.perm.option.ask'),
        value: 'ask',
        description: t('task.perm.option.askDesc'),
      },
      {
        label: t('task.perm.option.autoAccept'),
        value: 'auto-accept',
        description: t('task.perm.option.autoAcceptDesc'),
      },
      {
        label: t('task.perm.option.plan'),
        value: 'plan',
        description: t('task.perm.option.planDesc'),
      },
      {
        label: t('task.perm.option.bypass'),
        value: 'bypass',
        description: t('task.perm.option.bypassDesc'),
      },
    ],
    [],
  )

  return (
    <WizardDialogLayout subtitle={t('task.perm.subtitle')}>
      <Box flexDirection="column">
        <Box marginBottom={1}>
          <Text dimColor>
            {t('task.perm.description')}
          </Text>
        </Box>
        <Select
          options={permissionOptions}
          defaultValue={wizardData.permissionMode ?? 'ask'}
          onChange={(value) => {
            updateWizardData({ permissionMode: value })
            goNext()
          }}
          onCancel={goBack}
        />
      </Box>
    </WizardDialogLayout>
  )
}
