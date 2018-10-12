//Root Reducer that combines all reducers into one
import { combineReducers } from 'redux';
import logInSignUpReducer from './logInSignUpReducer';
import registerReducer from './registerReducer';
import myQuotesReducer from './myQuotesReducer';
import newQuoteReducer from './newQuoteReducer';

export default combineReducers({
  logInSignUpReducer: logInSignUpReducer,
  registerReducer: registerReducer,
  myQuotesReducer: myQuotesReducer,
  newQuoteReducer: newQuoteReducer
});
