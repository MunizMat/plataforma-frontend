import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
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


export default function Login () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const info = useSelector((state) => state.auth);

    // Estados de verificação da veracidade dos campos
    const [emailInvalidity, setEmailInvalidity] = useState(false);
    const [passwordInvalidity, setPasswordInvalidity] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('Este campo é obrigatório');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('Este campo é obrigatório');
    const [didMount, setDidMount] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();


    useEffect(() => { setDidMount(true) }, [])


    useEffect(()=> {
        if(didMount && info.loading === 'succeeded' && info.user.error && info.user.error.field === 'email'){
            setEmailInvalidity(true);
            setEmailErrorMessage(info.user.error.msg);
        } else if(didMount && info.loading === 'succeeded' && info.user.error) {
            setPasswordInvalidity(true);
            setPasswordErrorMessage(info.user.error.msg);
        } else if(didMount && info.loading === 'succeeded') {
            navigate('/espaco');
        }
    }, [info]);

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
            dispatch(fetchToken({
                email: emailRef.current.value, 
                senha: passwordRef.current.value
            }));
        }
    }
  
    return(
        <Container style={{height: "80%", marginTop: "100px"}} className="d-flex justify-content-center align-items-center">
                <Form noValidate onSubmit={handleSubmit} className="form bg-light p-3 ps-4 rounded" style={{ width: "450px", textAlign: "left"}}>

                    <h2>Fazer login</h2>

                    <Email emailInvalidity={emailInvalidity} emailErrorMessage={emailErrorMessage} emailRef={emailRef} />

                    <Senha label="Sua senha" passwordInvalidity={passwordInvalidity} passwordRef={passwordRef} passwordErrorMessage={passwordErrorMessage}/>

                    <Button  className="my-3" variant="primary" type="submit" style={{ width: "100%" }}>Entrar</Button>

                    <Form.Text style={{ textDecoration: "underline", fontSize: "1em" }}>
                        <Link to="/register">Criar Conta</Link>
                    </Form.Text>
                </Form>
        </Container>
    )
}