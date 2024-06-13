const usuariosService = require("../services/usuarios.service");

//Funcion para registrar usuarios nuevos en la base datos
const userRegister = async (req, res) => {
    const { name, lastname, username,password,email,age } = req.body;

    try {

     const userexist = await usuariosService.getUserByUsername(username)

     if(!userexist){
         const user = await usuariosService.userRegister(name, lastname, username,password,email,age);

         if(user){
            return res.status(200).json({ ok: true, message: "Usuario guardado con exito", data: user });
         }
      }else{
        return res.status(400).json({ ok: true, message: "El Usuario ya se encuentra registrado" });
      }
      

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };


//Funcion para autenticar usuarios
const userLogin = async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    const userexist = await usuariosService.getUserLogin(username,password)

    if(userexist){
        return res.status(200).json({ ok: true, message: "Usuario logueado con exito", data:userexist});
    }else {
        return res.status(400).json({ ok: false, message: 'usuario o contraseña incorrecta',data:{} });
    }
  };


  module.exports = {
    userRegister,
    userLogin
  };
  