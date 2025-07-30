import { createBrowserRouter } from "react-router-dom";
import Layout from '@/components/Layout'
import { Home, NotFound, Favorite, ProductDetail } from "@/pages";

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
        path: "/favorite",
        element: <Favorite />
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      },
      {
        path: "*",
        element: <NotFound />
      }  
    ]
  }
]) 

export default router