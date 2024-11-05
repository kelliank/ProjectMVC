// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

// URL de connexion MongoDB
const mongoURL = 'mongodb+srv://kelliankauffmannetu:aH2lafJM4lh9fqJC@cluster0.0cyks4h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connexion à MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connecté à MongoDB"))
    .catch(err => console.log("Erreur de connexion", err));

// Configurer les middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Utiliser les routes
app.use('/tasks', taskRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
