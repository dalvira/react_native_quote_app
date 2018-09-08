//Root Reducer that combines all reducers into one
import { combineReducers } from 'redux';
import myQuotesReducer from './myQuotesReducer';
import newQuoteReducer from './newQuoteReducer';

export default combineReducers({
  myQuotesReducer: myQuotesReducer,
  newQuoteReducer: newQuoteReducer
});
