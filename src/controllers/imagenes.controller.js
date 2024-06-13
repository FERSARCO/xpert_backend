const imagenesService = require("../services/imagenes.service");


//Funcion para llamar el servicio de consultar imagenes por id de raza
const getImagesByBreedId = async (req, res) => {
  const limit = req.query.limit;
  const breed_ids = req.params.breed_ids;
  try {
    const images = await imagenesService.getImagesByBreedId(limit,breed_ids);
    if (images) {
      return res.status(200).json({ ok: true, message: "images", data: images });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getImagesByBreedId,
};
