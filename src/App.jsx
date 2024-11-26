import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Home from './Pages/Home'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/View/:id' element={<View/>}/>
        {/*requesting an invalid route,redirect to home*/ }
        <Route path='/*'element={<Navigate to={'/'}/>}/>
        
      </Routes>
      <Footer/>

    </>
  )
}

export default App
