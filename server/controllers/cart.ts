import { Request, Response } from "express";
import { Session } from "express-session";
import Product from "../models/Product";
import Category from "../models/Category";

interface CartItem {
  product_id: number;
  product_name: string;
  product_price: number;
  image_url: string;
  quantity: number;
}

interface SessionWithCart extends Session {
  cart?: CartItem[];
}

export const getAllCartProducts = (req: Request, resp: Response) => {
  try {
    const sessionWithCart = req.session as SessionWithCart;
    const cartProducts: CartItem[] = sessionWithCart.cart || [];

    resp.status(200).json({ cartProducts });
  } catch (error) {
    console.error("Error retrieving cart products:", error);
    resp.status(500).json({ error: "Internal Server Error" });
  }
};

//POST
//...../api/cart/{id}
export const addToCart = async (req: Request, res: Response) => {
  await Product.findOne({ where: { id: req.params.id }, include: [Category] })
    .then((dbData) => {
      if(!dbData) throw new Error("Product does not exist in DB!");

      const sessionWithCart = req.session as SessionWithCart;
      sessionWithCart.cart = sessionWithCart.cart || [];
     
      let count = 0;
      for (let i = 0; i < sessionWithCart.cart.length; i++) {
        if (sessionWithCart.cart[i].product_id === dbData.id) {
          sessionWithCart.cart[i].quantity += 1;
          count++;
        }
      }

      if (count === 0) {
        const cart_data: CartItem = {
          product_id: dbData.id!,
          product_name: dbData.product_name,
          product_price: dbData.price,
          image_url: dbData.image_url,
          quantity: 1,
        };
    
        sessionWithCart.cart.push(cart_data);
      }
      
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).json(err);
    });
};

//DELETE
//...../api/cart/{id}
export const removeCartItem = (req: Request, res: Response) => {
  try {
    const product_id = req.query.id;

    const sessionWithCart = req.session as SessionWithCart;
    const cart: CartItem[] = sessionWithCart.cart || [];

    const index = cart.findIndex((item) => item.product_id.toString() === product_id);

    if (index !== -1) {
      // If the product is found in the cart, remove it
      cart.splice(index, 1);
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: "Product not found in the cart" });
    }
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
