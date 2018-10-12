export const ON_CHANGE_EMAIL = 'ON_CHANGE_EMAIL';
export const ON_CHANGE_PASSWORD = 'ON_CHANGE_PASSWORD';
export const ON_PRESS_LOG_IN = 'ON_PRESS_LOG_IN';
export const ON_PRESS_SIGN_UP = 'ON_PRESS_SIGN_UP';

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

export function onPressLogIn() {
  return {
    type: ON_PRESS_LOG_IN,
    payload: {}
  };
}

export function onPressSignUp() {
  return {
    type: ON_PRESS_SIGN_UP,
    payload: {}
  };
}
