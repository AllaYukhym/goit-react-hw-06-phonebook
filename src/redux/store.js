import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer, filterreducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
