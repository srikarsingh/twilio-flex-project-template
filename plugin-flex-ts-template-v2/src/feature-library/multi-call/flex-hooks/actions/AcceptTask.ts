import * as Flex from '@twilio/flex-ui';

import { holdOtherCalls } from '../../helpers/MultiCallHelper';
import { FlexActionEvent, FlexAction } from '../../../../types/feature-loader';

export const actionEvent = FlexActionEvent.before;
export const actionName = FlexAction.AcceptTask;
export const actionHook = function holdOtherCallsOnAcceptTask(flex: typeof Flex) {
  flex.Actions.addListener(`${actionEvent}${actionName}`, async () => {
    holdOtherCalls();
  });
};
