import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setCartItems(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="abc text-center">
      <h3>
        Shopping Cart <FontAwesomeIcon icon={faShoppingBasket} />
      </h3>
      <Link to={"/products"} className="continue-shopping-link">
        Continue Shopping
      </Link>

      <div className="cart-items-container">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your cart is empty</div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-price">Price {item.price}/-</div>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-total">Total: {totalPrice}/-</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
