import { IUserProps } from '../interfaces/userProps'
import { api } from './config';

export const createSession = async (email: string, password: string) => {
    return await api.post('/auth/login', {email, password})
}

export const createUser = async (name: string, email: string, password: string): Promise<IUserProps> => {
    return await api.post('/users', {name, email, password})
}

