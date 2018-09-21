export const ON_PRESS_TOGGLE_MODAL = 'ON_PRESS_SAVE_QUOTE';
export const ON_PRESS_NEW_QUOTE = 'ON_PRESS_NEW_QUOTE';
export const ON_PRESS_SAVE_QUOTE = 'ON_PRESS_SAVE_QUOTE';

export function onPressToggleModal(visible) {
  return {
    type: ON_PRESS_TOGGLE_MODAL,
    payload: { modalVisible: visible }
  };
}

export function onPressNewQuote(visible) {
  return {
    type: ON_PRESS_NEW_QUOTE,
    payload: { modalVisible: visible }
  };
}

export function onPressSaveQuote(visible) {
  return {
    type: ON_PRESS_SAVE_QUOTE,
    payload: { modalVisible: visible }
  };
}
