import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className="flex justify-between items-center px-5 mx-0 bg-white text-md sticky shadow-sm w-full z-100 ">
      <NavLink to="/" className="font-semibold text-lg flex gap-1 items-center">
        <img src={logo} alt="" width={60} height={60} />
        DK Shop
      </NavLink>
      <div className="flex gap-3 items-center">
        <button
          type="button"
          className="w-10 h-10 rounded-full text-neutral-500 hover:text-black  p-2 relative"
          onClick={openCart}
        >
          <FaShoppingCart className="w-6 h-6 hover:black transition-colors duration-200" />
          {cartQuantity > 0 && (
            <div className="rounded-full w-4 h-4 absolute bottom-0 right-1 text-white bg-orange-400 flex justify-center items-center">
              {cartQuantity}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
