// import { configureStore } from '@reduxjs/toolkit';
// // import { contactsReducer, filterReducer } from './reducer';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

const initialState = {
  contacts: [],
  filter: {
    letters: '',
  },
};

// const rootReducer = (state = initialState, action) => {
//   return state;
// };
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
