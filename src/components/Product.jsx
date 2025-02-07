import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss'

const Product = ({ product }) => {
  if (!product) {
    return <div>Produit non trouvé.</div>;
  }

  const { image, title, description, price } = product;

  return (
    <div className="product-card">
      {/* Correction ici: utiliser src={image} directement */}
      {image && <img src={image} alt={title} className="product-image" />} 
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">{price ? `${price}` : 'Prix non communiqué'}</p>

        <div className="btn-send-art">
          <button className="add-to-cart">Ajouter au panier</button>
        </div>
        
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Prix peut être string ou number
  }),
};

export default Product;