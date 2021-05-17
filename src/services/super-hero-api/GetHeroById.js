
import axios from 'axios';
import { AccesToken } from './AccessToken';

const getHeroById = async () => {
    let result

    let serviceURL = 'https://superheroapi.com/api/10225770133864422/1';
    // let serviceURL = `https://superheroapi.com/api/${AccesToken}/${id}`

    let body = {}

    let headers = {
        "Access-Control-Allow-Origin": "*",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Methods": "GET"
    }

    await axios.get('https://www.superheroapi.com/api.php/10225770133864422/1', { headers }).then(res => console.log(res)).catch(err => console.log(err))

    // await axios.get(serviceURL, body, { headers }).then(function (response) {
    //     //result = response.data
    //     console.log(response)
    // }).catch(function (error) {
    //     console.log(error)
    //     // if (error.response) {
    //     //     result = error.response
    //     // }
    // });

    // await axios.post(serviceURL, body, { headers }).then(function (response) {
    //     result = response.data
    // }).catch(function (error) {
    //     if (error.response) {
    //         result = error.response
    //     }
    // });

    return result
}

export default getHeroById;