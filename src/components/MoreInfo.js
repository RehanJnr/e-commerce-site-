import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MoreInfo.css";
import { ProductContext } from "./ProductContext";

const MoreInfo = () => {
  const { id } = useParams();
  const {addToCart}=useContext(ProductContext)
  const navigate = useNavigate()
 
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      // console.log(data)
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const handleCart =() => {
    addToCart(product);
    navigate('/cart')

     console.log(product)
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const index = cart.findIndex(item => item.id === product.id);
      if (index === -1) {
        // If the product is not already in the cart, add it with a quantity of 1
        cart.push({...product, quantity: 1});
      } else {
        // If the product is already in the cart, increase its quantity by 1
        cart[index].quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    
  
    
      }
      const handleBuyNow = () => {
        addToCart(product);
        navigate("/cart");
      };
  
  if (!Object.keys(product).length > 0) return <div>Loading...</div>;
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="category1">
            {product?.category}

            <div className="title1"> {product?.title} </div>

            <div className="price1">
              <span className="priceAll">
                PRICE:
                {product?.price}
              </span>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleBuyNow}>Buy it now</button>
            <button onClick={() => handleCart(product)}>Add to Card</button>
          </div>
        </div>
        <div className="col-md-2">
          <img
            style={{ width: "120px" }}
            alt={product?.title}
            src={product?.image}
          ></img>
        </div>
      </div>
    </>
  );
};
  
export default MoreInfo;
