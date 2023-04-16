import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../../types';
import * as actions from './actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }){
    try {
        const response = yield call(axios.post, '/auth', payload);
        yield put(actions.loginSuccess({ ...response.data }));

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    } catch (error) {
        console.log(error);
        yield put(actions.loginFailure());
    }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);