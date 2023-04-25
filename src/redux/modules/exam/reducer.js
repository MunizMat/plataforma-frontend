import * as types from '../../types';

const initialState = {
    isLoading: false,
    prova: null,
    simulado: null,
    respostas: {},
    tempoDeProvaMilisegundos: null,
    error: null
};

export default function (state = initialState, action){
    switch(action.type){
        case types.EXAM_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            newState.error = false;
            return newState;
        }

        case types.EXAM_SUCCESS: {
            const newState = { ...state };
            newState.isLoading = false;
            newState.error = false;
            const { simulado, prova, tempoDeProvaMilisegundos  } = action.payload;
            newState.prova = prova;
            newState.simulado = simulado;
            newState.tempoDeProvaMilisegundos = tempoDeProvaMilisegundos;
            return newState;
        }

        case types.EXAM_FAILURE: {
            const newState = { ...state };
            newState.isLoading = false;
            newState.error = true;
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