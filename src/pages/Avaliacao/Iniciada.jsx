import React, { useState, useEffect } from "react";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { examRequest } from '../../redux/modules/exam/actions';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

// Components
import { ExamTitle } from "../../components/ExamTitle";
import { Questao } from "../../components/ExamForm/Questao";
import { Timer } from "../../components/Timer";

import axios from '../../services/axios';

export default function Iniciada () {
    const prova = useSelector(state => state.exam.prova);
    const arrayQuestoes = Object.keys(prova.gabarito);
    const numQuestoes = arrayQuestoes.length;
   

    return(
        <Container as={Form}>
            <Stack as={Col} className="mt-4" style={{ textAlign: 'left'}} direction="horizontal">
                <ExamTitle as={Col} dia='' titulo='FUVEST 2020' prova='Prova V' />
                <Stack className="align-items-end" >
                    <Timer />
                    <Button type="submit" style={{ width: '60%'}} >Finalizar simulado</Button>
                </Stack>
            </Stack>
            <Container className="p-0 my-5 " style={{ color: 'black'}}>
                <Row>
                    <Container as={Col} className="pt-3 me-4 bg-light rounded" >
                        {arrayQuestoes.slice(0, numQuestoes / 3).map(questao => <Questao opcoesResposta={['A', 'B', 'C', 'D', 'E']} numeroQuestao={questao} />)}
                    </Container>
                    <Container as={Col} className="pt-3 me-4 bg-light rounded" >
                        {arrayQuestoes.slice(numQuestoes / 3, numQuestoes * 2 / 3).map(questao => <Questao opcoesResposta={['A', 'B', 'C', 'D', 'E']} numeroQuestao={questao} />)}
                    </Container>
                    <Container as={Col} className="pt-3 bg-light rounded" >
                    {arrayQuestoes.slice(numQuestoes * 2 / 3, numQuestoes).map(questao => <Questao opcoesResposta={['A', 'B', 'C', 'D', 'E']} numeroQuestao={questao} />)}
                    </Container>
                </Row>
            </Container>
            
        </Container>
    )
}