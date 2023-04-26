import React from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";

export default function EspacoAluno () {
    const user = useSelector(state => state.auth.user);
    console.log(user);

    return(
        <Stack gap={5}>
            <h1 className="display-1">Olá, {user.nome}</h1>
            <Container style={{ width: '50%', color: 'black'}} className="bg-light rounded p-3" >
                <h2>Avaliações</h2>
                <Button as='a' href="/avaliacao">Realizar nova avaliação</Button>
            </Container>
            {/* <Container style={{ width: '50%', color: 'black'}} className="bg-light rounded p-3" ></Container> */}
        </Stack>
    )
}