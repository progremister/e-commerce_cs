import express from "express";
const router = express.Router();

import { getAllCategories, getCategorieProducts, createCategorie, updateCategorie, deleteCategorie } from "../../controllers/categories";

// The `/api/categories` endpoint

router.get("/", getAllCategories);

router.get("/:id", getCategorieProducts);

router.post("/", createCategorie);

router.put("/:id", updateCategorie);

router.delete("/:id", deleteCategorie);

export default router;
