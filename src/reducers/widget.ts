import * as Actions from '../actions/constants';
import { handleActions } from 'redux-actions';

const initialStore: WidgetStore = {
  load: false,
  success: false,
  Widget : {
    direction: '',
    duration: '',
    type: '',
    isProminent: false,
    message: 'reducer message hard coded'
  }
};

export default handleActions<WidgetStore, Widget> ({
  [Actions.PERFORM_WIDGET_ACTION]: (state, action) => {

    return {
      ...state,
      success: true,
      load: false,
      Widget: action.payload  ? action.payload : initialStore.Widget
    };
  }
},
initialStore);