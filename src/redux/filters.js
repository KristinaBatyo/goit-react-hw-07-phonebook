import { createSlice } from '@reduxjs/toolkit';

const filters = createSlice({
    name: 'filters',
    initialState: '',
    reducers: {
        setStatusFilter(state, action) {
        return action.payload;
        },
    },
});

export const { setStatusFilter } = filters.actions;
export const filtersReducer = filters.reducer;
