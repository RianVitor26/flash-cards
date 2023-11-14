import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Decks } from "./pages/Decks";
import { Cards } from "./pages/Cards";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    ),
  },
  {
    path: "/home",
    element: (
      <AuthProvider>
        <Home />
      </AuthProvider>
    ),
  },
  {
    path: "/decks",
    element: (
      <AuthProvider>
        <PrivateRoute>
          <Decks />
        </PrivateRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    ),
  },
  {
    path: "/decks/:deckId/cards",
    element: (
      <AuthProvider>
        <PrivateRoute>
          <Cards />
        </PrivateRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthProvider>
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      </AuthProvider>
    ),
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
