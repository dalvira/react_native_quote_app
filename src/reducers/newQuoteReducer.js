import {
  ON_CHANGE_QUOTE,
  ON_CHANGE_PARA,
  ON_CHANGE_PAGE,
  ON_CHANGE_TITLE,
  ON_CHANGE_AUTHOR,
  ON_CHANGE_NOTE,
  SAVE_QUOTE,
  SAVE_QUOTE_SUCCESS,
  SAVE_QUOTE_FAIL
} from '../actions/newQuoteActions';

const initialState = {
  quoteNew: '',
  paraNew: '',
  pageNew: '',
  titleNew: '',
  authorNew: '',
  noteNew: '',
  loadingSave: '',
  errorSave: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_QUOTE: {
      return {
        ...state,
        quoteNew: action.payload.text
      };
    }
    case ON_CHANGE_PARA: {
      return {
        ...state,
        paraNew: action.payload.text
      };
    }
    case ON_CHANGE_PAGE: {
      return {
        ...state,
        pageNew: action.payload.text
      };
    }
    case ON_CHANGE_TITLE: {
      return {
        ...state,
        titleNew: action.payload.text
      };
    }
    case ON_CHANGE_AUTHOR: {
      return {
        ...state,
        authorNew: action.payload.text
      };
    }
    case ON_CHANGE_NOTE: {
      return {
        ...state,
        noteNew: action.payload.text
      };
    }
    case SAVE_QUOTE: {
      return {
        ...state,
        loadingSave: true,
        errorSave: ''
      };
    }
    case SAVE_QUOTE_SUCCESS: {
      return {
        ...state,
        quoteNew: '',
        paraNew: '',
        pageNew: '',
        titleNew: '',
        authorNew: '',
        noteNew: '',
        loadingSave: false,
        errorSave: ''
      };
    }
    case SAVE_QUOTE_FAIL: {
      return {
        ...state,
        loadingSave: false,
        errorSave: 'Failed to save quote. Try again.'
      };
    }
    default:
      return state;
  }
}
