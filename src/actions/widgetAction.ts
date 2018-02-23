import * as Actions from './constants';
import { createAction } from 'redux-actions';


export function widgetAction(widget: Widget) {
  return function(dispatch: Function) {
    dispatch(performWidgetAction(widget));
  };
}


export const performWidgetAction = createAction<Widget>(Actions.PERFORM_WIDGET_ACTION);