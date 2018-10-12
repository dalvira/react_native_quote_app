export const ON_CHANGE_QUOTE = 'ON_CHANGE_QUOTE';
export const ON_CHANGE_PAGE = 'ON_CHANGE_PAGE';
export const ON_CHANGE_PARA = 'ON_CHANGE_PARA';
export const ON_CHANGE_TITLE = 'ON_CHANGE_TITLE';
export const ON_CHANGE_AUTHOR = 'ON_CHANGE_AUTHOR';
export const ON_CHANGE_NOTE = 'ON_CHANGE_NOTE';
export const FETCH_BOOK = 'FETCH_BOOK';
export const ON_PRESS_SAVE_QUOTE = 'ON_PRESS_SAVE_QUOTE';

export function onChangeQuote(text) {
  return {
    type: ON_CHANGE_QUOTE,
    payload: { text: text }
  };
}

export function onChangePage(text) {
  return {
    type: ON_CHANGE_PAGE,
    payload: { text: text }
  };
}

export function onChangePara(text) {
  return {
    type: ON_CHANGE_PARA,
    payload: { text: text }
  };
}

export function onChangeTitle(text) {
  return {
    type: ON_CHANGE_TITLE,
    payload: { text: text }
  };
}

export function onChangeAuthor(text) {
  return {
    type: ON_CHANGE_AUTHOR,
    payload: { text: text }
  };
}

export function onChangeNote(text) {
  return {
    type: ON_CHANGE_NOTE,
    payload: { text: text }
  };
}

export function fetchBook(text) {
  return {
    type: FETCH_BOOK,
    payload: { text: text }
  };
}

export function onPressSaveQuote() {
  return {
    type: ON_PRESS_SAVE_QUOTE,
    payload: {}
  };
}
