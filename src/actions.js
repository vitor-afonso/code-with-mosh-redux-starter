//jshint esversion:9

import * as actions from './actionsTypes';

export const bookAdded = (description) => ({
  type: actions.BOOK_ADDED,
  payload: {
    description: description,
  },
});

export const bookRemoved = (bookId) => ({
  type: actions.BOOK_REMOVED,
  payload: {
    id: bookId,
  },
});

export const bookResolved = (bookId) => ({
  type: actions.BOOK_RESOLVED,
  payload: {
    id: bookId,
  },
});
