import fileService from "../services/file-service.js";
import superheroService from "../services/superhero-service.js";

class FileController {
  async configureImage(req, res) {
    try {
      const fileToSet = req.file;

      console.log(fileToSet);

      const result = await fileService.addImage(
        fileToSet,
        req.body.superheroId
      );

      console.log("RESULT", result);

      await fileService.setImage(
        {
          imageUrl: result.secure_url,
          public_id: result.public_id,
        },
        req.body.superheroId
      );

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }

  async removeFile(req, res) {
    try {
      const { imagePublicId, superheroToUpdate } = req.body;

      console.log(req.body);

      const result = await fileService.removeImage(imagePublicId);

      const updatedSuperhero = await superheroService.updateOneSuperhero(
        superheroToUpdate
      );

      res.json(updatedSuperhero);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
}

export default new FileController();
