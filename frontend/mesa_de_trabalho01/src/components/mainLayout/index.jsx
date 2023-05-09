import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import './style.sass'

export function MainLayout(){
  return(
    <>
      <Header />
      <section className='container'>
        <Outlet />
      </section>
    </>
  )
}
