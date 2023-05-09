import './style.sass'
import {Link} from 'react-router-dom'

export function Card(props){
  return(
      <Link to={`/produto/${props.data.id}`}>
        <div className="container-card">
          <img src={props.data.thumbnail} alt="" />
          <div className="info-product">
            <p className='description-product'>{props.data.description}</p>
            <span className='category-product'>{props.data.category}</span>
            <span className='price-product'>{`R$ ${props.data.price}`}</span>
          </div>
        </div>
      </Link>
  )
}
