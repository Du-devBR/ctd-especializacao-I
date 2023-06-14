const State = {
  products: []
}
export default function ProductsReducer(state = State, action){
  if(action.type === "ADD_PRODUCT"){
    const copyState = { ...state};
    copyState.products.push({...action.payload, id: Date.now()})
    return {...copyState}
  }

  if(action.type === "CLEAR_LIST"){
    return{
      ...state, products: []
    }
  }

  if(action.type === "REMOVE_PRODUCT"){
    const copyState = {...state}
    copyState.products = copyState.products.filter(
      product => product.id !== action.payload
    )

    return {...copyState}
  }

  return state;


}
