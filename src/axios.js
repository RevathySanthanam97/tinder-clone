import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinderbackend-1.herokuapp.com/',
})

export default instance;