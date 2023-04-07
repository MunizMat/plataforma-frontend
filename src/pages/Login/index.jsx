import React, { useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { validateEmail, fieldIsEmpty} from "@modules/formValidation";
import './index.css';
//Bootstrap 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';


export default function Login () {
    const location = useLocation();

    // Estados de verificação da veracidade dos campos
    const [emailInvalidity, setEmailInvalidity] = useState(false);
    const [passwordInvalidity, setPasswordInvalidity] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('Este campo é obrigatório');
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

         /* Executando funções de validação de campo. A funçao "validate<nomeDoCampo>" retorna um objeto que informa se o campo é valido, e, caso seja inválido, qual mensagem de erro deve ser exibida */
         const { emailIsValid, emailErrorMessage } = validateEmail(emailRef.current.value);
 
         // Sequência de validação individual de cada campo 
         if (!emailIsValid) {
             setEmailErrorMessage(emailErrorMessage);
             setEmailInvalidity(true);
         } else {
             setEmailInvalidity(false);
         }

        if (fieldIsEmpty(passwordRef.current.value)){
            setPasswordInvalidity(true);
        } else {
            setPasswordInvalidity(false);
        }
 

        if(emailIsValid && !(fieldIsEmpty(passwordRef.current.value))) {
            const form = event.currentTarget;
            form.submit();
        }
    }
  
    return(
        <Container style={{height: "80%", marginTop: "100px"}} className="d-flex justify-content-center align-items-center">
                <Form noValidate onSubmit={handleSubmit} className="form bg-light p-3 ps-4 rounded" style={{ width: "450px", textAlign: "left"}}>

                    <h2>Fazer login</h2>

                    {location.state && <Alert variant="success">Conta criada com sucesso!</Alert>}

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "left"}} >
                        <Form.Label>Seu Email</Form.Label>
                        <Form.Control isInvalid={emailInvalidity} required ref={emailRef} type="email" placeholder="Email" />
                        <Form.Control.Feedback type="invalid">{emailErrorMessage}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
                        <Form.Label>Sua Senha</Form.Label>
                        <Form.Control isInvalid={passwordInvalidity} required ref={passwordRef} type="password" placeholder="Senha" />
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