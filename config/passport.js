const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user'); // Modelo de usuario

module.exports = function(passport) {
  passport.use(new LocalStrategy((correoElectronico, contraseña, done) => {
    User.findOne({ correoElectronico: correoElectronico }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Correo electrónico incorrecto.' });
      }
      if (!user.validPassword(contraseña)) {
        return done(null, false, { message: 'Contraseña incorrecta.' });
      }
      return done(null, user);
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
