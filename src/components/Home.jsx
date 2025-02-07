import React, { useState, useEffect } from 'react';
import BanniDavi from '../assets/img/banni-home.png';
import Product from './Product';
import { Link } from 'react-router-dom';
import MontreArt from '../assets/img/montre-art1.jpg'; // Assurez-vous que le chemin est correct
import './Home.scss';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockProducts = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      image: MontreArt,
      title: `Montre`,
      price: `${(i + 1) * 10}€`,
    }));
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <div className="ban-h-div">
        <div className="-ban-h-tab">
          <img className="banni-h-1" src={BanniDavi} alt="banni-h" />
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
            <div className="product-card" key={product.id}>
              <Link className='link-card' to={`/product/${product.id}`}> 
                <Product product={product} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;