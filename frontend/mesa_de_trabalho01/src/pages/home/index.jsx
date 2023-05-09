import { useEffect, useState } from 'react'
import { Card } from '../../components/cards'
import { Header } from '../../components/header'
import './styles.sass'
import axios  from "axios"

export function Home(){

  const [products, setProducts] = useState([])

  useEffect(() => {
    getListProductsApi()
  }, [])

  async function getListProductsApi(){

    const response = await axios.get(
      "https://dummyjson.com/products"
    )

    setProducts(response.data.products)
  }
  return(
    <div className='container-home'>
      {
        products.map(product => (
          <Card
            key={product.id}
            data={product}
          />
        ))
      }
    </div>
  )
}
