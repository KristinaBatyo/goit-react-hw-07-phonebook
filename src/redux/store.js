import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { contactsReducer } from './contacts';
import { filtersReducer } from './filters';
import { nameReducer } from './name';
import { numberReducer } from './number';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const contactReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  name: nameReducer,
  number: numberReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const persistContactsReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
    reducer: persistContactsReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
