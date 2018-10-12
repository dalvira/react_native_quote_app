import {
  ON_CHANGE_EMAIL,
  ON_CHANGE_USERNAME,
  ON_CHANGE_PASSWORD,
  ON_PRESS_REGISTER
} from '../actions/logInSignUpActions';

const initialState = { email: '', username: '', password: '' };

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.payload.text
      };
    }
    case ON_CHANGE_USERNAME: {
      return {
        ...state,
        username: action.payload.text
      };
    }
    case ON_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload.text
      };
    }
    case ON_PRESS_REGISTER: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
