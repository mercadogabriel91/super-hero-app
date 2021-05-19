
import axios from 'axios';

const getAlkemyToken = async (arg) => {
    let result

    let { email, password } = arg

    let serviceURL = 'http://challenge-react.alkemy.org/';

    let body = {
        "email": email,
        "password": password
    }

    let headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Accept': 'application/json',
        "access-control-allow-origin":"*"
    }

    await axios.post(serviceURL, body, { headers }).then(function (response) {
        result = response.data
    }).catch(function (error) {
        if (error.response) {
            result = error.response
        }
    });

    return result
}

export default getAlkemyToken;
