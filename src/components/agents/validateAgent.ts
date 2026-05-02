import type { Tools } from '../../Tool.js'
import { resolveAgentTools } from '../../tools/AgentTool/agentToolUtils.js'
import type {
  AgentDefinition,
  CustomAgentDefinition,
} from '../../tools/AgentTool/loadAgentsDir.js'
import { getAgentSourceDisplayName } from './utils.js'
import { t } from '../../i18n/index.js'

export type AgentValidationResult = {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

export function validateAgentType(agentType: string): string | null {
  if (!agentType) {
    return t('agent.validation.typeRequired')
  }

  if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/.test(agentType)) {
    return t('agent.validation.typePattern')
  }

  if (agentType.length < 3) {
    return t('agent.validation.typeMinLength')
  }

  if (agentType.length > 50) {
    return t('agent.validation.typeMaxLength')
  }

  return null
}

export function validateAgent(
  agent: Omit<CustomAgentDefinition, 'location'>,
  availableTools: Tools,
  existingAgents: AgentDefinition[],
): AgentValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Validate agent type
  if (!agent.agentType) {
    errors.push(t('agent.validation.typeRequired'))
  } else {
    const typeError = validateAgentType(agent.agentType)
    if (typeError) {
      errors.push(typeError)
    }

    // Check for duplicates (excluding self for editing)
    const duplicate = existingAgents.find(
      a => a.agentType === agent.agentType && a.source !== agent.source,
    )
    if (duplicate) {
      errors.push(
        t('agent.validation.typeDuplicate', { agentType: agent.agentType, source: getAgentSourceDisplayName(duplicate.source) }),
      )
    }
  }

  // Validate description
  if (!agent.whenToUse) {
    errors.push(t('agent.validation.descriptionRequired'))
  } else if (agent.whenToUse.length < 10) {
    warnings.push(
      t('agent.validation.descriptionMinLength'),
    )
  } else if (agent.whenToUse.length > 5000) {
    warnings.push(t('agent.validation.descriptionMaxLength'))
  }

  // Validate tools
  if (agent.tools !== undefined && !Array.isArray(agent.tools)) {
    errors.push(t('agent.validation.toolsMustBeArray'))
  } else {
    if (agent.tools === undefined) {
      warnings.push(t('agent.validation.allTools'))
    } else if (agent.tools.length === 0) {
      warnings.push(
        t('agent.validation.noTools'),
      )
    }

    // Check for invalid tools
    const resolvedTools = resolveAgentTools(agent, availableTools, false)

    if (resolvedTools.invalidTools.length > 0) {
      errors.push(t('agent.validation.invalidTools', { tools: resolvedTools.invalidTools.join(', ') }))
    }
  }

  // Validate system prompt
  const systemPrompt = agent.getSystemPrompt()
  if (!systemPrompt) {
    errors.push(t('agent.validation.systemPromptRequired'))
  } else if (systemPrompt.length < 20) {
    errors.push(t('agent.validation.systemPromptMinLength'))
  } else if (systemPrompt.length > 10000) {
    warnings.push(t('agent.validation.systemPromptMaxLength'))
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}
