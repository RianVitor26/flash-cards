import { ReactNode, createContext, useEffect, useState } from "react";
import { IUserProps } from "../interfaces/userProps";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/usersServices";
import { api } from "../services/config";

export interface IAuthProps {
    login: (email: string, password: string) => void;
}

export interface IAuthProviderProps {
    children: ReactNode;
}

type IAuthContextProps = {
    isAuthenticated: boolean;
    user: IUserProps | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUserProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (user && token) {
            setUser(JSON.parse(user));
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        setIsLoading(false);
    }, [])

    const login = async (email: string, password: string) => {
        const { data } = await createSession(email, password)

        if (data) {
            const user: IUserProps = {
                id: data.id,
                name: data.name,
                email: data.email,
                token: data.token
            };
            setUser(user);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(user));
            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            console.log(data.token)
            navigate("/decks");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.clear();
        api.defaults.headers.common['Authorization'] = null;
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {!isLoading ? children : null}
        </AuthContext.Provider>
    )
}
