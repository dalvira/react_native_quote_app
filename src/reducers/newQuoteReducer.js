import { ON_PRESS_SAVE_QUOTE } from '../actions/newQuoteActions';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
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
