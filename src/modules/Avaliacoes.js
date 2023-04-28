import axios from "../services/axios";
import { removeDuplicates } from "./removeDuplicados";

export class Avaliacoes{
    constructor(){
        this.errors = null;
    }

    async axiosGetProvas(){
        try {
            const response = axios.get('/provas');
            return (await response).data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    get avaliacoes() {
        return this.axiosGetProvas();
    }


}
export class Vestibular{
    constructor(avaliacoesDisponiveis, nome, ano = null, dia = null){
        this.nome = nome;
        this.ano = ano;
        this.dia = dia;
        this.avaliacoesDisponiveis = avaliacoesDisponiveis;
    }

    findAnosDisponiveis(){
        const anosDisponiveisComRepeticao = this.avaliacoesDisponiveis.filter(avaliacao => avaliacao.vestibular === this.nome);
        return removeDuplicates(anosDisponiveisComRepeticao, ['ano']);
    }

    findDiasDisponiveis(){
        const diasDisponiveisComRepeticao = this.avaliacoesDisponiveis.filter(avaliacao => avaliacao.vestibular === this.nome && avaliacao.ano === this.ano);
        return removeDuplicates(diasDisponiveisComRepeticao, ['dia']);
    }

    findProvasDisponiveis(){
        const avaliacao = this.avaliacoesDisponiveis.filter(avaliacao => {
            const bool = avaliacao.vestibular === this.nome && avaliacao.ano === this.ano;
            if(this.dia){
                return bool && avaliacao.dia === this.dia;
            }
            return bool;
        });
        const provas = avaliacao[0] ? Object.values(avaliacao[0].provas) : [];
        return provas;
    }

}

