import { useEffect, useState } from 'react'
import { MainProduct } from '../../components/mainProduct'
import { Card } from '../../components/cards'
import './style.sass'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export function DetailProduct(){

  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [productsCard, setProductsCard] = useState([])

  useEffect(() => {
    getProductById()
    getAllProduct()
  }, [id])

  async function getAllProduct(){
    const response = await axios.get(
      `https://dummyjson.com/products`
    )

    setProductsCard(response.data.products)
  }

  async function getProductById(){
    const response = await axios.get(
      `https://dummyjson.com/products/${id}`
    )

    setProduct(response.data)
  }
  return(
    <div className="container-detail">
      <section className='section-main-product'>
        <MainProduct
          data={product}
        />
      </section>
      <section className='section-other-products'>
        <h2>Veja outros produtos</h2>
        <div className="container-section-cards">
          {
            productsCard.slice(0, 4).map((productCard) => (
              <Card
                key={productCard.id}
                data={productCard}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}
