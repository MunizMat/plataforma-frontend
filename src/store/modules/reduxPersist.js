import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'PROVSREACT',
      storage,
      whitelist: ['prova'],
    }, 
    reducers
  );

  return persistedReducers;
};