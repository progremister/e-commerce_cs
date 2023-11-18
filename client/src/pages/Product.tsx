import { useLoaderData, useParams } from "react-router-dom";

import { MdShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { IProduct } from "../constants";
import axios from "axios";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Product = () => {
  const { href } = useParams<{ href: string }>();

  const [product, setProduct] = useState<IProduct>();

  const getProductByHref = async (href: string) => {
    axios({
      url: `http://localhost:3030/api/products/product/${href}`,
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
    if (!href) {
      return;
    }
    getProductByHref(href);
  }, []);

  if (!product) {
    return;
  }

  return (
    <div className="w-full my-10 bg-base-200 flex justify-end items-center">
      <div className="w-full flex justify-center items-center">
        <div className="mx-15 flex sm:flex-col  md:flex-row gap-10">
          <img
            src={`http://localhost:3030/assets/${product.image_url}`}
            className="w-96 rounded-lg shadow-2xl"
          />
          <div className="md:text-right sm:text-center">
            <h2 className=" text-2xl  md:text-4xl font-bold text-orang-400 mb-6">
              {product?.product_name}
            </h2>
            <div className="flex flex-col justify-center md:items-end sm:items-center mt-2 ">
              <h1 className="text-md textarea-accent uppercase font-bold text-gray-400">
                Availabile: {product?.stock}
              </h1>

              <h1 className="text-2xl font-bold textarea-accent mb-2">
                {currencyFormatter(product?.price)}
              </h1>

              <button
                id={product.id?.toString()}
                onClick={() => {}}
                className="flex gap-2 mr-1.5 items-center justify-center py-2 px-5 bg-orange-400 text-white text-[14px] rounded-md hover:bg-transparent hover:text-orange-400 transition-colors mb-8 w-30 font-semibold"
              >
                <MdShoppingCart />
                Buy
              </button>

              <div>
                <p className=" mx-auto text-base pb-5 font-semibold">
                  {product?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
