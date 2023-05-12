import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext({})

 const MyProvider = ({children}) => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const responseLocalStorage = localStorage.getItem("email")

    if(responseLocalStorage){
      setUserEmail(responseLocalStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("email", userEmail)
  }, [userEmail])


  function handleEmailUser(email){
    setUserEmail(email)
    navigate("/home")

  }

  function logout(){
    localStorage.clear()
    navigate('/login')
  }

  return(
    <MyContext.Provider value={{userEmail, handleEmailUser, logout}}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider;
