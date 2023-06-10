import { ResponseProducts } from "../../pages/products/type";

export function Card({title, company, price}:ResponseProducts){
  return(
    <div>
      <p>{title}</p>
    </div>
  )
}
