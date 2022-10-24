import * as uuid from "uuid";
import { v2 as cloudinaryBase } from "cloudinary";
import expressFileUpload from "express-fileupload";

class FileService {
  async setImage(currentImage, superheroeId) {
    try {
      const result = await cloudinaryBase.uploader.upload({
        file: currentImage,
        publicId: String(superheroeId),
        folder: `superheroes/${superheroeId}`,
      });

      return result;
    } catch (e) {
      console.log("File service", e);
    }
  }
}

export default new FileService();
