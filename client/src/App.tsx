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
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
