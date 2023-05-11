import {Outlet} from 'react-router-dom'
export function Layout ({children}){
  const isLogged = false
  return(
    <div>
      <nav style={{height: 80, background: 'blue'}} >

      </nav>
      <Outlet/>
    </div>
  )
}
