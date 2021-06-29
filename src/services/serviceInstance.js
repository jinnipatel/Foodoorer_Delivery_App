import axios from 'axios';


let axiosInstance = axios.create({
    baseURL: 'http://foodooerdashboard.project-demo.info/api/delivery',
    timeout: 15000,
});
axiosInstance.defaults.headers.post['content-type'] = 'application/json';
axiosInstance.defaults.headers.common['Authorization'] = `${global.userToken}`;

export { axiosInstance };
