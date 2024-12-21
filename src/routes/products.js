import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router();

router.post('/', productsController.create);

router.get('/', productsController.getAll);

router.route("/:id")
    .get(productsController.getOne)
    .delete(productsController.delete)
    .put(productsController.update);

export default router;