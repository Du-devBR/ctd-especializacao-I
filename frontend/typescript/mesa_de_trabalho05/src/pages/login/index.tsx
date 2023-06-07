import { useState } from "react"
import { ResponseLogin } from "./types"


export function Login(){

  const [formData, setFormData] = useState<ResponseLogin>({
    user: "",
    password: ""
  })

  function submitLogin(event:any){
    event.preventDefault()
    if(formData.user.length >= 3 && formData.password.length >= 6 ){
      console.log(formData)
    }else{
      alert("Campos devem ser preenchidos")
    }

  }

  return (
    <div className="flex w-full min-h-screen bg-primaryColor items-center justify-center">
      <form
        action=""
        className="flex flex-col items-center bg-white py-12 px-10 gap-5 rounded-xl"
        onSubmit={(event) => submitLogin(event)}
        >
        <h1 className="text-xl text-txtBlackColor2 font-bold">Login</h1>
        <p className="text-black font-light text-base">Entre com seus dados corretamente para acessar o sistema.</p>
        <input
          className="flex w-full bg-grayColor py-2 px-4 text-txtBlackColor text-base placeholder:text-placeholderColor rounded-xl"
          type="text"
          placeholder="Digite seu email"
          onChange={(event) => setFormData({...formData, user : event.target.value})}
        />
        <input
          className="flex w-full bg-grayColor py-2 px-4 text-txtBlackColor text-base placeholder:text-placeholderColor rounded-xl"
          type="password"
          placeholder="Digite sua senha"
          onChange={(event) => setFormData({...formData, password : event.target.value})}
        />
        <button
          className="bg-primaryColor py-2 w-full rounded-xl text-base font-normal text-black hover:bg-bgBtnHover duration-700 hover:shadow-lg"
          type="submit"
            >
              Entrar
        </button>
      </form>
    </div>
  )
}
