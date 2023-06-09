import * as types from '../../types';

export function examRequest(payload){
    return{
        type: types.EXAM_REQUEST,
        payload,
    };
};

export function examSuccess(payload){
    return{
        type: types.EXAM_SUCCESS,
        payload,
    };
};

export function examFailure(payload){
    return{
        type: types.EXAM_FAILURE,
        payload,
    };
};

export function updateAnswers(payload){
    return{
        type: types.UPDATE_ANSWERS,
        payload,
    };
};

export function finishExam(payload){
    return{
        type: types.FINISH_EXAM,
        payload,
    };
};


