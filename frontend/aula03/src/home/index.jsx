import { useContext } from "react"
import { MyContext } from "../contexts"

export function Home() {

  const {nome} = useContext(MyContext)
  return (
    <>
      <h1>{nome}</h1>
    </>
  )
}
