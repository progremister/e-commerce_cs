import { Request, Response } from "express";
import { Product, Category } from "../models";

export const getAllProducts = async (req: Request, res: Response) => {
  await Product.findAll({
    include: [
      Category,
    ],
  })
    .then((products) => res.json(products))
    .catch((err: Error) => {
      console.error(err);
      res.status(500).json(err);
    });
};

// find a single product by its `id`
export const getProductById = async (req: Request, res: Response) => {
  await Product.findOne({ where: { id: req.params.id }, include: [Category] })
    .then((dbData) => res.json(dbData))
    .catch((err: Error) => {
      console.error(err);
      res.status(500).json(err);
    });
}

/* req.body should look like this...
  {
    "product_name": "Basketball",
    "price": 200.00,
    "stock": 3,
  }
*/
export const createProduct = async (req: Request, res: Response) => {
  await Product.create({
    id: req.body.product_name,
    product_name: req.body.product_name,
    price: req.body.price,
    description: req.body.description,
    stock: req.body.stock,
    category_id: req.body.stock,
    href: req.body.href,
    image_url: req.body.image_url
  })
    .then((product) => {
        res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
}

// delete one product by its `id` value
export const deleteProduct = async (req: Request, res: Response) => {
  await Product.destroy({ where: { id: req.params.id } })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

