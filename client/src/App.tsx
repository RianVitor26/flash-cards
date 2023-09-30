import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
