import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path: "/",
        element: <Home /> 
      },
      {
        path: "*",
        element: <NotFound />
      }  
    ]
  }
]) 

export default router