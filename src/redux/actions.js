import { nanoid } from 'nanoid';

export const addContact = data => {
  const { name, number } = data;
  return {
    type: 'contacts/addContact',
    playload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    playload: id,
  };
};

export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    playload: value,
  };
};
