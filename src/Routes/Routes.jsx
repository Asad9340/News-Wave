import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Root/>,
    children: [
      {
        path: '/',
        element:<Home/>
      }
    ]
  }
])

export default router;