import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', data => {
  const { name, number } = data;
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
export const deleteContact = createAction('contacts/deleteContact');
export const changeFilter = createAction('filter/changeFilter');
