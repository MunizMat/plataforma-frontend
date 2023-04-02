import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


export default function CriarConta () {
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return(
        <Container style={{height: "80%"}} className="d-flex justify-content-center align-items-center">

                <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-primary p-3 ps-4 rounded" style={{ width: "450px", textAlign: "left"}}>

                    <h2>Crie sua conta</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "left"}} >
                        <Form.Label>Seu Email</Form.Label>
                        <Form.Control required type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
                        <Form.Label>Crie uma senha</Form.Label>
                        <Form.Control required type="senha" placeholder="Senha" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
                        <Form.Label>Repita sua senha</Form.Label>
                        <Form.Control required type="senha" placeholder="Senha" />
                    </Form.Group>
                    <Form.Text style={{color: "whitesmoke"}} >Sua senha deve conter:<br/>- Entre 6 a 20 caracteres<br/>- Letras maiúsculas e minúsculas<br/>- Números<br/>- Caracteres especiais(Ex: !, @, #, $)</Form.Text>

                    <Button  className="my-3" variant="light" type="submit" style={{ width: "100%" }}>Criar conta</Button>

                    <Form.Text style={{color: "whitesmoke"}}>Já tem conta? <Link to="/login" style={{textDecoration: "underline"}}>Faça login!</Link></Form.Text>

                </Form>
        </Container>
    )
}