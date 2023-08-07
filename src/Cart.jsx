// src/Cart.js
import React from 'react';

const Cart = ({ cartItems, cartTotal, checkout }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>
            <span> : ${item.price.toFixed(2)}</span>
          </div>
        ))}
        
      </div>
      <p>Total: ${cartTotal.toFixed(2)}</p>
      <button className="checkout-button" onClick={checkout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
