const { Router } = require('express');
const { getAllBreeds,searchBreeds,getBreedById } = require('../controllers/gatos.controller');
const router = Router()

//SERVICIOS PARA CONSULTAR RAZAS
router.get('/', getAllBreeds);
router.get('/search', searchBreeds);
router.get('/:breed_id', getBreedById);


module.exports = router;