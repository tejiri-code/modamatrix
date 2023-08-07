// src/Product.js
import React from 'react';
import tealTanktopImage from './images/Tanktop.png';
import lettermanJacketImage from './images/Letterman Jacket.png';
import hoodieImage from './images/Hoodie Jacket.png';
import blueSkirtImage from './images/Skirt (HD) (1).png';

const Product = ({ imageSrc, alt, name, price, addToCart }) => {
  let productImage;

  switch (imageSrc) {
    case 'Tanktop.png':
      productImage = tealTanktopImage;
      break;
    case 'Letterman Jacket.png':
      productImage = lettermanJacketImage;
      break;
    case 'Hoodie Jacket.png':
      productImage = hoodieImage;
      break;
    case 'Skirt (HD) (1).png':
      productImage = blueSkirtImage;
      break;
    default:
      productImage = tealTanktopImage;
  }

  return (
    <div className="product">
      <img src={productImage} alt={alt} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button className="buy-button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
