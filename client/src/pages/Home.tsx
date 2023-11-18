import { useEffect, useState } from "react";
import axios from "axios";
import { ICategory, IProduct } from "../constants";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>();

  const getProducts = async () => {
    axios({
      url: `http://localhost:3030/api/products/`,
      method: "get",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  const getCategories = async () => {
    axios({
      url: `http://localhost:3030/api/categories/`,
      method: "get",
    })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const filterProductsByCategory = async (id: number) => {
    axios({
      url: `http://localhost:3030/api/categories/${id}`,
      method: "get",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error: Error) => {
        console.log(error);
      });

    setActiveCategory(id);
  };

  return (
    <div className="w-full my-10 ">
      <div className="flex gap-3 w-full overflow-x-scroll justify-center">
        <div
          className={`font-semibold px-2 py-1 border-spacing-1 ${
            activeCategory === null
              ? "border-b-2 border-b-orange-400"
              : "border-b-2"
          } focus:border-b-orange-400 hover:border-b-orange-400 transition-colors duration-200`}
          onClick={() => {
            getProducts();
            setActiveCategory(null);
          }}
        >
          <Link to={`/?sort=*`}>All</Link>
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`font-semibold px-2 py-1 border-spacing-1 ${
              activeCategory === category.id
                ? "border-b-2 border-b-orange-400"
                : "border-b-2"
            } focus:border-b-orange-400 hover:border-b-orange-400 transition-colors duration-200`}
            onClick={() => filterProductsByCategory(category.id!)}
          >
            <Link to={`/?sort=${category.id}`}>{category.category_name}</Link>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-5 mb-4 px-10">
        <div className="flex sm:gap-4 md:gap-8 flex-wrap w-full  justify-center ">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* WHY US? */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Why</span>
            </span>{" "}
            shop from us ?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            At our trendy emporium, we offer an unrivaled blend of quality,
            style, and convenience, making us the ultimate destination for your
            needs.
          </p>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-orange-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Premium Quality Furniture
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Indulge in the luxury of premium quality accessories. Our
                commitment to excellence shines through in every meticulously
                crafted piece we offer.
              </p>
            </div>
            <a
              aria-label=""
              className=" cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-orange-800"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-orange-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Hassle-Free Shopping Experience
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Enjoy a hassle-free shopping experience that puts you at the
                center of convenience. We have designed our online store with
                your needs in mind, ensuring a seamless and user-friendly
                interface that makes browsing and purchasing a breeze.
              </p>
            </div>
            <a
              aria-label=""
              className="cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-orange-800"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-orange-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Affordable best prices
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Discover affordability without compromise when you shop with us.
                We take pride in offering the best prices on our exceptional
                clothes collection.
              </p>
            </div>
            <a
              aria-label=""
              className="cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-orange-800"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-orange-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Personalized Customer Support
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Experience the difference of personalized customer support when
                you choose us. We believe in going beyond the sale to provide
                you with tailored assistance every step of the way.
              </p>
            </div>
            <a
              aria-label=""
              className="cursor-pointer inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-orange-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
