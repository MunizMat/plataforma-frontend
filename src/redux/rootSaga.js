import { all } from 'redux-saga/effects';

import auth from './modules/auth/sagas';
import exam from './modules/exam/sagas';

export default function* rootSaga() {
  return yield all([auth, exam]);
}