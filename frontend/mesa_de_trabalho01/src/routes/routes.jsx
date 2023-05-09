import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { MainLayout } from "../components/mainLayout"
import { Home } from "../pages/home"
import { DetailProduct } from "../pages/detailProduct"

export function Routes(){

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
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
