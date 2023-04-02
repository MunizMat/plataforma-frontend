import React from "react";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export default function Home () {
    return(
            <Stack className="p-5 ms-5" gap={3} style={{textAlign: "left"}}>
                <h1 style={{fontSize: "9em"}}>Título</h1>
                <h2 className="display-2" style={{fontSize: "3em"}}>Sua plataforma de estudos</h2>
                <div className="col-md-3">
                    <Button variant="primary" as="a" href="/login">Faça login ou crie sua conta</Button>
                </div>
            </Stack>
    )
}