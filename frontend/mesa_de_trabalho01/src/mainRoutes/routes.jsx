import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProvider from "../contexts";
import { Login } from "../pages/login";
import { MainLayout } from "../components/mainLayout";
import { Home } from "../pages/home";
import { MainProduct } from "../components/mainProduct";

export function RoutesPage(){
      <BrowserRouter>
        <MyProvider>
          <Routes>
            <Route path='/login' element= {<Login />}/>
            <Route path='/' element={<MainLayout />}>
              <Route path='/home' element= {<Home />}/>
              <Route path='/produto' element= {<MainProduct />} />
            </Route>
          </Routes>
        </MyProvider>
      </BrowserRouter>
}
