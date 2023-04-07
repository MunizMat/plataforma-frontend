const validateEmail = (email) => {
    let emailIsValid = false;
    let emailErrorMessage = ''
    let valididtyObject = {
        emailIsValid
    }

    if (fieldIsEmpty(email)){
        emailErrorMessage = 'Este campo é obrigatório';
        return {...valididtyObject, emailErrorMessage};
    }

    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(!regExp.test(email)){
        emailErrorMessage = 'Email inválido';
        return {...valididtyObject, emailErrorMessage}
    }

    emailIsValid = true;

    return {emailIsValid, emailErrorMessage};
} 



const fieldIsEmpty = (field) => {
    const isEmpty = field === '' ? true : false;
    return isEmpty;
} 



const validatePassword = (password) => {
    let regExp;
    let passwordIsValid = false;
    let passwordErrorMessage = '';
    const valididtyObject = {
        passwordIsValid
    }

    if (fieldIsEmpty(password)){
        passwordErrorMessage = 'Este campo é obrigatório';
        return {...valididtyObject, passwordErrorMessage};
    }

    if(password.length < 6){
        passwordErrorMessage = 'A senha deve ter no mínimo 6 caracteres';
        return {...valididtyObject, passwordErrorMessage}
    }

    if(password.length > 20){
        passwordErrorMessage = 'A senha deve ter no máximo 20 caracteres';
        return {...valididtyObject, passwordErrorMessage}
    }

    regExp = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if(!regExp.test(password)){
        passwordErrorMessage = 'A senha deve ter letras maiúsculas e minúsculas';
        return {...valididtyObject, passwordErrorMessage}
    }

    regExp = /\d/;
    if(!regExp.test(password)){
        passwordErrorMessage = 'A senha deve ter números';
        return {...valididtyObject, passwordErrorMessage}
    }

    regExp = /\W/;
    if(!regExp.test(password)){
        passwordErrorMessage = 'A senha deve ter caracteres especiais';
        return {...valididtyObject, passwordErrorMessage}
    }

    passwordIsValid = true;
    return { passwordIsValid, passwordErrorMessage } 
} 

const validateRepeatPassword = (password, repeatPassword) => {
    let repeatPasswordIsValid = false;
    let repeatPasswordErrorMessage = '';
    const valididtyObject = {
        repeatPasswordIsValid
    }

    if (fieldIsEmpty(repeatPassword)){
        repeatPasswordErrorMessage = 'Este campo é obrigatório';
        return {...valididtyObject, repeatPasswordErrorMessage};
    }

    if(!(password === repeatPassword)){
        repeatPasswordErrorMessage = 'As senhas devem ser iguais';
        return {...valididtyObject, repeatPasswordErrorMessage};
    }

    repeatPasswordIsValid = true;
    return { repeatPasswordIsValid, repeatPasswordErrorMessage } 
}


export {validateEmail, fieldIsEmpty, validatePassword, validateRepeatPassword};