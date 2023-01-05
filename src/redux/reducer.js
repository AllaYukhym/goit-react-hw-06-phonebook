// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, changeFilter } from './actions';

// const contactsInitialState = [];

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, {
//   [changeFilter]: (state, action) => {
//     return action.payload;
//   },
// });
// -----------------------------------------------------------ниже не надо
// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case changeFilter.type: {
//       return action.payload;
//     }
//     default:
//       return state;
//   }
// };
// ----------------------------
const initialState = {
  contacts: [],
  filter: {
    letters: '',
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'filter/changeFilter':
      return {
        ...state,
        filter: {
          ...state.filter,
          letters: action.payload,
        },
      };
    default:
      return state;
  }
};
