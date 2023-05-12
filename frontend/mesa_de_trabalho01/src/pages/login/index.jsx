import { useContext, useEffect, useState } from 'react'
import './style.sass'
import { MyContext } from '../../contexts'
import {useNavigate} from 'react-router-dom'
import { Footer } from '../../components/footer'

export function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const {handleEmailUser} = useContext(MyContext)

  function submitFormLogin(){
    handleEmailUser(email)
  }

  return (
    <div className='container-login'>
      <header className='container-header'>
        <h1>Shop Products</h1>
      </header>
      <div className="container-form">
        <form className='form' action="" onSubmit={submitFormLogin}>
          <h2>Login</h2>
          <p>Insira seus dados para entrar no sistema</p>
          <div className="input-email">
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              placeholder='E-mail'
            />
          </div>
          <div className="input-password">
            <input
            onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder='Senha'
            />
          </div>
          <button
            className='btn-login'
            >
              Entrar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
