import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { emailIsValid, fieldIsEmpty, passwordIsValid } from "@modules/formValidation";
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './index.css';



export default function Register () {
    const [validated, setValidated] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('Este campo é obrigatório');
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if(!fieldIsEmpty(emailRef.current.value) && !emailIsValid(emailRef.current.value)) {
            setEmailErrorMessage('Email inválido');
        } 

        console.log(passwordIsValid(passwordRef.current.value));

        setValidated(true);

        if(form.checkValidity()) {
            form.submit();
        }
    }

    return(
        <Container style={{height: "80%"}} className="d-flex justify-content-center align-items-center">

                <Form noValidate validated={validated} className="form bg-light p-3 ps-4 rounded" onSubmit={handleSubmit} style={{ width: "450px", textAlign: "left"}}>

                    <h2>Crie sua conta</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "left"}} >
                        <Form.Label>Seu Email</Form.Label>
                        <Form.Control ref={emailRef} required type="email" placeholder="Email" />
                        <Form.Control.Feedback type="invalid">{emailErrorMessage}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
                        <Form.Label>Crie uma senha</Form.Label>
                        <Form.Control ref={passwordRef} required type="senha" placeholder="Senha" />
                        <Form.Control.Feedback type="invalid">Este campo é obrigatório</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
                        <Form.Label>Repita sua senha</Form.Label>
                        <Form.Control required type="senha" placeholder="Senha" />
                        <Form.Control.Feedback type="invalid">Este campo é obrigatório</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Text >Sua senha deve conter:<br/>- Entre 6 a 20 caracteres<br/>- Letras maiúsculas e minúsculas<br/>- Números<br/>- Caracteres especiais(Ex: !, @, #, $)</Form.Text>

                    <Button  className="my-3" variant="primary" type="submit" style={{ width: "100%" }}>Criar conta</Button>

                    <Form.Text>Já tem conta? <Link to="/login" style={{textDecoration: "underline"}}>Faça login!</Link></Form.Text>

                </Form>
        </Container>
    )
}