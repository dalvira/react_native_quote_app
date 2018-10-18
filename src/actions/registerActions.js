import firebase from 'firebase';

export const ON_CHANGE_EMAIL = 'ON_CHANGE_EMAIL';
export const ON_CHANGE_PASSWORD = 'ON_CHANGE_PASSWORD';
export const ON_CHANGE_NAME = 'ON_CHANGE_NAME';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER = 'REGISTER';

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

export function onChangeName(text) {
  return {
    type: ON_CHANGE_NAME,
    payload: { text: text }
  };
}

export function onPressRegister(email, password, name, navigation) {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        registerSuccess(dispatch, user, name);
        navigation.navigate('ModalStackNavigator');
      })
      .catch(() => registerFail(dispatch));
  };
}

const registerSuccess = (dispatch, user, name) => {
  dispatch({
    type: REGISTER_SUCCESS,
    payload: { user: user, name: name }
  });
};

const registerFail = dispatch => {
  dispatch({
    type: REGISTER_FAIL,
    payload: {}
  });
};
