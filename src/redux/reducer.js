const initialState = {
  contacts: [],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  console.log('state: ', state);
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.playload],
      };
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.playload
        ),
      };
    }
    case 'filter/changeFilter': {
      return {
        ...state,
        filter: action.playload,
      };
    }
    default:
      return state;
  }
};
