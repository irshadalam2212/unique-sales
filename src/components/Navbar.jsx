import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { cart } = useContext(AppContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center py-4 mx-auto bg-[#18090c] text-white">
      <div className="text-4xl font-semibold mb-2 md:mb-0">
        <Link to={"/home"}>Unique Sales</Link>
      </div>
      <nav className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
          <li className="bg-[#312729] px-2 py-2 rounded-md hover:bg-[#554649] duration-200 hover:text-gray-300 transition-colors">
            <Link to={"/addproducts"} className="">
              Add Products
            </Link>
          </li>
          <li className="bg-[#312729] px-2 py-2 rounded-md hover:bg-[#554649] duration-200 hover:text-gray-300 transition-colors">
            <Link to={"/customorder"}>Custom Order</Link>
          </li>
          <li className="bg-[#312729] px-2 py-2 rounded-md hover:bg-[#554649] duration-200 hover:text-gray-300 transition-colors">
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3 mt-4 md:mt-0">
        <Link to={"/"}>
          <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors">
            Logout
          </button>
        </Link>
        <Link to={"/cart"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
            Cart
            {/* {cartItemCount > 0 && `(${cartItemCount})`} */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
