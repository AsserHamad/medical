import axios from 'axios';
import { baseURL } from './apis';

const HTTP = axios.create({
    withCredentials: false,
    baseURL
});

HTTP.interceptors.request.use(async req => {
    const ibsno = window.location.pathname.replace('/', '');
    if(req.headers)
        req.headers.ibsno = ibsno;
    return req;
})

HTTP.interceptors.response.use(async req => req.data, async err => err.response);

export default HTTP;