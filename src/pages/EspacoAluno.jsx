import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
// Bootstrap
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function EspacoAluno () {
    const user = useSelector(state => state.auth.user);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 500);
    }, []);
  
    return(
        <Stack gap={5}>
            <Fade in={show} appear  timeout={1000} >
                <h1 id="example-fade-text" className="display-1">Olá, {user.nome}</h1>
            </Fade>
            <Container style={{ width: '50%', color: 'black'}} className="bg-light rounded p-3" >
                <h2>Avaliações</h2>
                <Button as='a' href="/avaliacao">Realizar nova avaliação</Button>
            </Container>
            {/* <Container style={{ width: '50%', color: 'black'}} className="bg-light rounded p-3" ></Container> */}
        </Stack>
    )
}