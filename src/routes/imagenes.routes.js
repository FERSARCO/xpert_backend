const { Router } = require('express');
const { getImagesByBreedId } = require('../controllers/imagenes.controller');
const router = Router()

//SERVICIOS PARA CONSULTAR IMAGENES
router.get('/:breed_ids', getImagesByBreedId);


module.exports = router;