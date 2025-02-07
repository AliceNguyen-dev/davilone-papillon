import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss'

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Remplacez par votre logique pour récupérer les détails du produit en utilisant l'id
    // fetchProductDetails(id)
    //   .then(data => setProduct(data))
    //   .catch(error => console.error("Erreur lors de la récupération du produit :", error));

    // Exemple de données fictives
    const mockProducts = [
      // ... (votre tableau de produits)
    ];
    const foundProduct = mockProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Produit non trouvé.</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetails;