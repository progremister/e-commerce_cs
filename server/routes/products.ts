import express from "express";
import {getAllProducts, getProductById, getCategorieProducts} from "../controllers/products";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.get("/:categorie", getCategorieProducts);

export default router;

