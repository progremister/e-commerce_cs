import { Request, Response } from "express";
import { Session } from "express-session";

interface CartItem {
  product_id: string;
  product_name: string;
  product_price: number;
  quantity: number;
}

interface SessionWithCart extends Session {
  cart?: CartItem[];
}

export const addToCart = (req: Request, resp: Response) => {
  const product_id = req.body.product_id;
  const product_name = req.body.product_name;
  const product_price = req.body.product_price;

  // Ensure that req.session.cart is initialized as an array
  const cart: CartItem[] = (req.session as SessionWithCart).cart || [];

  let count = 0;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product_id === product_id) {
      cart[i].quantity += 1;
      count++;
    }
  }

  if (count === 0) {
    const cart_data = {
      product_id: product_id,
      product_name: product_name,
      product_price: parseFloat(product_price),
      quantity: 1,
    };

    (req.session as SessionWithCart).cart!.push(cart_data);
  }
};


export const removeCartItem = (req: Request, resp: Response) => {
  const product_id = req.query.id;

  const cart: CartItem[] = (req.session as SessionWithCart).cart || [];

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product_id === product_id) {
      (req.session as SessionWithCart).cart!.splice(i, 1);
    }
  }
};
