import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const preloadedState = {
  myQuotesReducer: {
    quoteObjArr: [
      {
        id: 0,
        text:
          'There is nothing more intoxicating than victory, and nothing more dangerous.',
        paragraph: '3',
        page: '115',
        book: 'The 48 Laws of Power',
        author: 'Robert Greene',
        publish_date: '1998',
        ISBN: '432805748205374824320'
      },
      {
        id: 1,
        text:
          'There is nothing more intoxicating than victory, and nothing more dangerous.',
        paragraph: '3',
        page: '115',
        book: 'The 48 Laws of Power',
        author: 'Robert Greene',
        publish_date: '1998',
        ISBN: '432805748205374824320'
      },
      {
        id: 2,
        text:
          'There is nothing more intoxicating than victory, and nothing more dangerous.',
        paragraph: '3',
        page: '115',
        book: 'The 48 Laws of Power',
        author: 'Robert Greene',
        publish_date: '1998',
        ISBN: '432805748205374824320'
      }
    ]
  },
  newQuoteReducer: {}
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  preloadedState,
  compose()
  // applyMiddleware(...middleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
