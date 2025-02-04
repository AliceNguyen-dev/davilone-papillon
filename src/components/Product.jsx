import React from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes pour la validation des props

const Product = ({ product }) => {
  if (!product) {
    return <div>Produit non trouvé.</div>; // Gestion du cas où le produit est null ou undefined
  }

  const { image, title, description, price } = product; // Destructuring pour simplifier le code

  return (
    <div className="product-card">
      {image && <img src={image} alt={title} className="product-image" />} {/* Affichage conditionnel de l'image */}
      <div className="product-details"> {/* Ajout d'un conteneur pour les détails */}
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">{price ? `${price} €` : 'Prix non communiqué'}</p> {/* Formatage du prix */}
        <button className="add-to-cart">Ajouter au panier</button> {/* Texte du bouton plus clair */}
      </div>
    </div>
  );
};

// Validation des props avec PropTypes
Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Product;