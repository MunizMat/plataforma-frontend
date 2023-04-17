import React, { useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword, validateRepeatPassword, fieldIsEmpty } from "@modules/formValidation";
import axios from '../services/axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Components
import { Email } from "../components/Email";
import { Senha } from "../components/Senha";

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';

export default function Register () {

    const navigate = useNavigate();

    // Estados de verificação da veracidade dos campos
    const [nameInvalidity, setNameInvalidity] = useState(false);
    const [emailInvalidity, setEmailInvalidity] = useState(false);
    const [passwordInvalidity, setPasswordInvalidity] = useState(false);
    const [repeatPasswordInvalidity, setRepeatPasswordInvalidity] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Estados de controle e manipulação das mensagens de erro a serem exibidas
    const [emailErrorMessage, setEmailErrorMessage] = useState('Este campo é obrigatório');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('Este campo é obrigatório');
    const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = useState('Este campo é obrigatório');

    // Ref's que apontam para os campos que precisam ser validados
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();


    const handleSubmit = async(event) => {
        event.preventDefault();

        /* Executando funções de validação de campo. A funçao "validate<nomeDoCampo>" retorna um objeto que informa se o campo é valido, e, caso seja inválido, qual mensagem de erro deve ser exibida */
        const { emailIsValid, emailErrorMessage } = validateEmail(emailRef.current.value);
        const { passwordIsValid, passwordErrorMessage} = validatePassword(passwordRef.current.value);
        const { repeatPasswordIsValid, repeatPasswordErrorMessage} = validateRepeatPassword(passwordRef.current.value, repeatPasswordRef.current.value);

        // Sequência de validação individual de cada campo 
        if (fieldIsEmpty(nameRef.current.value)){
            setNameInvalidity(true);
        } else {
            setNameInvalidity(false);
        }

        if (!emailIsValid) {
            setEmailErrorMessage(emailErrorMessage);
            setEmailInvalidity(true);
        } else {
            setEmailInvalidity(false);
        }

        if (!passwordIsValid){
            setPasswordErrorMessage(passwordErrorMessage);
            setPasswordInvalidity(true);
        } else {
            setPasswordInvalidity(false);
        }

        if (!repeatPasswordIsValid){
            setRepeatPasswordErrorMessage(repeatPasswordErrorMessage);
            setRepeatPasswordInvalidity(true);
        } else {
            setRepeatPasswordInvalidity(false);
        }

        // Validação de todos os campos simultaneamente
        if(emailIsValid && passwordIsValid && repeatPasswordIsValid) {
            const form = event.currentTarget;
            const formData = new FormData(form);
            const body = Object.fromEntries(formData.entries());
            setIsLoading(true);
            const response = await axios.post('/users', body);
            setIsLoading(false);
            const { errors } = response.data;
            if(errors){
                switch(errors[0].field){
                    case 'nome':
                        setNameInvalidity(true);
                        break;
                    case 'email':
                        setEmailErrorMessage(errors[0].message);
                        setEmailInvalidity(true);
                        break;
                    case 'senha':
                        setPasswordErrorMessage(errors[0].message);
                        setPasswordInvalidity(true);
                        break;
                }
            } else {
                toast.success('Conta criada com sucesso!');
                navigate('/login');
            }

        }
    }

    return(
        <>
            <Container  className="d-flex justify-content-center align-items-center">

                    <Form noValidate className="form bg-light p-3 ps-4 rounded" onSubmit={handleSubmit} style={{ width: "450px", textAlign: "left", marginTop: '50px'}}>

                    <Stack direction="horizontal" gap={3}>
                        <h2>Crie sua conta</h2>

                        {isLoading && <Spinner as="span" variant="primary" animation="border" />}
                    </Stack>

                        <Form.Group className="mb-3" controlId="formSurname" style={{textAlign: "left"}} >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control name="nome" isInvalid={nameInvalidity} ref={nameRef} required type="text" placeholder="Nome" />
                            <Form.Control.Feedback type="invalid">Este campo é obrigatório</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formName" style={{textAlign: "left"}} >
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control name="sobrenome" type="text" placeholder="Sobrenome" />
                        </Form.Group>

                        <Email 
                        emailInvalidity={emailInvalidity} 
                        emailErrorMessage={emailErrorMessage} 
                        emailRef={emailRef} />

                        <Senha 
                        label="Crie sua senha" 
                        passwordInvalidity={passwordInvalidity} 
                        passwordRef={passwordRef} 
                        passwordErrorMessage={passwordErrorMessage}/>

                        <Form.Group className="mb-3" controlId="formBasicRepeatPassword" style={{textAlign: "left"}} >
                            <Form.Label>Repita sua senha</Form.Label>
                            <Form.Control name="repetirSenha" isInvalid={repeatPasswordInvalidity} ref={repeatPasswordRef} required type="password" placeholder="Senha" />
                            <Form.Control.Feedback type="invalid">{repeatPasswordErrorMessage}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Text >Sua senha deve conter:<br/>- Entre 6 a 20 caracteres<br/>- Letras maiúsculas e minúsculas<br/>- Números<br/>- Caracteres especiais(Ex: !, @, #, $)</Form.Text>

                        <Button  className="my-3" variant="primary" type="submit" style={{ width: "100%" }}>Criar conta</Button>

                        <Form.Text>Já tem conta? <Link to="/login" style={{textDecoration: "underline"}}>Faça login!</Link></Form.Text>

                    </Form>
            </Container>
        </>
    )
}