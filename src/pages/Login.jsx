import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, fieldIsEmpty} from "@modules/formValidation";
import { loginRequest } from "../redux/modules/auth/actions";
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Email } from "../components/Email";
import { Senha } from "../components/Senha";

//Bootstrap 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';


export default function Login () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    // Estados de verificação da veracidade dos campos
    const [emailInvalidity, setEmailInvalidity] = useState(false);
    const [passwordInvalidity, setPasswordInvalidity] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('Este campo é obrigatório');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('Este campo é obrigatório');
    const [didMount, setDidMount] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();


    useEffect(() => { setDidMount(true) }, []);


    useEffect(()=> {
        if(didMount && !auth.isLoading){
            if( auth.error?.field === 'email'){
                setEmailInvalidity(true);
                setEmailErrorMessage(auth.error.msg);
            } else if( auth.error?.field === 'senha') {
                setPasswordInvalidity(true);
                setPasswordErrorMessage(auth.error.msg);
            } else {
                navigate('/espaco-aluno');
            }
        }

        console.log(auth);

    }, [auth]);

    const handleSubmit = async (event) => {
        event.preventDefault();

         /* Executando funções de validação de campo. A funçao "validate<nomeDoCampo>" retorna um objeto que authrma se o campo é valido, e, caso seja inválido, qual mensagem de erro deve ser exibida */
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
            dispatch(loginRequest(dataObject));
        }
    }
  
    return(
        <Container style={{height: "80%", marginTop: "100px"}} className="d-flex justify-content-center align-items-center">
                <Form noValidate onSubmit={handleSubmit} className="form bg-light p-3 ps-4 rounded" style={{ width: "450px", textAlign: "left"}}>
                    
                    <Stack direction="horizontal" gap={3}>
                        <h2>Fazer login</h2>

                        {auth.isLoading && <Spinner as="span" variant="primary" animation="border" />}
                    </Stack>

                    {auth.error === 'failed' && <Alert variant="danger">Não foi possível efetuar seu login. Tente novamente</Alert>}

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