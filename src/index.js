import ReactDOM from 'react-dom/client'
import './index.scss'
import { legacy_createStore as createStore,applyMiddleware, compose} from 'redux'
import React from 'react'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import App from './App'
import {rootReduser} from './store/rootReduser'



const store = createStore(rootReduser, compose(
  applyMiddleware(thunk)
))



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>  
        
)


