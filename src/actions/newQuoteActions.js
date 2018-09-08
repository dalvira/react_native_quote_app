export const ON_PRESS_SAVE_QUOTE = 'ON_PRESS_SAVE_QUOTE';

export function onPressSaveQuote(visible) {
  return {
    type: ON_PRESS_SAVE_QUOTE,
    payload: { modalVisible: visible }
  };
}
