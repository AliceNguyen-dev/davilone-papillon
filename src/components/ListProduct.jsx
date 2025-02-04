import React from 'react';
import Product from './Product';

import './ListProduct.scss'

const products = [
  {
    id: 1,
    class: 'img01',
    title: 'Montre pour Femme',
    description: 'Montre',
    price: 35,
    image: 'https://cdn.pixabay.com/photo/2013/06/21/21/13/watch-140487_1280.jpg'
  },
  {
    id: 2,
    class: 'img02',
    title: 'Montre',
    description: 'This is a description of product 2',
    price: 9.99,
    image: 'https://cdn.pixabay.com/photo/2013/06/21/21/13/watch-140487_1280.jpg'
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