import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { DeckDetail } from "./pages/DeckDetail";
import { AuthProvider } from "./contexts/auth";
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
          <Home />
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
    path: "/decks/id",
    element: (
      <AuthProvider>
        <PrivateRoute>
          <DeckDetail />
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
