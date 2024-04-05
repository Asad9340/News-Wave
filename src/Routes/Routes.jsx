import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../components/About";
import Career from './../components/Career';
import LogIn from "../Pages/LogIn-LogOut/LogIn";
import Register from "../Pages/LogIn-LogOut/Register";
import SingleNewsDetails from "../components/SingleNewsDetails";

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
      },
      {
        path: '/login',
        element:<LogIn/>
      },
      {
        path: '/register',
        element:<Register/>
      },
      {
        path: '/singleNewsDetails',
        element:<SingleNewsDetails/>
      }
    ]
  }
])

export default router;