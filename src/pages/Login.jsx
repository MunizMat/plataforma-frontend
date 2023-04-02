import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Login () {
    return(
        <Container style={{height: "80%"}} className="d-flex justify-content-center align-items-center">
                <Form className="bg-primary p-3 rounded" style={{ width: "450px"}}>
                    <h2>Fazer login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{textAlign: "left"}} >
                    <Form.Label>Seu Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" style={{textAlign: "left"}} >
                    <Form.Label>Sua Senha</Form.Label>
                    <Form.Control type="senha" placeholder="Senha" />
                </Form.Group>
                <Button variant="light" type="submit">Entrar</Button>
                </Form>
        </Container>
    )
}