import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts';
import { filtersReducer } from './filters';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
