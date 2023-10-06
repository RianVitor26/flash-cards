import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { DeckDetail } from "./pages/DeckDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path: "/decks",
    element: <Home/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/decks/id",
    element: <DeckDetail/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
