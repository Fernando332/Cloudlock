// Configuración del servidor
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Configuración de Passport.js
require('./config/passport')(passport);

// Configuración de MongoDB
mongoose.connect('URL_DE_CONEXION_A_MONGODB', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuración de Express.js
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'SECRETO_DEL_SESION',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Rutas para registro e inicio de sesión
app.post('/registro', (req, res) => {
  // Lógica para registrar un nuevo usuario
});

app.post('/inicio-sesion', passport.authenticate('local', {
  successRedirect: '/perfil',
  failureRedirect: '/inicio-sesion',
  failureFlash: true
}));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
