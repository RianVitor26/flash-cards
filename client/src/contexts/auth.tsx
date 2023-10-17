import { createContext } from "react";
import { IUserProps } from "../interfaces/userProps";

export interface IAuthProps {
    login: (email: string, password: string) => void;
  }

type IAuthContextProps = {
    isAuthenticated: boolean;
    user: IUserProps | null; 
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps)