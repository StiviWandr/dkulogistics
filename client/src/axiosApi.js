import axios from 'axios';
export const apiURL = 'http://localhost:8000'


export default axios.create({
    baseURL: apiURL
})