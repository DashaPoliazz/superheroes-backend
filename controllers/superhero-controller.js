import superheroModel from "../models/superhero-model.js";

class SuperheroController {
  async createSuperhero(req, res) {
    try {
      const {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        Images,
      } = req.body;

      const currentSuperhero = await superheroModel.create({
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        Images,
      });

      res.json(currentSuperhero);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllSuperheroes(req, res) {
    try {
      const superheroes = await superheroModel.find();

      return res.json(superheroes);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOneSuperhero(req, res) {
    try {
      const { id } = req.params;

      const foundedSuperhero = await superheroModel.findById(id);

      return id
        ? res.json(foundedSuperhero)
        : res.status(400).json("Superhero not found");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateOneSuperhero(req, res) {
    try {
      const newSuperhero = req.body;

      if (!newSuperhero._id) {
        return res.status(400).json("Id not found");
      }

      const updatedSuperhero = await superheroModel.findByIdAndUpdate(
        newSuperhero._id,
        newSuperhero,
        {
          new: true,
        }
      );

      return res.json(updatedSuperhero);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteOneSuperhero(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new SuperheroController();
