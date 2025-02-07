import React, { useState } from 'react';
import './Login.scss';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez envoyer les données du formulaire à votre backend
    console.log(formData);
  };

  return (
    <div className="login-container">

      <div className="back-btn-">
        <Link to="/user">
          <button className="back-button">Retour</button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Adresse e-mail :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-button"> 
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;