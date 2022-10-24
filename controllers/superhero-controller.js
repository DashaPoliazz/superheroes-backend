import superheroModel from "../models/superhero-model.js";
import superheroService from "../services/superhero-service.js";

class SuperheroController {
  async createSuperhero(req, res) {
    try {
      const seperhero = await superheroService.createSuperhero(
        req.body,
        req.files.currentImage
      );
      console.log(req.files.currentImage);

      return res.json(seperhero);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllSuperheroes(req, res) {
    try {
      const superheroes = await superheroService.getAllSuperheroes();

      return res.json(superheroes);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOneSuperhero(req, res) {
    try {
      const { id } = req.params;

      const superhero = await superheroService.getOneSuperhero(id);

      return res.json(superhero);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateOneSuperhero(req, res) {
    try {
      const newSuperhero = req.body;

      const updatedSuperhero = await superheroService.updateOneSuperhero(
        newSuperhero
      );

      return res.json(updatedSuperhero);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteOneSuperhero(req, res) {
    try {
      const { id } = req.params;

      const removedSuperhero = await superheroService.deleteOneSuperhero(id);

      return res.json(removedSuperhero);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new SuperheroController();
