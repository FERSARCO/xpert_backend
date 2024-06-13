const gatoService = require("../services/gatos.service");

//Funcion para consultar las razas de gatos
const getAllBreeds = async (req, res) => {
  const limit = req.query.limit;
  const page = req.query.page;
  try {
    const bredds = await gatoService.getAllBreeds(limit, page);
    return res.status(200).json({ ok: true, message: "breeds", data: bredds });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Funcion para consultar las razas de gatos
const getBreedById = async (req, res) => {
  const breed_id = req.params.breed_id;
  try {
    const breed = await gatoService.getBreedById(breed_id);
    return res.status(200).json({ ok: true, message: "breed", data: breed });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Funcion para consultar las razas de gatos
const searchBreeds = async (req, res) => {
  const q = req.query.q;
  const attach_image = req.query.attach_image;
  try {
    const bredds = await gatoService.searchBreeds(q, attach_image);
    return res.status(200).json({ ok: true, message: "breeds", data: bredds });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBreeds,
  getBreedById,
  searchBreeds,
};
