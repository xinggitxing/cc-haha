import React, { type ReactNode } from 'react'
import { t } from '../../../i18n/index.js'
import { WizardDialogLayout } from '../../wizard/index.js'
import { useWizard } from '../../wizard/useWizard.js'
import { ModelSelector } from '../../agents/ModelSelector.js'
import type { ScheduledTaskWizardData } from '../types.js'

export function TaskModelStep(): ReactNode {
  const { goNext, goBack, updateWizardData, wizardData } =
    useWizard<ScheduledTaskWizardData>()

  return (
    <WizardDialogLayout subtitle={t('task.model.subtitle')}>
      <ModelSelector
        initialModel={wizardData.model}
        onComplete={(model) => {
          updateWizardData({ model })
          goNext()
        }}
        onCancel={goBack}
      />
    </WizardDialogLayout>
  )
}
