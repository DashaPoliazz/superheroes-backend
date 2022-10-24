import fileService from "../services/file-service.js";

class FileController {
  async setCurrentImage(req, res) {
    try {
      const fileToSet = req.files.currentImage;

      const result = await fileService.setImage(fileToSet, req.body._id);

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
}

export default new FileController();
