import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterInitialState = {
  letters: '',
};

export const filterReducer = createReducer(filterInitialState, {
  [changeFilter]: (state, action) => {
    return { ...state, letters: action.payload };
  },
});
