import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 md:mx-6 text-md sticky">
      <NavLink to="/" className="font-semibold text-lg">
        DK Shop
      </NavLink>
      <div className="flex gap-3 items-center">
        <NavLink to="/about" className="text-neutral-500 hover:text-black">
          About
        </NavLink>
        <button type="button" className="w-10 h-10 rounded-full text-neutral-500 hover:text-black  p-2 relative">
            <FaShoppingCart className="w-6 h-6"/>
            <div className="rounded-full w-4 h-4 absolute bottom-0 right-1 text-white bg-red-500 flex justify-center items-center">3</div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
