import axios from 'axios';

const api = axios.create({
    baseURL:'http://xc-wfg.anonymous.mobile.exp.direct:8080'
});

export default api;