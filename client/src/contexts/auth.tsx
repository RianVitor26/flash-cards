import { ReactNode, createContext, useState } from "react";
import { IUserProps } from "../interfaces/userProps";
import { useNavigate } from "react-router-dom";

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

    const login = (email: string, password: string): void => {
        console.log("login:", { email, password });
        if (password === 'secret') {
            const user: IUserProps = { id: 1, email };
            setUser(user);
            navigate("/decks")
        }
    };

    const logout = () => { }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}