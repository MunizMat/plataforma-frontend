import { useState, useEffect } from "react";
import {validateEmail, fieldIsEmpty, validatePassword, validateRepeatPassword} from '../modules/formValidation';

export function useInput(inputName){
    const [validity, setValidity] = useState(true);
    const [errorMessage, setErrorMessage] = useState('Este campo é obrigatório');

    function validateInput(input, input2){
        switch (inputName) {
            case 'name': 
                if (fieldIsEmpty(input)){
                    setValidity(false);
                } else {
                    setValidity(true);
                }
            break;
            case 'email':
                const { emailIsValid, emailErrorMessage } = validateEmail(input);
                if (!emailIsValid) {
                    setErrorMessage(emailErrorMessage);
                    setValidity(false);
       
                } else {
                    setValidity(true);
                }
                break;
            case 'password-login':
                if (fieldIsEmpty(input)){
                    setValidity(false);
                } else {
                    setValidity(true);
                }
                break;
            case 'password-register':
                const { passwordIsValid, passwordErrorMessage } = validatePassword(input);
                if (!passwordIsValid){
                    setErrorMessage(passwordErrorMessage);
                    setValidity(false);
                } else {
                    setValidity(true);
                }
                break;
            case 'repeat-password':
                const { repeatPasswordIsValid, repeatPasswordErrorMessage } = validateRepeatPassword(input, input2);
                if (!repeatPasswordIsValid){
                    setErrorMessage(repeatPasswordErrorMessage);
                    setValidity(false);
                } else {
                    setValidity(true);
                }
                break;
            default:
                break;
        }
    }

    function validateBackEnd(array){
        if(array.length > 0){
            switch(array[0].field){
                case 'nome':
                    // setValidity(false);
                    break;
                case 'email':
                    setErrorMessage(array[0].message);
                    setValidity(false);
                    break;
                case 'senha':
                    setErrorMessage(array[0].message);
                    setValidity(false);
                    break;
            }
        }else {
            navigate('/login', { state: true });
        }
    }

    return {validity, errorMessage, validateInput, validateBackEnd};

}