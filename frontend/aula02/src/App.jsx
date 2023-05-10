import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './home'
import { Product } from './product'
export function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='produto/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}
