import React, { useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { validateEmail, fieldIsEmpty} from "@modules/formValidation";
import './index.css';
import { fetchToken } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Email } from "../../components/Email";
import { Senha } from "../../components/Senha";

//Bootstrap 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';


export default function Login () {
    const location = useLocation();
    const dispatch = useDispatch();
    const info = useSelector((state) => state.auth);

    // Estados de verificação da veracidade dos campos
    const [emailInvalidity, setEmailInvalidity] = useState(false);
    const [passwordInvalidity, setPasswordInvalidity] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('Este campo é obrigatório');
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

         /* Executando funções de validação de campo. A funçao "validate<nomeDoCampo>" retorna um objeto que informa se o campo é valido, e, caso seja inválido, qual mensagem de erro deve ser exibida */
         const { emailIsValid, emailErrorMessage } = validateEmail(emailRef.current.value);
 
         // Sequência de validação individual de cada campo 
         if (!emailIsValid) {
             setEmailErrorMessage(emailErrorMessage);
             setEmailInvalidity(true);
         } else {
             setEmailInvalidity(false);
         }

        if (fieldIsEmpty(passwordRef.current.value)){
            setPasswordInvalidity(true);
        } else {
            setPasswordInvalidity(false);
        }
 

        if(emailIsValid && !(fieldIsEmpty(passwordRef.current.value))) {
            const form = event.currentTarget;
            const formData = new FormData(form);
            const dataObject = Object.fromEntries(formData.entries());
            // const apiErrors = await sendToApi(dataObject, `http://localhost:3000/auth`, 'POST');
            dispatch(fetchToken({email: 'matheusmuniz215@gmail.com', senha: 'Muniz9900!'}));
            console.log(info);
        }
    }
  
    return(
        <Container style={{height: "80%", marginTop: "100px"}} className="d-flex justify-content-center align-items-center">
                <Form noValidate onSubmit={handleSubmit} className="form bg-light p-3 ps-4 rounded" style={{ width: "450px", textAlign: "left"}}>

                    <h2>Fazer login</h2>

                    {location.state && <Alert variant="success">Conta criada com sucesso!</Alert>}

                    <Email emailInvalidity={emailInvalidity} emailErrorMessage={emailErrorMessage} emailRef={emailRef} />

                    <Senha label="Sua senha" passwordInvalidity={passwordInvalidity} passwordRef={passwordRef} passwordErrorMessage="Este campo é obrigatório"/>

                    <Button  className="my-3" variant="primary" type="submit" style={{ width: "100%" }}>Entrar</Button>

                    <Form.Text style={{ textDecoration: "underline", fontSize: "1em" }}>
                        <Link to="/register">Criar Conta</Link>
                    </Form.Text>
                </Form>
        </Container>
    )
}