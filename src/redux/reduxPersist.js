import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer({
        key: 'Studiez',
        storage,
        whitelist: ['auth', 'exam']
    }, reducers);

    return persistedReducer;
};