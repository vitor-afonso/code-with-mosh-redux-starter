//jshint esversion:9

import { compose, pipe } from 'lodash/fp';
import { produce } from 'immer';

let input = '    JavaScript    ';
let output = '<div' + input.trim() + '</div';

const trim = (str) => str.trim();
/* const wrapInDiv = (str) => `<div>${str}</div>`; */
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

//const result = wrapInDiv(toLowerCase(trim(input)));

// with compose we have to put the functions in the same order as the functions in result (rigth to left)
//const transform = compose(wrapInDiv, toLowerCase, trim);

// with pipe we can/have to put the order of the functions from left to right
//we applyed curryng to "wrap" once it would need more than one parameter and we call the first
const transform = pipe(trim, toLowerCase, wrap('span'));
console.log(transform(input));

// Deep Cloning Objects

const person = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'San Francisco',
  },
};

// Deep Cloning Nested Objects

const updated = {
  ...person,
  name: 'Bob',
  address: {
    ...person.address,
    city: 'New York',
  },
};

console.log(updated);

// IMMER JS

let book = {
  title: 'Harry Potter',
};

const publish = (book) => {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true; // <= All changes happen here
  });
};

let updatedBook = publish(book);

console.log(book);
console.log(updatedBook);

/****************************       REDUX       *******************************/

// DISPATCHING ACTIONS
// SUBSCRIBING & UNSUBSCRIBING

import store from './store';
import { bookAdded, bookResolved, bookRemoved } from './actions';

/* AVAIABLE METHODS IN STORE

    - subscribe(listener)
    - dispatch(action)
    - getState()
    - replaceReducer(nextReducer)
    - Observable()
*/

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

//console.log('Initial state =>', store.getState());

store.dispatch(bookAdded('Book1'));

//unsubscribe(); //<= Because we unsubscribe here we will only see the 1st state change

store.dispatch(bookAdded('Exercise book'));

store.dispatch(bookResolved(2));

//store.dispatch(bookRemoved(1));
