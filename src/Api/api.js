import axios from 'axios';
import baseUrl from '../url';


const API = axios.create({
  baseURL: baseUrl,
  timeout: 60000,
  headers: {
    'Content-Type':'multipart/form-datad',
    Accept: 'application/json',
    Authorization:`Bearer `
  }
});

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// -------------------request interceptor--------------------------
API.interceptors.request.use(function (config) {
  // Do something before request is sent

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//-----------------------response interceptor---------------------------
API.interceptors.response.use(function (response) {
    const { data, config:{method}} = response;

  // Do something with response data

    if( method == 'post' || method == 'put' || method == 'patch' || method == 'delete'){
        console.log('message any')
    }

  if(data){
    return data
  }

  return response;
}, function (error) {

    console.log(error)

  // Do something with response error
  return Promise.reject(error);
});

export default API;