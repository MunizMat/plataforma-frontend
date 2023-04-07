const emailIsValid = (email) => {
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const isValid = regExp.test(email);
    return isValid;
} 

const validatePassword = (password) => {
    let regExp;
    let isValid = false;
    let errorMessage = '';
    const valididtyObject = {
        isValid
    }

    if(password.length < 6){
        errorMessage = 'A senha deve ter no mínimo 6 caracteres';
        return {...valididtyObject, errorMessage}
    }

    if(password.length > 20){
        errorMessage = 'A senha deve ter no máximo 20 caracteres';
        return {...valididtyObject, errorMessage}
    }

    regExp = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if(!regExp.test(password)){
        errorMessage = 'A senha deve ter letras maiúsculas e minúsculas';
        return {...valididtyObject, errorMessage}
    }

    regExp = /\d/;
    if(!regExp.test(password)){
        errorMessage = 'A senha deve ter números';
        return {...valididtyObject, errorMessage}
    }

    regExp = /\W/;
    if(!regExp.test(password)){
        errorMessage = 'A senha deve ter caracteres especiais';
        return {...valididtyObject, errorMessage}
    }

    isValid = true;
    return { isValid, errorMessage } 
} 

const fieldIsEmpty = (field) => {
    const isEmpty = field === '' ? true : false;
    return isEmpty;
} 

export {emailIsValid, fieldIsEmpty, validatePassword};