import { Router } from "express";

import SuperheroController from "../controllers/superhero-controller.js";

const router = new Router();

router.post("/superhero", SuperheroController.createSuperhero);
router.get("/superhero", SuperheroController.getAllSuperheroes);
router.get("/superhero/:id", SuperheroController.getOneSuperhero);
router.put("/superhero", SuperheroController.updateOneSuperhero);
router.delete("/superhero/:id", SuperheroController.deleteOneSuperhero);

export default router;
