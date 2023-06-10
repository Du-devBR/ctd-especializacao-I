import { useEffect, useState } from "react"
import { ResponseProducts} from "./type"
import { Card } from "../../components/card"
import { ApiDataProducts } from "../../hooks/useDataApi"



export function Products(){

  const {productsData, isFetching, error} = ApiDataProducts()

  if(isFetching){
    <h3>....carregando</h3>
  }

  if(error){
    <h3>erro ao processar</h3>
  }

  // const [products, setProducts] = useState<ResponseProducts[]>([])

  // async function getProducts(){
  //   const response = await dados

  //   setProducts(response)
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [])

  return(
    <div>
      <h2 className="flex text-xl text-txtBlackColor2 font-bold">Produtos</h2>
      <div>
        {
          productsData?.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title= {product.title}
              company = {product.company}
              price= {product.price}
            />
          ))
        }
      </div>
    </div>
  )
}
