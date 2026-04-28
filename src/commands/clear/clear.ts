import type { LocalCommandCall } from '../../types/command.js'
import { clearConversation } from './conversation.js'
import { formatConversationCost } from '../../cost-tracker.js'
import { hasConsoleBillingAccess } from '../../utils/billing.js'
import { getGlobalConfig } from '../../utils/config.js'

export const call: LocalCommandCall = async (_, context) => {
  // 在清空前捕获对话费用摘要，清空后数据不可恢复
  const costMsg =
    hasConsoleBillingAccess() && getGlobalConfig().verbose
      ? '\n' + formatConversationCost() + '\n'
      : ''
  await clearConversation(context)
  return { type: 'text', value: costMsg }
}
