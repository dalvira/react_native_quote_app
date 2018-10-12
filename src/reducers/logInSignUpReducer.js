import {
  ON_CHANGE_EMAIL,
  ON_CHANGE_PASSWORD,
  ON_PRESS_LOG_IN,
  ON_PRESS_SIGN_UP
} from '../actions/logInSignUpActions';

const initialState = { email: '', password: '' };

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.payload.text
      };
    }
    case ON_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload.text
      };
    }
    case ON_PRESS_LOG_IN: {
      return {
        ...state
      };
    }
    case ON_PRESS_SIGN_UP: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
