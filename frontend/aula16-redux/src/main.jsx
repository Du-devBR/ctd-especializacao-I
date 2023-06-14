import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import CounterReducer from './reducers/counter-reducer.js'

const store = createStore(
  combineReducers({
    counter: CounterReducer
  })
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
