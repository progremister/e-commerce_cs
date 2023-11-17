import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../../controllers/products";

// The `/api/products` endpoint

// get all products
router.get("/", getAllProducts);

// get one product
router.get("/:id", getProductById);

// create new product
router.post("/", createProduct);

//delete product
router.delete("/:id", deleteProduct);

export default router;
