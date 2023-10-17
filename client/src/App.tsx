import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { DeckDetail } from "./pages/DeckDetail";

import { AuthContext } from "./contexts/auth";
import { useState } from "react";
import { IUserProps } from "./interfaces/userInterface";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/decks",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/decks/id",
    element: <DeckDetail />,
  },
]);

function App() {
  const [user, setUser] = useState<IUserProps | null>(null)

  const login = (email: string, password: string): void => {
    console.log("login:", { email, password });
    const user: IUserProps = { id: 1, email };
    setUser(user);
  };

  const logout = () => { }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App
