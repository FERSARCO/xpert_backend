const bcrypt = require("bcrypt");
const User = require("../models/usuarios.model");

class UsuarioService {
  // Función para crear un nuevo usuario
  async userRegister(name, lastname, username, password, email, age) {
    try {
      // Genera el hash de la contraseña
      const saltRounds = 10; // Número de rondas de hash (ajustable)
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Crea una nueva instancia del modelo User
      const nuevoUsuario = new User({
        name,
        lastname,
        username,
        password: hashedPassword, // Guarda el hash en lugar de la contraseña sin cifrar
        email,
        age,
      });

      // Guarda el usuario en la base de datos
      return await nuevoUsuario.save();
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
    }
  }

  // Función para crear un nuevo usuario
  async getUserByUsername(username) {
    try {
      const usuarioExistente = await User.findOne({ username });
      if (usuarioExistente) {
        return usuarioExistente;
      }
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
    }
  }

  // Función para crear un nuevo usuario
  async getUserLogin(username, password) {
    try {
      const user = await User.findOne({ username });
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          return user
        }
      }
    } catch (error) {
      console.error("Error al loguear usuario:", error.message);
    }
  }
}

module.exports = new UsuarioService();
