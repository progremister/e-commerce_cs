import { Request, Response } from "express";
import { Product, Category } from "../models";

// find all categories
export const getAllCategories = async (req: Request, res: Response) => {
  await Category.findAll({ include: [Product] })
    .then((dbData) => res.json(dbData))
    .catch((err: Error) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// find category products by its `id` value
export const getCategorieProducts = async (req: Request, res: Response) => {
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
      include: [Product],
    });

    if (category) {
      res.json(category.products);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// create a new category
export const createCategorie = (req: Request, res: Response) => {
  Category.create(req.body)
    .then((dbData) => res.json(dbData))
    .catch((err: Error) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// update a category by its `id` value
export const updateCategorie = (req: Request, res: Response) => {
  Category.update(req.body, { where: { id: req.params.id } })
    .then((dbData) => res.json(dbData))
    .catch((err: Error) => {
      console.log(err);
      res.status(500).json(err);
    });
};

// delete a category by its `id` value
export const deleteCategorie = (req: Request, res: Response) => {
  Category.destroy({ where: { id: req.params.id } })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};
