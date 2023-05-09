import './style.sass'
import {useParams} from 'react-router-dom'

export function DetailProduct(){

  const {id} = useParams()
  return(
    <div className="container-detail">
      <h1>Produto {id}</h1>
    </div>
  )
}
