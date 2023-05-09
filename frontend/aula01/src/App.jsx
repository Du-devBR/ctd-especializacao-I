import { useEffect, useState } from "react"
import axios from "axios"

export function App() {
  const [numero, setNumero] = useState(0)
  const [todos, setTodos] = useState([])

  function incremet(){
    setNumero(numero + 1)
  }

  useEffect(() => {
    getLista()


  }, [])

  async function getLista(){
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    )
    console.log(response)
    setTodos(response.data)
  }

  return(
    <>
      <h1>{numero}</h1>
      {
        todos.map((todo) => (
          <li key={todo.id}>{JSON.stringify(todo.title)}</li>
        ))
      }
      <button onClick={incremet}>+</button>
    </>
  )

}
