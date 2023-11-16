import express from "express";
import { getCart, addToCart, removeCartItem } from "../controllers/cart";

const router = express.Router();

router.route("/").get(getCart).post(addToCart);

router.delete("/:id", removeCartItem);

export default router;
