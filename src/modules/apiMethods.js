export async function sendToApi(bodyObject, url, method){
    try {
        const request = await fetch(url, {
            method: method, 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObject)
        });
        const responseJson = await request.json();
        return responseJson;

    } catch (error) {
        console.log(error);
        console.log('A requisição não obteve sucesso');
    }
}