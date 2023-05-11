import { useState } from "react"
import { useEffect } from "react"
import { createContext } from "react"

 export const MyContext = createContext({})

  export const MyProvider = ({ children }) => {

    const nome = 'Eduardo Ananias'
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
      const response = localStorage.getItem("email");

      if (response) {
        setUserEmail(response);
      }
    }, []);


    function changeUseEmail(email){
      setUserEmail(email)
      localStorage.setItem("email", email)
    }

    return (
      <MyContext.Provider value={{nome, userEmail, changeUseEmail}}>
        {children}
      </MyContext.Provider>
  )


}
