const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  nombreUsuario: String,
  correoElectronico: String,
  contraseña: String
});

userSchema.methods.validPassword = function(contraseña) {
  return bcrypt.compareSync(contraseña, this.contraseña);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
