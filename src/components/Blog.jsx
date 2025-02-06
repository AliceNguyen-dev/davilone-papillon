import React, { useState, useEffect } from 'react';
import logoBlog from '../assets/img/Davilone-reg.png';
import './Blog.scss';

function Blog() {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    image: null,
    name: '',
    avis: '',
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    fetch('/api/articles') // Remplacez par l'URL correcte de votre backend
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setArticles(data))
      .catch(error => console.error('Erreur lors de la récupération des articles:', error));
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      setNewArticle({ ...newArticle, image: e.target.files[0] });
    } else {
      setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
    }
  };

  const handleAddArticle = () => {
    if (!newArticle.image) {
      alert("Veuillez sélectionner une image.");
      return;
    }

    const formData = new FormData();
    formData.append('image', newArticle.image);
    formData.append('name', newArticle.name);
    formData.append('avis', newArticle.avis);

    fetch('/api/articles', { // Remplacez par l'URL correcte de votre backend
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
        setArticles([...articles, data]);
        setNewArticle({ image: null, name: '', avis: '' });
        console.log('Article ajouté avec succès :', data);
      })
      .catch(error => {
        console.error("Erreur lors de l'ajout de l'article :", error);
        alert("Une erreur s'est produite lors de l'ajout de l'article. Veuillez réessayer.");
      });
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
              <span className="blog-d-title">Blog </span>Davilone Papillon</h1>

            <div className="d-tab-art1">
              <div className="-add-box-art">
                <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
                <input type="text" name="name" placeholder="Pseudo" value={newArticle.name} onChange={handleInputChange} />
                <textarea name="avis" placeholder="Message" value={newArticle.avis} onChange={handleInputChange} />
                <button onClick={handleAddArticle}>Ajouter un article</button>
              </div>

              {articles.map((article, index) => (
                <div className="d-art-card" key={index}>
                  <img className="art-d-img" src={article.image} alt={article.name} />
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