//Root Reducer that combines all reducers into one
import { combineReducers } from 'redux';
import myQuotesReducer from './myQuotesReducer';

export default combineReducers({
  myQuotesReducer: myQuotesReducer
});
