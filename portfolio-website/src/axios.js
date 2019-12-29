import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-69639.firebaseio.com/'
});

export default instance;