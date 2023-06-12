
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './pages/login'
import { MainLayout } from './pages/mainLayout'
import { NotFound } from './pages/notFound'
import { About } from './pages/about'
import { Products } from './pages/products'
import { DetailProduct } from './components/DetailProduct'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<MainLayout />}>
          <Route path='/produtos' element={<Products />}/>
          <Route path='/produto/:_id' element={<DetailProduct />}/>
        </Route>
        <Route path='/sobre' element={<About />}/>
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
