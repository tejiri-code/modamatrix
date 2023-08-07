// src/App.js
import React, { useState } from 'react';
import Product from './ProductCustomization';
import Cart from './Cart';


const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      imageSrc: 'Tanktop.png',
      alt: 'Teal Tanktop',
      name: 'Teal Tanktop',
      price: 10.99,
    },
    {
      imageSrc: 'Letterman Jacket.png',
      alt: 'Letterman Jacket',
      name: 'Letterman Jacket',
      price: 24.99,
    },
    {
      imageSrc: 'Hoodie Jacket.png',
      alt: 'Hoodie Jacket',
      name: 'Hoodie',
      price: 15.99,
    },
    {
      imageSrc: 'Skirt (HD) (1).png',
      alt: 'Blue Skirt',
      name: 'Blue Skirt',
      price: 12.99,
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add some products before checking out.');
    } else {
      const confirmCheckout = window.confirm('Do you want to proceed to checkout?');
      if (confirmCheckout) {
        alert('Thank you for your purchase!');
        setCart([]);
      }
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Moda Matrix</h1>
        <p>Style in Every Stitch, Elegance in Every Thread</p>
      </header>
      <div className="products">
        {products.map((product, index) => (
          <Product
            key={index}
            imageSrc={product.imageSrc}
            alt={product.alt}
            name={product.name}
            price={product.price}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
      <Cart cartItems={cart} cartTotal={cart.reduce((total, item) => total + item.price, 0)} checkout={checkout} />
    </div>
  );
};

export default App;
