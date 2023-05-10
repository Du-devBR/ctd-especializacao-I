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
  const [listCard, setListCard] = useState([])

  useEffect(() => {
    getProductById()
    getAllProduct()
  }, [id])

  //Utilizado esse useEffect para pegar os produtos que foram salvas na na função getAllProducts
  //Atualiza quando os state do productsCards e atualizado.
  useEffect(() => {
    const filteredProducts = productsCard.filter((productCard) => productCard.id !== product.id);
    setListCard(filteredProducts)
  }, [productsCard])

  // Aqui lista todos os produtos para a parte de ver mais produtos

  async function getAllProduct(){
    const response = await axios.get(
      `https://dummyjson.com/products`
    )
    setProductsCard(response.data.products)
  }

  // Aqui a api busca por id

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
            listCard.slice(0, 4).map((productCard) => (
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
