import React, { useEffect } from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from "react-redux";
import { finishExam } from "../../redux/modules/exam/actions";

export default function Finalizada () {
    const exam = useSelector(state => state.exam);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(finishExam());
    }, []);


    return(
        <Container  className="d-flex justify-content-center align-items-center">
            <h1>Você finalizou sua avaliação!</h1>
        </Container>
    )
}