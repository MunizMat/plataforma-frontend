import React, { useState, useEffect } from "react";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswers } from '../../redux/modules/exam/actions';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Components
import { ExamTitle } from "../../components/ExamTitle";
import { Questao } from "../../components/ExamForm/Questao";
import { Timer } from "../../components/Timer";

import axios from '../../services/axios';

export default function Iniciada () {
    const exam = useSelector(state => state.exam);
    const dispatch = useDispatch();
    const prova = exam.prova;
    const arrayQuestoes = Object.keys(prova.gabarito);
    const numQuestoes = arrayQuestoes.length;
    const [show, setShow] = useState(false);

    console.log(exam);
    
    // Handlers
    const handleRadioChange = (e) => {
        const questao = e.target.name.replace('Q', '');
        const resposta = e.target.value;
        dispatch(updateAnswers({ questao, resposta }));
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    return(
        <Container as={Form}>
            <Stack as={Col} className="mt-4" style={{ textAlign: 'left'}} direction="horizontal">
                <ExamTitle as={Col} dia={prova.dia} titulo={`${prova.vestibular} ${prova.ano}`} prova={`Prova ${prova.prova}`} />
                <Stack className="align-items-end" >
                    <Timer deadline={exam.simulado.availableUntil} />
                    <Button style={{ width: '60%'}} onClick={() => setShow(true)} >Finalizar simulado</Button>
                </Stack>
            </Stack>
            <Container className="p-0 my-5 " style={{ color: 'black'}}>
                <Row>
                    <Container as={Col} className="pt-3 me-4 bg-light rounded" >
                        {arrayQuestoes.slice(0, numQuestoes / 3).map(questao => <Questao respostaMarcada={exam.respostas[questao]} handler={handleRadioChange} opcoesResposta={['A', 'B', 'C', 'D', 'E']} numeroQuestao={questao} />)}
                    </Container>
                    <Container as={Col} className="pt-3 me-4 bg-light rounded" >
                        {arrayQuestoes.slice(numQuestoes / 3, numQuestoes * 2 / 3).map(questao => <Questao  respostaMarcada={exam.respostas[questao]} handler={handleRadioChange} opcoesResposta={['A', 'B', 'C', 'D', 'E']} numeroQuestao={questao} />)}
                    </Container>
                    <Container as={Col} className="pt-3 bg-light rounded" >
                    {arrayQuestoes.slice(numQuestoes * 2 / 3, numQuestoes).map(questao => <Questao respostaMarcada={exam.respostas[questao]} handler={handleRadioChange} opcoesResposta={['A', 'B', 'C', 'D', 'E']} numeroQuestao={questao} />)}
                    </Container>
                </Row>
            </Container>
            <Modal style={{ color: 'black'}} show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar simulado</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que desejas finalizar a avaliação?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Voltar</Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>Finalizar</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}