const emailIsValid = (email) => {
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const isValid = regExp.test(email);
    return isValid;
} 

const fieldIsEmpty = (field) => {
    const isEmpty = field === '' ? true : false;
    return isEmpty;
} 

export {emailIsValid, fieldIsEmpty};