import { useShoppingCart } from "../context/ShoppingCartContext";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { IProduct } from "../constants";
import axios from "axios";
import { useEffect, useState } from "react";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const [product, setProduct] = useState<IProduct>();

  const getProductById = async (id: number) => {
    axios({
      url: `http://localhost:3030/api/products/${id}`,
      method: "get",
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductById(id);
  }, []);

  if (product == null) return null;

  return (
    <div className="flex items-center space-x-2">
      <img
        src={product.image_url}
        className="w-24 h-12 object-cover"
        alt={product.product_name}
      />
      <div className="flex-grow">
        <div>
          {product.product_name}{" "}
          {quantity > 1 && (
            <span className="text-gray-500 text-xs">x{quantity}</span>
          )}
        </div>
        <div className="text-gray-500 text-sm">
          {currencyFormatter(product.price)}
        </div>
      </div>
      <div>{currencyFormatter(product.price * quantity)}</div>
      <button
        className="text-red-500 text-sm"
        onClick={() => removeFromCart(product.id!)}
      >
        &times;
      </button>
    </div>
  );
}
