
import "./style.sass"
import { MyContext } from '../../contexts'
import { useContext } from "react"

export function Header(){

  const {userEmail, logout} = useContext(MyContext)
  
  function removeEmail() {
    logout()

  }
  return(
    <div className="container-header">
      <h1>Shop Products</h1>
      <div className='menu-nav'>
        <p>{userEmail}</p>
        <button onClick={removeEmail} className='btn-logout'>Sair</button>
      </div>
    </div>
  )
}
