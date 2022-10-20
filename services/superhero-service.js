import superheroModel from "../models/superhero-model.js";

class SuperheroService {
  async createSuperhero(superheroToCreate) {
    const createdSuperhero = await superheroModel.create(superheroToCreate);

    return createdSuperhero;
  }

  async getAllSuperheroes() {
    const superheroes = await superheroModel.find();

    return superheroes;
  }

  async getOneSuperhero(superheroId) {
    if (!superheroId) {
      throw new Error("Please, provide id of superhero");
    }

    const foundedSuperhero = await superheroModel.findById(superheroId);

    return foundedSuperhero;
  }

  async updateOneSuperhero(superheroToUpdate) {
    if (!superheroToUpdate) {
      throw new Error("Please, enter superheroToUpdate");
    }

    if (!superheroToUpdate._id) {
      throw new Erorr("Please, enter superheroe id");
    }

    const updatedSuperhero = await superheroModel.findByIdAndUpdate(
      superheroToUpdate._id,
      superheroToUpdate,
      {
        new: true,
      }
    );

    return updatedSuperhero;
  }

  async deleteOneSuperhero(superheroToDeleteId) {
    if (!superheroToDeleteId) {
      throw new Error("Please, enter superhero id");
    }

    const removedSuperhero = await superheroModel.findByIdAndDelete(
      superheroToDeleteId
    );

    return removedSuperhero;
  }
}

export default new SuperheroService();
