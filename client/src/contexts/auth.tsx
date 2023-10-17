import { createContext } from "react";
import { IUserProps } from "../interfaces/userProps";

type IAuthContextProps = {
    isAuthenticated: boolean;
    user: IUserProps | null; 
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps | undefined>({} as IAuthContextProps)