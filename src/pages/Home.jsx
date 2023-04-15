import React from "react";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export default function Home () {
    return(
            <Stack className="p-5 ms-5" gap={3} style={{textAlign: "left"}}>
                <h1 className="display-2">Studiez</h1>
                <h3 className="display-2">Sua plataforma de estudos</h3>
                <div className="col-md-3">
                    <Button variant="primary" as="a" href="/login">Faça login ou crie sua conta</Button>
                </div>
            </Stack>
    )
}