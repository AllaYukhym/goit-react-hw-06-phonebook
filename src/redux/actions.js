// import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/addContact', data => {
//   const { name, number } = data;
//   return {
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// });

// export const deleteContact = createAction('contacts/deleteContact');

// export const changeFilter = createAction('filter/changeFilter');
import { nanoid } from 'nanoid';

export const addContact = data => {
  const { name, number } = data;
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};
