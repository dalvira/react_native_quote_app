import firebase from 'firebase';

export const ON_CHANGE_QUOTE = 'ON_CHANGE_QUOTE';
export const ON_CHANGE_PAGE = 'ON_CHANGE_PAGE';
export const ON_CHANGE_PARA = 'ON_CHANGE_PARA';
export const ON_CHANGE_TITLE = 'ON_CHANGE_TITLE';
export const ON_CHANGE_AUTHOR = 'ON_CHANGE_AUTHOR';
export const ON_CHANGE_NOTE = 'ON_CHANGE_NOTE';
export const SAVE_QUOTE = 'SAVE_QUOTE';
export const SAVE_QUOTE_SUCCESS = 'SAVE_QUOTE_SUCCESS';
export const SAVE_QUOTE_FAIL = 'SAVE_QUOTE_FAIL';

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

export function onPressSaveQuote(
  navigation,
  quote,
  para,
  page,
  title,
  author,
  note
) {
  return dispatch => {
    dispatch({ type: SAVE_QUOTE });
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/quotes`)
      .push({ quote, para, page, title, author, note });
    saveQuoteSuccess(dispatch);
  };
}

const saveQuoteSuccess = dispatch => {
  dispatch({
    type: SAVE_QUOTE_SUCCESS,
    payload: {}
  });
};

const saveQuoteFail = dispatch => {
  dispatch({
    type: SAVE_QUOTE_FAIL,
    payload: {}
  });
};
