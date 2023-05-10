import { useRef } from "react"
import {Link} from 'react-router-dom'

export function Home() {

  const inputRef = useRef(null)
  const divRef = useRef(null)

  function handleCheck(){
    const inputValue = inputRef.current.value
    // alert(inputValue)

    if(inputValue < 1){
      divRef.current.style.backgroundColor = '#f05656'
    }else{
      divRef.current.style.backgroundColor = '#4846e2'
    }

  }

  const products = [
    {
      id: 1,
      name: 'arroz',
      price: 20,
    },
    {
      id: 2,
      name: 'feijao',
      price: 10,
    },
    {
      id: 3,
      name: 'carne',
      price: 30,
    }
  ]

  return (
    <div ref={divRef}>
      <h1>Hello word</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="digite um valor"
      />
      <button onClick={handleCheck}>clique</button>
      {
        products.map(product => (
          <Link key={product.id} to={`produto/${product.id}`} >
            <li>{product.name}</li>
          </Link>
        ))
      }
    </div>
  )
}

{/*
  - Fixado o funcionamento do useRef e como podemos declarar uma referencia para obter
  o valor de um input ou alterar um componente atraves da referencia. É uma otima opção para
  quando lidamos como diversos inputs.

  - Fixado o duncionamento de rotas atraves do react-router-dom, usando BrowserRouter, Link e Routes para
  mapear rotas para componentes.

  - Fixado o hook useParam() para obter o paramentro que esta sendo passado no browser e poder navegae entre
  os componenetes.
*/}
