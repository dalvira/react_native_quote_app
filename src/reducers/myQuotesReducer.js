import {
  QUOTES_FETCH_SUCCESS,
  QUOTES_FETCH_FAIL,
  ON_PRESS_QUOTE,
  ON_DELETE_QUOTE
} from '../actions/myQuotesActions';

const initialState = {
  quotes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case QUOTES_FETCH_SUCCESS: {
      return { quotes: action.payload.snapshot };
    }
    default:
      return state;
  }
}
