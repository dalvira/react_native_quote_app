import firebase from 'firebase';

export const ON_CHANGE_EMAIL = 'ON_CHANGE_EMAIL';
export const ON_CHANGE_PASSWORD = 'ON_CHANGE_PASSWORD';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';
export const LOG_IN = 'LOG_IN';

export function onChangeEmail(text) {
  return {
    type: ON_CHANGE_EMAIL,
    payload: { text: text }
  };
}

export function onChangePassword(text) {
  return {
    type: ON_CHANGE_PASSWORD,
    payload: { text: text }
  };
}

export function onPressLogIn(email, password) {
  return dispatch => {
    dispatch({ type: LOG_IN });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        logInSuccess(dispatch, user);
      })
      .catch(() => logInFail(dispatch));
  };
}

const logInSuccess = (dispatch, user) => {
  dispatch({
    type: LOG_IN_SUCCESS,
    payload: { user: user }
  });
};

const logInFail = dispatch => {
  dispatch({
    type: LOG_IN_FAIL,
    payload: {}
  });
};
