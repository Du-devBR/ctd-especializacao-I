import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
export function App() {

  const {products} = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    price:''
  });

  return (
    <>
      <div>
        <input
          value={formData.name}
          type="text"
          placeholder="Nome do produto"
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <input
          value={formData.price}
          type="text"
          placeholder="Preço do produto"
          onChange={(event) =>
            setFormData({ ...formData, price: event.target.value })
          }
        />
        <button
          onClick={() =>{
            dispatch({type: "ADD_PRODUCT", payload: { product: formData}});
            setFormData({name: '', price: ''});
          }}
          >
            Salvar
        </button>
        <button
          onClick={() => dispatch({type: "CLEAR_LIST"})}
          >
            Reset
        </button>
        <ul>
          {
            products.map((product, index) => (
              <li key={index}>
                {
                  JSON.stringify(product)
                }
                <button
                  onClick={() => dispatch({type: 'EDIT_PRODUCT', payload: {product: formData}})}
                  >
                    Editar
                </button>
                <button
                  onClick={() => dispatch({type: "REMOVE_PRODUCT", payload: product.id})}
                  >
                    Remover
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
