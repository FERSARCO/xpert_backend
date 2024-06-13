const Gato = require("../models/gatos.models");
const axios = require("axios");

class GatoService {

  // Funcion para consultar todas las razas de gatos
  async getAllBreeds(limit, page) {
    try {
      // Utiliza axios para realizar una solicitud a The Cat API
      const response = await axios.get(
        `https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`
      );
      if (response.data) {
        // Mapear los datos de la API a tu modelo de Gato
        return response.data.map(({ weight, id, name, ...rest }) => {
          return new Gato({weight: weight.metric,id,name,...rest});
        });
      }
    } catch (error) {
      return console.error(error);
    }
  }

  //Funcion para consultar una raza de gato
  async getBreedById(id) {
    try {
      // Utiliza axios para realizar una solicitud a The Cat API
      const response = await axios.get(
        `https://api.thecatapi.com/v1/breeds/${id}`
      );
      if (response.data) {
        const { weight, id, name, ...rest } = response.data;
        const gato = new Gato({ weight: weight.metric, id, name, ...rest });
        return gato;
      }
    } catch (error) {
      return console.error(error);
    }
  }

  // Funcion para consultar raza por parametros
  async searchBreeds(q, attach_image) {
    try {
    
      // Utiliza axios para realizar una solicitud a The Cat API
      const response = await axios.get(
        `https://api.thecatapi.com/v1/breeds/search?q=${q}&attach_image=${attach_image}`
      );
      if (response.data) {
        // Mapear los datos de la API a tu modelo de Gato
        return response.data.map(({ weight, id, name, ...rest }) => {
          return new Gato({weight,id,name,...rest});
        });
      }
    } catch (error) {
      return console.error(error);
    }
  }
}

module.exports = new GatoService();
