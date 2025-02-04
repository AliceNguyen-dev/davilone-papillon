import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/config'; // Import du fichier de configuration

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({}); // State pour gérer les erreurs de validation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation en direct (facultatif)
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation finale avant l'envoi
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Si aucune erreur, envoi des données au backend
      try {
        const response = await axios.post(`${API_URL}/register`, formData);
        console.log(response.data); // Affiche la réponse du serveur
        alert("Inscription réussie !");
      } catch (error) {
        console.error(error);
        alert("Erreur lors de l'inscription. Veuillez réessayer.");
      }
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.length > 0 ? '' : 'Champ obligatoire';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email invalide';
      case 'password':
        return value.length >= 6 ? '' : 'Mot de passe trop court (min. 6 caractères)';
      default:
        return '';
    }
  };

  const validateForm = (data) => {
    const errors = {};
    for (const name in data) {
      errors[name] = validateField(name, data[name]);
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Prénom :</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <label htmlFor="lastName">Nom :</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <label htmlFor="email">Adresse e-mail :</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="password">Mot de passe :</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit">S'inscrire</button>

      {/* Affichage des erreurs de validation */}
      {Object.keys(errors).length > 0 && (
        <div className="error-messages">
          {Object.values(errors).map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
    </form>
  );
};

export default Register;