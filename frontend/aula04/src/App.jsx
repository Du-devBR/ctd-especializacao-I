import { Cards } from "../../aula04/src/Components/Cards";
import PropTypes from "prop-types"
import { calcurIdade, filtraNumerosPares, getProducts } from "./utils";
import { useState } from "react";
import { useEffect } from "react";

export function App() {

  const idadeCalculada = calcurIdade()
  const listaDePares = filtraNumerosPares([1,2,3,4,5])
  const [products, setProducts] = useState()

  async function getApiProducts(){
    const {title} = await getProducts(1)
    setProducts(title)

  }

  useEffect(() => {
    getApiProducts()
  }, [])

  return(
    <Cards name={products} />
  )
}
