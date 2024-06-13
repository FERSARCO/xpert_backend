const express = require('express');
const { Router } = require('express');
const { userRegister,userLogin} = require('../controllers/usuarios.controller');
const router = Router()

//SERVICIOS PARA REGISTRAR Y LOGUEAR USUARIOS
router.post('/register', userRegister);
router.get('/login', userLogin);



module.exports = router;