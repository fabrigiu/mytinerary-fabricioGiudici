import Main from "../layouts/Main";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import City from "../pages/City";
import { createBrowserRouter } from "react-router-dom";

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
    ],
  },
]);

export default router;
