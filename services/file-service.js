import * as uuid from "uuid";
import { v2 as cloudinaryBase } from "cloudinary";
import superheroModel from "../models/superhero-model.js";

class FileService {
  async addImage(currentImage, superheroeId) {
    try {
      const result = await cloudinaryBase.uploader.upload(currentImage.path, {
        file: currentImage,
        publicId: String(superheroeId),
        folder: `superheroes/${superheroeId}`,
      });

      return result;
    } catch (e) {
      console.log("File service", e);
    }
  }

  async setImage(imageUrl, superheroeId) {
    if (!imageUrl || !superheroeId) {
      throw new Error("Please, enter imageUrl and superheroesId");
    }

    const currentSuperhero = await superheroModel.findById(superheroeId);

    console.log(imageUrl, currentSuperhero);

    const updatedSuperhero = await superheroModel.findByIdAndUpdate(
      superheroeId,
      {
        currentImage: imageUrl,
        Images: [...currentSuperhero.Images, imageUrl],
      },
      {
        new: true,
      }
    );

    return updatedSuperhero;
  }

  async removeImage(imagePublicId) {
    if (!imagePublicId) {
      throw new Error("Please, provide url of image to remove");
    }

    const result = await cloudinaryBase.uploader.destroy(
      imagePublicId,
      (error, result) => {
        console.log(error, result);
      }
    );

    return result;
  }
}

export default new FileService();
