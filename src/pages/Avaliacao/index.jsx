import React, { useState, useEffect } from "react";

// React Router
import { useNavigate } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { examRequest } from '../../redux/modules/exam/actions';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import axios from '../../services/axios';

export default function FormAvaliacao () {
    const [didMount, setDidMount] = useState(false);

    // React Redux Hooks
    const exam = useSelector(state => state.exam);
    const userId = useSelector(state => state.auth.user.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Alerts and Errors
    const [axiosError, setAxiosError] = useState(false);
    const [examDoesntExistError, setExamDoesntExistError] = useState(false);

    // Inputs
    const [vestibular, setVestibular] = useState('');
    const [ano, setAno] = useState('');
    const [dia, setDia] = useState(null);
    const [prova, setProva] = useState('');

    // Options
    const [avaliacoes, setAvaliacoes] = useState([]);
    const [vestibulares, setVestibulares] = useState([]);
    const [anosDisponiveis, setAnosDisponiveis] = useState([]);
    const [provasDisponiveis, setProvasDisponiveis] = useState([]);
    const [diasDisponiveis, setDiasDisponiveis] = useState(null);

    // Validity
    const [vestIsValid, setVestIsValid] = useState(true);
    const [anoIsValid, setAnoIsValid] = useState(true);
    const [diaIsValid, setDiaIsValid] = useState(true);
    const [provaIsValid, setProvaIsValid] = useState(true);

    // Effects

    useEffect(() => { setDidMount(true) }, []);

    useEffect(() => {
        async function getAvaliacoes(){
            try {
                const response = await axios.get('/provas');
                setAvaliacoes(response.data);
                const vestibulares = [...new Set(response.data.map((prova) => prova.vestibular))]; 
                setVestibulares(vestibulares);
            } catch (error) {
                console.log(error);
                setAxiosError(true);
            }
        }

        getAvaliacoes();
    }, []);

    useEffect(() => {
        const anosDisponiveisComRepeticao = avaliacoes.filter(avaliacao => avaliacao.vestibular === vestibular).map(avaliacao => avaliacao.ano);
        const anos = [...new Set(anosDisponiveisComRepeticao.map(ano => ano))];
        setAnosDisponiveis(anos);

    }, [vestibular]);

    useEffect(() => {
        const avaliacoesComRepeticao = avaliacoes.filter(avaliacao => avaliacao.vestibular === vestibular && avaliacao.ano === ano);
        const diasDisponiveisComRepeticao = avaliacoesComRepeticao.map(avaliacao => avaliacao.dia);
        const dias = [...new Set(diasDisponiveisComRepeticao.map(dia => dia))];
        if(!dias[0]){
            setDia(null);
            setDiasDisponiveis(null);
            const provasDisponiveisComRepeticao = avaliacoesComRepeticao.map(avaliacao => avaliacao.prova);
            const provas = [...new Set(provasDisponiveisComRepeticao.map(prova => prova))];
            setProvasDisponiveis(provas);
        } else {
            setDiasDisponiveis(dias);
        }
    }, [ano]);

    useEffect(() => {
        const provasDisponiveisComRepeticao = avaliacoes.filter(avaliacao => avaliacao.vestibular === vestibular && avaliacao.ano === ano && avaliacao.dia === dia).map(avaliacao => avaliacao.prova);
        const provas = [...new Set(provasDisponiveisComRepeticao.map(prova => prova))];
        setProvasDisponiveis(provas);
    }, [dia]);

    useEffect(() => {
        console.log(exam);
        if(didMount && !exam.isLoading && !exam.error){
            navigate('/avaliacao/iniciada');
        }
    }, [exam]);

    // Handlers
    const handleVestChange = (e) => {
        setVestibular(e.target.value);
        setExamDoesntExistError(false);
        if (e.target.value){
            setVestIsValid(true);
        }
    };

    const handleAnoChange = (e) => {
        setAno(e.target.value);
        setExamDoesntExistError(false);
        if (e.target.value){
            setAnoIsValid(true);
        }
    };

    const handleDiaChange = (e) => {
        setDia(e.target.value);
        setExamDoesntExistError(false);
        if (e.target.value){
            setDiaIsValid(true);
        }
    };

    const handleProvaChange = (e) => {
        setProva(e.target.value);
        setExamDoesntExistError(false);
        if (e.target.value){
            setProvaIsValid(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { vestibular, ano, dia, prova };

       const emptyFields = checkEmptyFields();

       if(emptyFields) return;
       
       const examsFound = checkIfExamExists(vestibular, ano, prova, dia);

       if (!examsFound[0]) return setExamDoesntExistError(true);

       dispatch(examRequest({ userId, provaId: examsFound[0].id, isInProgress: true, tempoDeProva: examsFound[0].tempoDeProva }));
    };

    // Functions
    function checkIfExamExists(vestibular, ano, prova, dia ){
        console.log(prova, dia);
        const examsFound = avaliacoes.filter(avaliacao => avaliacao.vestibular === vestibular 
            && avaliacao.ano === ano 
            && avaliacao.prova === prova 
            && avaliacao.dia === dia);
        return examsFound;
    };

    function checkFieldIsEmpty(state, setter){
        if(!state){
            setter(false);
            return true;
        }
        return false;
    }

    function checkEmptyFields(){
        const field1 = checkFieldIsEmpty(vestibular, setVestIsValid);
        const field2 = checkFieldIsEmpty(ano, setAnoIsValid);
        const field3 = checkFieldIsEmpty(prova, setProvaIsValid);
        const field4 = diasDisponiveis ? checkFieldIsEmpty(dia, setDiaIsValid) : false;

        return field1 || field2 || field3 || field4;
    };


    return(
        <>
            <h1 className="display-2 mt-3">Simulados</h1>
            <Container style={{height: "80%", marginTop: "100px"}} className="d-flex justify-content-center align-items-center">
                    <Form noValidate onSubmit={handleSubmit} className="form bg-light p-3 ps-4 rounded" style={{ width: "450px", textAlign: "left"}}>
                        {axiosError && <Alert variant="danger">Não foi possível carregar os vestibulares disponíveis. Atualize a página ou tente novamente</Alert>}
                        {examDoesntExistError && <Alert variant="danger">Não foi possível encontrar esta prova. Tente novamente</Alert>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Vestibular:</Form.Label>
                            <Form.Select isInvalid={!vestIsValid} onChange={handleVestChange} aria-label="Default select example">
                                <option value=''>Selecione um vestibular</option>
                                {vestibulares.map(vest => <option  key={vest} value={vest}>{vest}</option>)}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">É necessário selecionar um vestibular</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ano:</Form.Label>
                            <Form.Select isInvalid={!anoIsValid}  onChange={handleAnoChange} aria-label="Default select example">
                                <option value=''>Selecione um ano</option>
                                {anosDisponiveis.map(ano => <option key={ano} value={ano}>{ano}</option>)}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">É necessário selecionar um ano</Form.Control.Feedback>
                        </Form.Group>
                        {diasDisponiveis && <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dia:</Form.Label>
                            <Form.Select isInvalid={!diaIsValid} onChange={handleDiaChange} aria-label="Default select example">
                                <option value=''>Selecione um dia</option>
                                {diasDisponiveis.map(dia => <option key={dia} value={dia}>{dia}</option>)}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">É necessário selecionar um dia</Form.Control.Feedback>
                        </Form.Group>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Prova:</Form.Label>
                            <Form.Select isInvalid={!provaIsValid}  onChange={handleProvaChange} aria-label="Default select example">
                                <option value={prova}>Selecione uma prova</option>
                                {provasDisponiveis.map(prova => <option key={prova} value={prova}>{prova}</option>)}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">É necessário selecionar uma prova</Form.Control.Feedback>
                        </Form.Group>

                        <Button  className="my-3" variant="primary" type="submit" style={{ width: "100%" }}>Entrar</Button>

                        <Form.Text >
                            Após iniciar o simulado, não será possível pausar ou reiniciar o mesmo
                        </Form.Text>
                    </Form>
            </Container>
        </>
    )
}