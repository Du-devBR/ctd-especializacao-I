import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import ProductsReducer from './reducers/products-reducer.js'

const store = createStore(
  combineReducers({
    products: ProductsReducer,
  })
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
