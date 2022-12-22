import axios from 'axios';
import { apiUrl } from '../config/config';

const apiURL = apiUrl;


const api = axios.create({
    baseURL: apiURL,
    withCredentials: true
})

api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})


api.interceptors.response.use((config)=>{
    return config;
}, async (error)=>{
    const originalRequest = error.config;
    
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry=true;
        try{
            const respose = axios.get(`${apiURL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', respose.data.accessToken)
            return api.request(originalRequest);
        }catch(e){
            console.log("НЕ АВТОРИЗОВАН!");
        }
        
    }
    throw error;
})

export default api;