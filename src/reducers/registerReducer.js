import {
  ON_CHANGE_NAME,
  ON_CHANGE_EMAIL,
  ON_CHANGE_PASSWORD,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER
} from '../actions/logInActions';

const initialState = {
  email: '',
  password: '',
  name: '',
  user: '',
  loading: '',
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_NAME: {
      return {
        ...state,
        username: action.payload.text
      };
    }
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
    case REGISTER: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        name: action.payload.name,
        loading: false,
        error: ''
      };
    }
    case REGISTER_FAIL: {
      return {
        ...state,
        error: 'Log in failed. Try again.',
        loading: false,
        password: ''
      };
    }
    default:
      return state;
  }
}
