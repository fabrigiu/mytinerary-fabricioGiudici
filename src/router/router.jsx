import Main from '../layouts/Main'
import Home  from '../pages/Home'
import { Cities } from "../pages/Cities";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />
            }
        ]
    }
]);

export default router;