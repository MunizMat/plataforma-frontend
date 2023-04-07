import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { emailIsValid, fieldIsEmpty } from "@modules/formValidation";
import './index.css';
//Bootstrap 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export default function Login () {
    const [validated, setValidated] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('Este campo é obrigatório');
    const emailRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if(!fieldIsEmpty(emailRef.current.value) && !emailIsValid(emailRef.current.value)) {
            setEmailErrorMessage('Email inválido');
        } 

        setValidated(true);

        if(form.checkValidity()) {
            form.submit();
        }
    }
  
    return(
        <Container style={{height: "80%"}} className="d-flex justify-content-center align-items-center">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="form bg-light p-3 ps-4 rounded" style={{ width: "450px", textAlign: "left"}}>

                    <h2>Fazer login</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "left"}} >
                        <Form.Label>Seu Email</Form.Label>
                        <Form.Control required ref={emailRef} type="email" placeholder="Email" />
                        <Form.Control.Feedback type="invalid">{emailErrorMessage}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
                        <Form.Label>Sua Senha</Form.Label>
                        <Form.Control required type="password" placeholder="Senha" />
                        <Form.Control.Feedback type="invalid">Este campo é obrigatório</Form.Control.Feedback>
                    </Form.Group>

                    <Button  className="my-3" variant="primary" type="submit" style={{ width: "100%" }}>Entrar</Button>

                    <Form.Text style={{ textDecoration: "underline", fontSize: "1em" }}>
                        <Link to="/register">Criar Conta</Link>
                    </Form.Text>
                </Form>
        </Container>
    )
}