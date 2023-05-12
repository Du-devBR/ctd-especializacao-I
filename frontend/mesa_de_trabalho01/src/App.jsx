import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { MainLayout } from "./components/mainLayout";
import { MainProduct } from "./components/mainProduct";
import MyProvider from "./contexts";
import { DetailProduct } from "./pages/detailProduct";

export function App() {
  return(
      <BrowserRouter>
        <MyProvider>
          <Routes>
            <Route path='/login' element= {<Login />}/>
            <Route path='/' element={<MainLayout />}>
              <Route path='/home' element= {<Home />}/>
              <Route path='/produto/:id' element= {<DetailProduct />} />
              <Route path="" element={<Navigate to={'/login'} />} />
            </Route>
          </Routes>
        </MyProvider>
      </BrowserRouter>
  )
}
