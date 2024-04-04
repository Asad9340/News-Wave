import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../components/About";
import Career from './../components/Career';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Root/>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/career',
        element:<Career/>
      }
    ]
  }
])

export default router;