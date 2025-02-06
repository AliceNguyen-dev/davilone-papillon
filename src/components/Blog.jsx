import React, { useState, useEffect } from 'react';
import logoBlog from '../assets/img/Davilone-reg.png';
import './Blog.scss';
import ProfilBlog from '../assets/img/profil-blog.png'; // Importez l'image

function Blog() {
  const [articles, setArticles] = useState([
    {
      image: ProfilBlog, // Utilisez directement le chemin de l'image
      name: 'John Doe',
      avis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat quisquam, corrupti nisi minima fuga et velit ratione ea quasi similique. Soluta reprehenderit quos, eius eaque voluptas harum. Illo, itaque!',
    },
  ]);

  const [newArticle, setNewArticle] = useState({
    image: null, // Pour l'image du formulaire, utilisez null initialement
    name: '',
    avis: '',
  });

  useEffect(() => {
    // Si vous avez besoin de récupérer des articles depuis un backend, faites-le ici.
    // fetchArticles();
  }, []);

  // Si vous avez besoin de récupérer des articles depuis un backend, décommentez et adaptez ceci.
  /*
  const fetchArticles = () => {
    fetch('/api/articles') // Remplacez par l'URL de votre API
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Erreur lors de la récupération des articles:', error));
  };
  */

  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      setNewArticle({ ...newArticle, image: e.target.files[0] }); // Stockez le fichier image
    } else {
      setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
    }
  };

  const handleAddArticle = () => {
    const formData = new FormData();
    formData.append('image', newArticle.image);
    formData.append('name', newArticle.name);
    formData.append('avis', newArticle.avis);

    // Si vous avez besoin d'envoyer les données au backend, décommentez et adaptez ceci.
    /*
    fetch('/api/articles', { // Remplacez par l'URL de votre API
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setArticles([...articles, data]); // Ajoutez le nouvel article à la liste
        setNewArticle({ image: null, name: '', avis: '' }); // Réinitialisez le formulaire
      })
      .catch(error => {
        console.error("Erreur lors de l'ajout de l'article :", error);
      });
    */

    // Pour l'exemple, on ajoute directement l'article à la liste.
    setArticles([...articles, newArticle]);
    setNewArticle({ image: null, name: '', avis: '' });
  };

  return (
    <div>
      <div className="d-blog">
        <div className="d--log">
          <img className="d-log-ic" src={logoBlog} alt="blogicone" />
        </div>

        <div className="d-blog-int">
          <div className="d-blog-main">
            <h1 className="tit-blog">
              <span className="blog-d-title">Blog </span>Davilone Papillon
            </h1>

            <div className="d-tab-art1">
              <div className="-add-box-art">
                <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
                <input
                  type="text"
                  name="name"
                  placeholder="Pseudo"
                  value={newArticle.name}
                  onChange={handleInputChange}
                />
                <textarea
                  name="avis"
                  placeholder="Message"
                  value={newArticle.avis}
                  onChange={handleInputChange}
                />
                <button onClick={handleAddArticle}>Ajouter un article</button>
              </div>

              {articles.map((article, index) => (
                <div className="d-art-card" key={index}>
                  <img className="art-d-img" src={article.image} alt="img-art" />
                  <div className="--box-art-blog">
                    <p className="user-art">{article.name}</p>
                    <p className="--desc-box">{article.avis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;