import React, { useState, useEffect } from "react";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { examRequest } from '../../redux/modules/exam/actions';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

import { ExamTitle } from "../../components/ExamTitle";
import { Timer } from "../../components/Timer";

import axios from '../../services/axios';

export default function Iniciada () {

    return(
        <>
            <Stack as={Col} style={{ textAlign: 'left'}} direction="horizontal">
                <ExamTitle as={Col} titulo='FUVEST 2020' prova='Prova V' />
                <Timer />
            </Stack>
            <Stack className="mt-5" style={{ color: 'black'}} direction="horizontal">
                <Container as={Col} className="mx-4 bg-light rounded" >oi</Container>
                <Container as={Col} className="mx-4 bg-light rounded" >oi</Container>
                <Container as={Col} className="mx-4 bg-light rounded" >oi</Container>
            </Stack>
            
        </>
    )
}