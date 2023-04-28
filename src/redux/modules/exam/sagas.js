import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../../types';
import * as actions from './actions';
import axios from '../../../services/axios';

function* examRequest({ payload }){
    try {
        const response = yield call(axios.post, '/provas/simulados', payload);
        yield put(actions.examSuccess({ ...response.data }));

    } catch (error) {
        console.log(error);
        yield put(actions.examFailure());
    }
}


export default all([takeLatest(types.EXAM_REQUEST, examRequest)]);