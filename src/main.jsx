import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import cartStore from './Redux/CartStore.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <BrowserRouter>
  <Provider store={cartStore}>
  <App/> 
  </Provider>
  
  </BrowserRouter>

  </StrictMode>,
)
