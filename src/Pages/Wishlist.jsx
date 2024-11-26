import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../Redux/Slice/WishlistSlice";
import { addToCart } from "../Redux/Slice/CartSlice";

function Wishlist() {
  const { Wishlist } = useSelector((state) => state.WishListReducer);
console.log(Wishlist);
const dispatch= useDispatch()
const handleCart=(product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromWishlist(product?.id))
}

  return (
    <>
      <Header />
      <div style={{ marginTop: "50px" }} className="container-fluid"> 
        <Row>

          {Wishlist.length > 0
            ? Wishlist.map(product => (
                <Col>
                  <Card style={{ width: "18rem" }} className="m-2">
                    <Link to={`/view/${product?.id}`}>
                      {" "}  
                      <Card.Img variant="top" src={product?.thumbnail} />
                    </Link>
                    <Card.Body>
                      <Card.Title className="text-danger fw-bolder">
                        ${product?.title.slice(0, 10)}...
                      </Card.Title>
                      <Card.Text>
                        {product?.description.slice(0, 20)}...
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button className="btn btn-light"onClick={()=>dispatch(removeFromWishlist(product?.id))}>
                        <i class="fa-solid fa-trash text-danger" ></i>
                        </Button>
                        <Button className="btn btn-light" onClick={()=>handleCart(product)}>
                          <i class="fa-solid fa-cart-shopping"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
            ))
            : 
            <div className="text-center">
              <img src="https://lh5.googleusercontent.com/proxy/b4cG7GF2cHoOuYfcbZhUKJf9xrSctTFMipedR9EjXAuhG-GuP6rd-lVhhFtpfgsvvpM" alt="" style={{width:"400px"}}/>
              <h2>your cart is empty</h2>
              </div>}
        </Row>
      </div>
    </>
  );    
}

export default Wishlist;