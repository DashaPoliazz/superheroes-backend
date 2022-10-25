import fileService from "../services/file-service.js";
import superheroService from "../services/superhero-service.js";

class FileController {
  async configureImage(req, res) {
    try {
      const fileToSet = req.file;

      const result = await fileService.addImage(
        fileToSet,
        req.body.superheroId
      );

      const superHeroesWithImage = await fileService.setImage(
        result.secure_url,
        req.body.superheroId
      );

      res.json(superHeroesWithImage);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }

  async removeFile(req, res) {
    try {
      const { imagePublicId } = req.params;

      const result = await fileService.removeImage(imagePublicId);

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
}

export default new FileController();
