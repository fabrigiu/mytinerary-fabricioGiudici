import Main from "../layouts/Main";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import City from "../pages/City";
import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/cities/:id",
        element: <City />,
      },
      {
        path: "/signin",
        element: (
          <ProtectedRoute path="/">
            <Signin />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute path="/">
            <Signup />
          </ProtectedRoute>
        ),
      },

      {
        path: "*",
        element: (
          <h1 className="bg-black text-white text-center drop-shadow-lightShadow">
            Error
          </h1>
        ),
      },
    ],
  },
]);

export default router;
