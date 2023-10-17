import { ReactNode, createContext, useState } from "react";
import { IUserProps } from "../interfaces/userProps";

export interface IAuthProps {
    login: (email: string, password: string) => void;
}

interface IAuthProviderProps {
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

    const [user, setUser] = useState<IUserProps | null>(null);

    const login = (email: string, password: string): void => {
        console.log("login:", { email, password });
        const user: IUserProps = { id: 1, email };
        setUser(user);
    };

    const logout = () => { }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}