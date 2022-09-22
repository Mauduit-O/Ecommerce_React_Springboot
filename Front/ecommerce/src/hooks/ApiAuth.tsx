import axios from 'axios';

const getToken=()=>{
  return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest: any)=>{
  return axios({
      'method':'POST',
      'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/test`,
      'data':authRequest
  })
}

export const fetchUserData=(authRequest: any)=>{
  return axios({
      method:'GET',
      url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/userinfo`,
      headers:{
          'Authorization':'Bearer '+getToken()
      }
  })
}