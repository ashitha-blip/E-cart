   import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Header from "../Components/Header"
import { useParams } from "react-router-dom"
import { addToWishlist } from "../Redux/Slice/WishlistSlice"
import { useDispatch, useSelector } from "react-redux"




function View() {
  const{id}=useParams()
  console.log(id);
  const[product,setProduct]=useState({})
  const {Wishlist}= useSelector(state=>state.WishListReducer)
  const dispatch = useDispatch()
  useEffect(()=>{
if(localStorage.getItem("allProducts")){
  const allProducts=JSON.parse(localStorage.getItem("allProducts"))
  setProduct(allProducts.find(item=>item.id==id))
}else{
  setProduct("")
}
  },[])
  console.log(product);
   const handleWishlist=(product)=>{
    const existingProduct = Wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product alerdy exist")
    }else{
      dispatch(addToWishlist(product))
    }
   }
  return (
    <>
     <Header/>

    <div className="container mt-5 row ">
      <div className="col-lg-4">
        <img width="100%" src={product?.thumbnail} style={{width:"100%"}} alt="" />
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-6">
        <p>pid:{product?.id}</p>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        
        <h3>price: <span className='text-danger'>${product?.price}</span></h3>
        <div className="d-flex justify-content-between">
          <Button className='btn btn-outline-dark' onClick={()=>handleWishlist(product)}><i class="fa-solid fa-heart text-danger" ></i>wishlist</Button>
          <Button className='btn btn-outline-light'><i class="fa-solid fa-cart-plus text-info" ></i>Cart</Button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default View
