import React, { useState } from "react";
import { filtertab } from "../filtertab";
import AllProducts from "../components/AllProducts";
import { products } from "../products";
import FilterTab from "../components/FilterTab";

const Home = () => {
  const [category, setCategory] = useState(filtertab[0]);
  return (
    <div className="w-full bg-[#9a616d]">
      <FilterTab
        filtertab={filtertab}
        category={category}
        setCategory={setCategory}
      />
      <div className="px-6 py-3 flex items-center justify-center">
        <AllProducts products={products} category={category} />
      </div>
    </div>
  );
};

export default Home;
