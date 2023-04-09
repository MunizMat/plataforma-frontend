import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';

export default configureStore({
    reducer: {
        user: userReducer
    }
});

export const persistor = persistStore(store);
