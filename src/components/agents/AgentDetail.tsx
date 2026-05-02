import { c as _c } from "react/compiler-runtime";
import figures from 'figures';
import * as React from 'react';
import type { KeyboardEvent } from '../../ink/events/keyboard-event.js';
import { Box, Text } from '../../ink.js';
import { useKeybinding } from '../../keybindings/useKeybinding.js';
import type { Tools } from '../../Tool.js';
import { getAgentColor } from '../../tools/AgentTool/agentColorManager.js';
import { getMemoryScopeDisplay } from '../../tools/AgentTool/agentMemory.js';
import { resolveAgentTools } from '../../tools/AgentTool/agentToolUtils.js';
import { type AgentDefinition, isBuiltInAgent } from '../../tools/AgentTool/loadAgentsDir.js';
import { getAgentModelDisplay } from '../../utils/model/agent.js';
import { useTranslation } from '../../i18n/index.js';
import { Markdown } from '../Markdown.js';
import { getActualRelativeAgentFilePath } from './agentFileUtils.js';
type Props = {
  agent: AgentDefinition;
  tools: Tools;
  allAgents?: AgentDefinition[];
  onBack: () => void;
};
export function AgentDetail(t0) {
  const $ = _c(57);
  const { t } = useTranslation();
  const {
    agent,
    tools,
    onBack
  } = t0;
  const resolvedTools = resolveAgentTools(agent, tools, false);
  let t1;
  if ($[0] !== agent) {
    t1 = getActualRelativeAgentFilePath(agent);
    $[0] = agent;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const filePath = t1;
  let t2;
  if ($[2] !== agent.agentType) {
    t2 = getAgentColor(agent.agentType);
    $[2] = agent.agentType;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const backgroundColor = t2;
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      context: "Confirmation"
    };
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  useKeybinding("confirm:no", onBack, t3);
  let t4;
  if ($[5] !== onBack) {
    t4 = e => {
      if (e.key === "return") {
        e.preventDefault();
        onBack();
      }
    };
    $[5] = onBack;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const handleKeyDown = t4;
  const renderToolsList = function renderToolsList() {
    if (resolvedTools.hasWildcard) {
      return <Text>{t('agent.wizard.allTools')}</Text>;
    }
    if (!agent.tools || agent.tools.length === 0) {
      return <Text>{t('agent.wizard.none')}</Text>;
    }
    return <>{resolvedTools.validTools.length > 0 && <Text>{resolvedTools.validTools.join(", ")}</Text>}{resolvedTools.invalidTools.length > 0 && <Text color="warning">{figures.warning} {t('agent.detail.unrecognized')}{" "}{resolvedTools.invalidTools.join(", ")}</Text>}</>;
  };
  const T0 = Box;
  const t5 = "column";
  const t6 = 1;
  const t7 = 0;
  const t8 = true;
  let t9;
  if ($[7] !== filePath) {
    t9 = <Text dimColor={true}>{filePath}</Text>;
    $[7] = filePath;
    $[8] = t9;
  } else {
    t9 = $[8];
  }
  let t10;
  if ($[9] !== t) {
    t10 = <Text><Text bold={true}>{t('agent.detail.description')}</Text> ({t('agent.wizard.descriptionSuffix')}):</Text>;
    $[9] = t;
    $[10] = t10;
  } else {
    t10 = $[10];
  }
  let t11;
  if ($[11] !== agent.whenToUse) {
    t11 = <Box flexDirection="column">{t10}<Box marginLeft={2}><Text>{agent.whenToUse}</Text></Box></Box>;
    $[11] = agent.whenToUse;
    $[12] = t11;
  } else {
    t11 = $[12];
  }
  const T1 = Box;
  let t12;
  if ($[13] !== t) {
    t12 = <Text><Text bold={true}>{t('agent.detail.tools')}</Text>:{" "}</Text>;
    $[13] = t;
    $[14] = t12;
  } else {
    t12 = $[14];
  }
  const t13 = renderToolsList();
  let t14;
  if ($[15] !== T1 || $[16] !== t12 || $[17] !== t13) {
    t14 = <T1>{t12}{t13}</T1>;
    $[15] = T1;
    $[16] = t12;
    $[17] = t13;
    $[18] = t14;
  } else {
    t14 = $[18];
  }
  let t15;
  if ($[19] !== t) {
    t15 = <Text bold={true}>{t('agent.detail.model')}</Text>;
    $[19] = t;
    $[20] = t15;
  } else {
    t15 = $[20];
  }
  let t16;
  if ($[21] !== agent.model) {
    t16 = getAgentModelDisplay(agent.model);
    $[21] = agent.model;
    $[22] = t16;
  } else {
    t16 = $[22];
  }
  let t17;
  if ($[23] !== t16) {
    t17 = <Text>{t15}: {t16}</Text>;
    $[23] = t16;
    $[24] = t17;
  } else {
    t17 = $[24];
  }
  let t18;
  if ($[25] !== agent.permissionMode || $[26] !== t) {
    t18 = agent.permissionMode && <Text><Text bold={true}>{t('agent.detail.permissionMode')}</Text>: {agent.permissionMode}</Text>;
    $[25] = agent.permissionMode;
    $[26] = t;
    $[27] = t18;
  } else {
    t18 = $[27];
  }
  let t19;
  if ($[28] !== agent.memory || $[29] !== t) {
    t19 = agent.memory && <Text><Text bold={true}>{t('agent.detail.memory')}</Text>: {getMemoryScopeDisplay(agent.memory)}</Text>;
    $[28] = agent.memory;
    $[29] = t;
    $[30] = t19;
  } else {
    t19 = $[30];
  }
  let t20;
  if ($[31] !== agent.hooks || $[32] !== t) {
    t20 = agent.hooks && Object.keys(agent.hooks).length > 0 && <Text><Text bold={true}>{t('agent.detail.hooks')}</Text>: {Object.keys(agent.hooks).join(", ")}</Text>;
    $[31] = agent.hooks;
    $[32] = t;
    $[33] = t20;
  } else {
    t20 = $[33];
  }
  let t21;
  if ($[34] !== agent.skills || $[35] !== t) {
    t21 = agent.skills && agent.skills.length > 0 && <Text><Text bold={true}>{t('agent.detail.skills')}</Text>:{" "}{agent.skills.length > 10 ? t('agent.detail.skillsCount', { count: agent.skills.length }) : agent.skills.join(", ")}</Text>;
    $[34] = agent.skills;
    $[35] = t;
    $[36] = t21;
  } else {
    t21 = $[36];
  }
  let t22;
  if ($[37] !== agent.agentType || $[38] !== backgroundColor || $[39] !== t) {
    t22 = backgroundColor && <Box><Text><Text bold={true}>{t('agent.detail.color')}</Text>:{" "}<Text backgroundColor={backgroundColor} color="inverseText">{" "}{agent.agentType}{" "}</Text></Text></Box>;
    $[37] = agent.agentType;
    $[38] = backgroundColor;
    $[39] = t;
    $[40] = t22;
  } else {
    t22 = $[40];
  }
  let t23;
  if ($[41] !== agent || $[42] !== t) {
    t23 = !isBuiltInAgent(agent) && <><Box><Text><Text bold={true}>{t('agent.detail.systemPrompt')}</Text>:</Text></Box><Box marginLeft={2} marginRight={2}><Markdown>{agent.getSystemPrompt()}</Markdown></Box></>;
    $[41] = agent;
    $[42] = t;
    $[43] = t23;
  } else {
    t23 = $[43];
  }
  let t24;
  if ($[44] !== T0 || $[45] !== handleKeyDown || $[46] !== t11 || $[47] !== t14 || $[48] !== t17 || $[49] !== t18 || $[50] !== t19 || $[51] !== t20 || $[52] !== t21 || $[53] !== t22 || $[54] !== t23 || $[55] !== t9) {
    t24 = <T0 flexDirection={t5} gap={t6} tabIndex={t7} autoFocus={t8} onKeyDown={handleKeyDown}>{t9}{t11}{t14}{t17}{t18}{t19}{t20}{t21}{t22}{t23}</T0>;
    $[44] = T0;
    $[45] = handleKeyDown;
    $[46] = t11;
    $[47] = t14;
    $[48] = t17;
    $[49] = t18;
    $[50] = t19;
    $[51] = t20;
    $[52] = t21;
    $[53] = t22;
    $[54] = t23;
    $[55] = t9;
    $[56] = t24;
  } else {
    t24 = $[56];
  }
  return t24;
}
