import {useSelector, useDispatch} from 'react-redux'


export function App() {

  const {numero} = useSelector((state) => state.counter);

  const dispatch = useDispatch()
  return (
    <>
    <h1>{numero}</h1>
    <button onClick={()=> dispatch({type: "INCREMENT"})}>+</button>
    <button onClick={() => dispatch({type: 'DECREMENT'})} >-</button>
    <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </>
  )
}
