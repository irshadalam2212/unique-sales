import React from "react";
// import { products } from "../products";
import Product from "./Product";

const AllProducts = ({ products, category }) => {
  const getProducts = () => {
    console.log("products", products);
    console.log("category", category);
    if (category === "All") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {getProducts().map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
