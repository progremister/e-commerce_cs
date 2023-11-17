import express from "express";
const router = express.Router();

import categoryRoutes from "./categories";
import productRoutes from "./products";
import cartRoutes from "./cart";

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);

export default router;
