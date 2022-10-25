import { Router } from "express";

import fileController from "../controllers/file-controller.js";
import SuperheroController from "../controllers/superhero-controller.js";

import { $multer } from "../utils/multer.js";

const router = new Router();

router.post("/superhero", SuperheroController.createSuperhero);
router.get("/superhero", SuperheroController.getAllSuperheroes);
router.get("/superhero/:id", SuperheroController.getOneSuperhero);
router.put("/superhero", SuperheroController.updateOneSuperhero);
router.delete("/superhero/:id", SuperheroController.deleteOneSuperhero);

router.post(
  "/image",
  $multer.single("currentImage"),
  fileController.configureImage
);
router.delete("/image?:imagePublicId", fileController.removeFile);

export default router;
