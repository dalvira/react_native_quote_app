export const ON_CHANGE_EMAIL = 'ON_CHANGE_EMAIL';
export const ON_CHANGE_PASSWORD = 'ON_CHANGE_PASSWORD';

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
