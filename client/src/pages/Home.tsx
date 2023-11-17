import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IProduct } from "../constants";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios({
      url: "http://localhost:3030/api/products",
      method: "get",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full my-10">
      <div className="w-full flex justify-center mt-5 mb-4 px-10">
        <div className="flex sm:gap-4 md:gap-8 flex-wrap w-full  justify-center ">
          {products.map((product) => (
            <div
              className="sm:w-[75%] md:w-[26%] rounded-xl overflow-hidden hover:scale-105 transition-all bg-white shadow-md flex flex-col"
              key={product.id}
            >
              <Link to={`products/${product.id}`}>
                <img
                  src={`http://localhost:3030/assets/${product.image_url}`}
                  className="h-[250px] w-full"
                  alt={product.product_name}
                />
              </Link>
              <div className="w-[95%] flex justify-between items-center m-auto my-2">
                <div className="mx-2">
                  <Link to={`products/${product.id}`}>
                    <h3>{product.product_name}</h3>
                  </Link>
                  <h4 className="font-bold">${product.price}</h4>
                </div>
                <div>
                  <button
                    id={product.id?.toString()}
                    onClick={() => {}}
                    className=" block py-2 px-5 bg-orange-400 text-white rounded hover:bg-transparent hover:text-orange-400 transition-colors md:w-[126px]"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
