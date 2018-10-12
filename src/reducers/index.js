//Root Reducer that combines all reducers into one
import { combineReducers } from 'redux';
import myQuotesReducer from './myQuotesReducer';
import newQuoteReducer from './newQuoteReducer';
import logInSignUpReducer from './logInSignUpReducer';

export default combineReducers({
  logInSignUpReducer: logInSignUpReducer,
  myQuotesReducer: myQuotesReducer,
  newQuoteReducer: newQuoteReducer
});
