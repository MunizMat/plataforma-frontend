import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


export default function Login () {
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

                    <h2>Fazer login</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "left"}} >
                        <Form.Label>Seu Email</Form.Label>
                        <Form.Control required type="email" placeholder="Email" />
                        <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
                        <Form.Label>Sua Senha</Form.Label>
                        <Form.Control required type="senha" placeholder="Senha" />
                    </Form.Group>

                    <Button  className="my-3" variant="light" type="submit" style={{ width: "100%" }}>Entrar</Button>

                    <Form.Text style={{ textDecoration: "underline", color: "white", fontSize: "1em" }}>
                        <Link to="/criarconta">Criar Conta</Link>
                    </Form.Text>
                </Form>
        </Container>
    )
}