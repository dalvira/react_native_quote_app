import {
  ON_CHANGE_EMAIL,
  ON_CHANGE_PASSWORD,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOG_IN
} from '../actions/logInActions';

const initialState = {
  email: '',
  password: '',
  user: '',
  loading: '',
  error: ''
};

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
    case LOG_IN: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: 'Success',
        password: '',
        email: ''
      };
    }
    case LOG_IN_FAIL: {
      return {
        ...state,
        error: 'Invalid Email/Password',
        loading: false,
        password: '',
        email: ''
      };
    }
    default:
      return state;
  }
}
