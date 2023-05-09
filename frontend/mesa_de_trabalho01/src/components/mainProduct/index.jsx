import './style.sass'

export function MainProduct(props){

  return(
    <div className="container-main-product">
      <img src={props.data.thumbnail} alt="" />
      <div className="info-product">
        <div className="content">
          <h2 className='title-product'>{props.data.title}</h2>
          <span className='category-product'>{props.data.category}</span>
          <span className='price-product'>{`R$ ${props.data.price}`}</span>
        </div>
        <div className="content-description">
          <p className='description-product'>{props.data.description}</p>
        </div>
      </div>
    </div>
  )
}
