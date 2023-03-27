import { createSlice } from '@reduxjs/toolkit';

const number = createSlice({
    name: 'number',
    initialState: '',
    reducers: {
        setStatusNumber(state, action) {
        return action.payload;
        },
    },
});

export const { setStatusNumber } = number.actions;
export const numberReducer = number.reducer;
