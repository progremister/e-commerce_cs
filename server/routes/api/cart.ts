import express from "express";
import { getCart, addToCart, removeCartItem } from "../../controllers/cart";

const router = express.Router();

router.get("/", getCart);

router.post("/:id", addToCart);

router.delete("/:id", removeCartItem);

export default router;
