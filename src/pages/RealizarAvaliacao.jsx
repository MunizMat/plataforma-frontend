import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RealizarAvaliacao () {
    return(
        <>
            <h1>Simulados</h1>
            <Container style={{height: "80%", marginTop: "100px"}} className="d-flex justify-content-center align-items-center">
                    <Form noValidate className="form bg-light p-3 ps-4 rounded" style={{ width: "450px", textAlign: "left"}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Vestibular:</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione um vestibular</option>
                                <option value="enem">ENEM</option>
                                <option value="fuvest">FUVEST</option>
                                <option value="unicamp">UNICAMP</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Prova:</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione uma prova</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ano:</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione um ano</option>
                            </Form.Select>
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