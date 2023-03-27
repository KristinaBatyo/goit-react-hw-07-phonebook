import { createSlice } from '@reduxjs/toolkit';

const name = createSlice({
    name: 'name',
    initialState: '',
    reducers: {
        setStatusName(state, action) {
        return action.payload;
        },
    },
});

export const { setStatusName } = name.actions;
export const nameReducer = name.reducer;
