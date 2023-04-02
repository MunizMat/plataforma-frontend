import * as types from '../types';

export function iniciarProva(){
    return {
        type: types.INICIAR_PROVA
    };
}

export function selecionarResposta(resposta){
    return {
        type: types.SELECIONAR_RESPOSTA,
        payload: resposta,
    };
}