import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6421b9d286992901b2babc88.mockapi.io';
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
        const response = await axios.get('/contacts');
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
    );

export const addContacts = createAsyncThunk(
    'contacts/addTask',
    async ({ name, number }, thunkAPI) => {
        try {
        const response = await axios.post('/contacts', { name, number });
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
    );

    export const deleteContacts = createAsyncThunk(
    'contacts/deleteTask',
    async (taskId, thunkAPI) => {
        try {
        const response = await axios.delete(`/contacts/${taskId}`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
    );
