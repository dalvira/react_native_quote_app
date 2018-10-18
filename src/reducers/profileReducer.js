import {
  ON_PRESS_EDIT_PROFILE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL
} from '../actions/profileActions';

const initialState = {
  email: '',
  password: '',
  user: '',
  loading: '',
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_OUT_SUCCESS: {
      return {
        ...state,
        initialState
      };
    }
    case SIGN_OUT_FAIL: {
      return {
        ...state,
        error: 'Sign Out Faile',
        loading: false,
        password: '',
        email: ''
      };
    }
    default:
      return state;
  }
}
