import * as types from '../../types';

const initialState = {
    isLoading: false,
    prova: null,
    simulado: null,
    respostas: {},
    error: null
};

export default function (state = initialState, action){
    switch(action.type){
        case types.EXAM_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.EXAM_SUCCESS: {
            const newState = { ...state };
            newState.isLoading = false;
            const { simulado, prova  } = action.payload;
            newState.prova = prova;
            newState.simulado = simulado;
            return newState;
        }

        case types.EXAM_FAILURE: {
            newState.isLoading = false;
            return state;
        }

        case types.UPDATE_ANSWERS: {
            const newState = {...state};
            const { questao, resposta } = action.payload;
            newState.isLoading = false;
            newState.respostas[questao] = resposta;
            return newState;
        }

        default: 
            return state;
    }
};