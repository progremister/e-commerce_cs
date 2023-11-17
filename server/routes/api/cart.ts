import express from "express";
import { addToCart, removeCartItem } from "../../controllers/cart";

const router = express.Router();

//add product to cart
router.post("/:id", addToCart);

//remove product from cart
router.delete("/:id", removeCartItem);

export default router;
