import axios from 'axios';

export async function sendToApi(bodyObject, url, method){
    try {
        const request = await axios.post(url, bodyObject)
        const responseJson = await request.json();
        return responseJson;

    } catch (error) {
        console.log(error);
        console.log('A requisição não obteve sucesso');
    }
}