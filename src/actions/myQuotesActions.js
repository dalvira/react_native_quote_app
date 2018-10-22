import firebase from 'firebase';

export const ON_PRESS_QUOTE = 'ON_PRESS_QUOTE';
export const ON_DELETE_QUOTE = 'ON_DELETE_QUOTE';
export const QUOTES_FETCH_SUCCESS = 'QUOTES_FETCH_SUCCESS';

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

export const quotesFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/quotes`)
      .on('value', snapshot => {
        dispatch({
          type: QUOTES_FETCH_SUCCESS,
          payload: { snapshot: snapshot.val() }
        });
      });
  };
};
