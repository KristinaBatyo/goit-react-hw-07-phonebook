import { createSlice } from '@reduxjs/toolkit';

const contacts = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setStatusContacts(state, action) {
      state.push(action.payload);
    },
    setDeleteContacts(state, action) {
      return state.filter((arr, idx) => idx !== action.payload);
    },
  },
});

export const { setStatusContacts, setDeleteContacts } = contacts.actions;
export const contactsReducer = contacts.reducer;
