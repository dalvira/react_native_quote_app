export const ON_PRESS_QUOTE = 'ON_PRESS_QUOTE';
export const ON_DELETE_QUOTE = 'ON_DELETE_QUOTE';

export function onPressQuote(id) {
  return {
    type: ON_PRESS_QUOTE,
    payload: { id: id }
  };
}

export function onDeleteQuote(id) {
  return {
    type: ON_DELETE_QUOTE,
    payload: { id: id }
  };
}
