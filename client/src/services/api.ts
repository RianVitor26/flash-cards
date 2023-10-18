import axios from 'axios'
import { IUserProps } from '../interfaces/userProps'

export const api = axios.create({
    baseURL: "http://localhost:3001/api/v1"
})  

export const createSession = async (email: string, password: string) => {
    return api.post('/login', {email, password})
}

export const getAllUsers = async (): Promise<IUserProps[]> => {
    const response = await api.get('/users');
    return response.data; 
  };

