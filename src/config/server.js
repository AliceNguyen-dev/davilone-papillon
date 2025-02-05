import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080; // Utilisation du port défini par l'environnement ou 8080 par défaut

// Configuration de la base de données
const db = mysql.createConnection({
    host: process.env.REACT_APP_DATABASE_HOST,
    user: process.env.REACT_APP_DATABASE_USER,
    password: process.env.REACT_APP_DATABASE_PASSWORD,
    database: process.env.REACT_APP_DATABASE_NAME
  });

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return; // Arrêter le serveur si la connexion échoue
  }
  console.log('Connecté à la base de données MySQL !');
});

app.use(cors());
app.use(express.json());

// Inscription (register)
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validation des données (côté serveur)
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Le mot de passe doit avoir au moins 6 caractères' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Adresse e-mail invalide' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO register (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Cet email est déjà utilisé' });
        }
        return res.status(500).json({ message: 'Erreur lors de l\'inscription' });
      }
      console.log('Utilisateur inscrit avec succès !');
      return res.status(201).json({ message: 'Inscription réussie' });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors du hachage du mot de passe' });
  }
});

// ... (le reste de votre code backend)

app.listen(port, () => {
  console.log(`Serveur à l'écoute sur le port ${port}`);
});