import axios from 'axios';

import fetchBook from './actions/newQuoteActions';

const apiURL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const fetchAllBooks = () => {
  return dispatch => {
    return axios
      .get(apiURL)
      .then(response => {
        dispatch(fetchBook(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
