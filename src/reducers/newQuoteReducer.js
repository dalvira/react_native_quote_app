import { ON_PRESS_NEW_QUOTE } from '../actions/newQuoteActions';
import { ON_PRESS_SAVE_QUOTE } from '../actions/newQuoteActions';
import { ON_PRESS_TOGGLE_MODAL } from '../actions/newQuoteActions';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_PRESS_TOGGLE_MODAL: {
      return {
        ...state,
        modalVisible: action.payload.modalVisible
      };
    }
    case ON_PRESS_NEW_QUOTE: {
      return {
        ...state,
        modalVisible: action.payload.modalVisible
      };
    }
    case ON_PRESS_SAVE_QUOTE: {
      return {
        ...state,
        modalVisible: action.payload.modalVisible
      };
    }
    default:
      return state;
  }
}
