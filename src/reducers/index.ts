import { combineReducers } from 'redux';
import widget from './widget';

export interface RootState {
  widget: Widget;
}

export default combineReducers<RootState>({
  widget
});