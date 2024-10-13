import React, { useContext, useState } from "react";
import Counter from "./Counter";
import { AppContext } from "../context/AppContext";

const Product = ({ image, discountedPrice, originalPrice, name }) => {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(AppContext);

  const showCountHandler = () => {
    setShowCounter(true);
  };

  const handleAddToCart = () => {
    addToCart({ image, discountedPrice, name }, count);
  };

  return (
    <div className="bg-[#2e1a1d] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover rounded-md"
        />
      </div>
      <div>
        <h3 className="text-2xl text-white font-semibold">{name}</h3>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-orange-400 font-bold text-xl">₹ {discountedPrice}</p>
        <p className="text-gray-400 text-lg line-through">₹ {originalPrice}</p>
      </div>
      {/* <div
        className={`${
          showCounter && "flex flex-col items-center justify-center gap-2"
        }`}
      >
        <div>{showCounter && <Counter />}</div>
        <button
          onClick={showCounter ? handleAddToCart : showCountHandler}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-2 text-xl text-white rounded-md transition-colors"
        >
          "Add to Cart"
        </button>
      </div> */}
    </div>
  );
};

export default Product;
