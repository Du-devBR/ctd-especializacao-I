import { useContext } from "react"
import { useState } from "react"
import { MyContext } from "../contexts"

export function Login() {

  const {changeUseEmail} = useContext(MyContext)

  const [formData, setFormData] = useState({email: "", password: ""})

  function logar(){


    changeUseEmail(formData.email)

  }


  return (
    <>
      <h1>login</h1>
      <input
        onChange={(event) => setFormData({...formData, email: event.target.value})}
        value={formData.email}
        type="text"
        placeholder="email"
      />

      <input
        onChange={(event) => setFormData({...formData, password: event.target.value})}
        value={formData.password}
        type="text"
        placeholder="password"
      />

      <button onClick={logar}>enviar</button>
    </>
  )
}
