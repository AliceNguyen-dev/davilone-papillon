import React from 'react';
import Product from './Product';

const products = [
  {
    id: 1,
    title: 'Montre pour Femme',
    description: 'Montre',
    price: 35,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is a description of product 2',
    price: 9.99,
    image: 'https://via.placeholder.com/150'
  },
  // Add more products here
];

const ListProduct = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListProduct;