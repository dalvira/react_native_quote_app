//Root Reducer that combines all reducers into one
import { combineReducers } from 'redux';
import logInReducer from './logInReducer';
import registerReducer from './registerReducer';
import myQuotesReducer from './myQuotesReducer';
import newQuoteReducer from './newQuoteReducer';

export default combineReducers({
  logInReducer: logInReducer,
  registerReducer: registerReducer,
  myQuotesReducer: myQuotesReducer,
  newQuoteReducer: newQuoteReducer
});
