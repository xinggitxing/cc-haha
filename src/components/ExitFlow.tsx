import { c as _c } from "react/compiler-runtime";
import sample from 'lodash-es/sample.js';
import React from 'react';
import { gracefulShutdown } from '../utils/gracefulShutdown.js';
import { WorktreeExitDialog } from './WorktreeExitDialog.js';
import { t } from '../i18n/index.js';
const GOODBYE_MESSAGES = [t('ui.exitFlow.goodbye1'), t('ui.exitFlow.goodbye2'), t('ui.exitFlow.goodbye3'), t('ui.exitFlow.goodbye4')];
function getRandomGoodbyeMessage(): string {
  return sample(GOODBYE_MESSAGES) ?? t('ui.exitFlow.goodbye1');
}
type Props = {
  onDone: (message?: string) => void;
  onCancel?: () => void;
  showWorktree: boolean;
};
export function ExitFlow(t0) {
  const $ = _c(5);
  const {
    showWorktree,
    onDone,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== onDone) {
    t1 = async function onExit(resultMessage) {
      const message = resultMessage ?? getRandomGoodbyeMessage();
      onDone(message);
      await new Promise(resolve => setTimeout(resolve, 0));
      await gracefulShutdown(0, "prompt_input_exit");
    };
    $[0] = onDone;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const onExit = t1;
  if (showWorktree) {
    let t2;
    if ($[2] !== onCancel || $[3] !== onExit) {
      t2 = <WorktreeExitDialog onDone={onExit} onCancel={onCancel} />;
      $[2] = onCancel;
      $[3] = onExit;
      $[4] = t2;
    } else {
      t2 = $[4];
    }
    return t2;
  }
  return null;
}
