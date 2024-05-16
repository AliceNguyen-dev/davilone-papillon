import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;