import { IUserUpdate, IUserRegister, IUserLogin } from '../types/users'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const getErrorMessage = (error: unknown): string => {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
      message = String(error.message);
    } else if (typeof error === 'string') {
      message = error;
    } else {
      message = 'Something went wrong';
    }
  
    return message;
  };

const api = ()=>{
    
    function fetchWithToken(method:'get' | 'post', url?:string, data:any = {}) {
        return axios({
          method,
          url: `${baseUrl}${url}`,
          data,
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
      }
      
    function putAccessToken(token:string){
        localStorage.setItem('token', token)
    }

    function getAccessToken(){
        return localStorage.getItem('token')
    }

    async function register(registerData: IUserRegister) {
        try {
            const {message, success, data} = await axios.post(`${baseUrl}/api/user/register`, registerData)
            if(success){
                return {message, success, data}
            }
            return {message, success}
        } catch (error) {
            const message = getErrorMessage(error)
            return {message, success: false}
        }
    }

    async function updateUser(id:string, updateData:IUserUpdate){
       try {
        const {message, success} = await fetchWithToken('post','/api/user/update/'+id, updateData)
        return {message, success}
       } catch (error) {
        const message = getErrorMessage(error)
        return {message, success: false}
       }
    }

    async function login(loginData:IUserLogin){
        try {
            const {message, success, data} = await axios.post(`${baseUrl}/api/auth/login`, loginData)
        if(success){
            return {message, success, data}
        }
        return {message, success}
        } catch (error) {
            const message = getErrorMessage(error)
            return {message, success: false}
        }
    }


    return {
        putAccessToken,
        getAccessToken,
        register,
        updateUser,
        login
    }
}

export default api