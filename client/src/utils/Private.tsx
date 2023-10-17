import { useContext } from "react"
import { AuthContext, IAuthProviderProps } from "../contexts/auth"
import { Navigate } from "react-router-dom"

export const Private = ({ children }: IAuthProviderProps) => {
    const { isAuthenticated } = useContext(AuthContext)

    if(!isAuthenticated) return <Navigate to="/"/>

    return children;
  }