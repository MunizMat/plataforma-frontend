import React from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';

export default function Page404 () {

    return(
        <Container  className="d-flex justify-content-center align-items-center">
            <h1 className=" mt-5 display-1" >Ops, a página que você procurava não foi encontrada...</h1>
        </Container>
    )
}