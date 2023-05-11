import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom"
import { MainLayout } from "../components/mainLayout"
import { Home } from "../pages/home"
import { DetailProduct } from "../pages/detailProduct"
import { Login } from "../pages/login"

export function Routes(){

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Navigate to="/login" replace={true} />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "home",
          element: <Home />
        },
        {
          path: 'produto/:id',
          element: <DetailProduct />
        }
      ]
    }
  ])

  return(
    <RouterProvider router={appRouter} />
  )
}
