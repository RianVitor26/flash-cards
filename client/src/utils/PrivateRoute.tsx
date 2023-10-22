import { useContext } from "react";
import { AuthContext, IAuthProviderProps } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: IAuthProviderProps) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
