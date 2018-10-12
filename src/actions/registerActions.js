export const ON_CHANGE_EMAIL = 'ON_CHANGE_EMAIL';
export const ON_CHANGE_USERNAME = 'ON_CHANGE_EMAIL';
export const ON_CHANGE_PASSWORD = 'ON_CHANGE_PASSWORD';
export const ON_PRESS_REGISTER = 'ON_PRESS_REGISTER';

export function onChangeEmail(text) {
  return {
    type: ON_CHANGE_EMAIL,
    payload: { text: text }
  };
}

export function onChangeUsername(text) {
  return {
    type: ON_CHANGE_USERNAME,
    payload: { text: text }
  };
}

export function onChangePassword(text) {
  return {
    type: ON_CHANGE_PASSWORD,
    payload: { text: text }
  };
}

export function onPressRegister() {
  return {
    type: ON_PRESS_REGISTER,
    payload: {}
  };
}
