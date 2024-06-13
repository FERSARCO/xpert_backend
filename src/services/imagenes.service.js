const Imagen = require("../models/imagenes.models");
const axios = require("axios");

class ImagenService {


    //Funcion para consultar imagenes por id de raza
    async getImagesByBreedId(limit,breed_id) {
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breed_id}`
        );
        if (response.data) {
            const images = response.data.map((ImageData) => {
                return new Imagen({
                  breeds:ImageData.breeds,
                  id:ImageData.id, 
                  url:ImageData.url, 
                  width:ImageData.weight,
                  height:ImageData.height
                });
              });
              return images;
}
      } catch (error) {
        return console.error(error);
      }
    }
  

  }
  
  module.exports = new ImagenService();