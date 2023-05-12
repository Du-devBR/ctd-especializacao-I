import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from '../header'
import './style.sass'

export function MainLayout(){

  const navigate = useNavigate();
  
  return(
    <>
      <Header />
      <section className='container'>
        <Outlet />
      </section>
    </>
  )
}
