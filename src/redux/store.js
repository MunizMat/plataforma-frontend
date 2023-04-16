import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

import peristedReducers from './reduxPersist';

export const store = createStore(peristedReducers(rootReducer), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);