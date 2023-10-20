import { ReactNode, createContext, useState } from "react";
import { IUserProps } from "../interfaces/userProps";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/users";

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

    const navigate = useNavigate()

    const [user, setUser] = useState<IUserProps | null>(null);

    const login = async (email: string, password: string) => {

        const { data } = await createSession(email, password)

        if (data) {
            const user: IUserProps = {
                id: data.id,
                name: data.name,
                email: data.email,
                token: data.token
            };
            localStorage.setItem('token', JSON.stringify(data.token))
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user);
            navigate("/decks")
        }
    };

    const logout = () => { 
        setUser(null)
        localStorage.clear()
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}