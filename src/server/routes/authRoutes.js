const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Route d'inscription
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Requête SQL pour insérer l'utilisateur dans la base de données
    const sql = 'INSERT INTO register (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur lors de l\'inscription' });
      } else {
        res.status(201).json({ message: 'Inscription réussie' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors du hachage du mot de passe' });
  }
});

// Route de connexion
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Requête SQL pour rechercher l'utilisateur par email
  const sql = 'SELECT * FROM register WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur lors de la connexion' });
    } else if (results.length === 0) {
      res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    } else {
      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.status(200).json({ message: 'Connexion réussie', user });
      } else {
        res.status(401).json({ message: 'Email ou mot de passe incorrect' });
      }
    }
  });
});

module.exports = router; // Exportez les routes pour pouvoir les utiliser dans server.js