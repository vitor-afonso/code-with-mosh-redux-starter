//jshint esversion:9
import * as actions from './actionsTypes';

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BOOK_ADDED:
      return [
        ...state, //<= here we will be using IMMER
        {
          id: ++lastId, //<= hardcoded, not from payload
          description: action.payload.description, //<= description is the minimal data needed for updating the store
          resolved: false, //<= hardcoded, not from payload
        },
      ];
    case actions.BOOK_RESOLVED:
      return state.map((book) => (book.id === action.payload.id ? { ...book, resolved: true } : book));

    case actions.BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
