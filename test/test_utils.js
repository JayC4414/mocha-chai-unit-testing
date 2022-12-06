const axios = require('axios');
const API_URL = "http://localhost:5000/api/";


//POST CREATE NEW USER
const createSale = async () => {

    const payload = {
        "name": "nuevo",
        "email": "nuevo@gmail.com",
        "age": 26,
    };

    const response = await axios.post(API_URL + "/postsaleinfo", payload);

    return response.data;

};


module.exports = {
    API_URL,
    createSale
}