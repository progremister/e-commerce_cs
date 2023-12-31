import { Product } from "../models";

const productData = [
  {
    id: 1,
    product_name: "Plain T-Shirt",
    price: 14.99,
    stock: 14,
    description: "A comfortable plain T-shirt suitable for everyday wear.",
    category_id: 1,
    href: "plain-tshirt",
    image_url: "plain-tshirt.jpg"
  },
  {
    id: 2,
    product_name: "Running Sneakers",
    price: 90.0,
    stock: 25,
    description:
      "High-quality running sneakers for a comfortable and active lifestyle.",
    category_id: 5,
    href: "running-sneakers",
    image_url: "running-sneakers.jpeg"
  },
  {
    id: 3,
    product_name: "Branded Baseball Hat",
    price: 22.99,
    stock: 12,
    description: "Stylish branded baseball hat to complement your look.",
    category_id: 4,
    href: "baseball-hat",
    image_url: "basebal-cap.jpg"
  },
  {
    id: 4,
    product_name: "Top 40 Music Compilation Vinyl Record",
    price: 12.99,
    stock: 50,
    description: "Vinyl record featuring the top 40 music compilation.",
    category_id: 3,
    href: "vinyl-records",
    image_url: "vinyl-records.jpg"
  },
  {
    id: 5,
    product_name: "Cargo Shorts",
    price: 29.99,
    stock: 22,
    description:
      "Durable cargo shorts with multiple pockets for your convenience.",
    category_id: 2,
    href: "cargo-shorts",
    image_url: "cargo_shirts.jpg"
  },
];

const seedProducts = () => Product.bulkCreate(productData);

export default seedProducts;
