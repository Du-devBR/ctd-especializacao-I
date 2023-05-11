import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './home'
import { Product } from '../../aula02/src/product'
import { Layout } from './layouts/layout'
import { Login } from './login'
import { MyProvider } from './contexts'

export function App() {

  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path='/login' element= {<Login />}/>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element= {<Home />}/>
            <Route path='/produto' element= {<Product />} />
          </Route>
        </Routes>
      </MyProvider>
    </BrowserRouter>
  )
}
