import React from "react";

const FilterTab = ({ filtertab, category, setCategory }) => {
  const filterHandler = (tab) => {
    setCategory(tab);
  };
  return (
    <div>
      <div className="flex items-center justify-center flex-wrap gap-3 mt-10 mx-auto text-white">
        {filtertab.map((tab, index) => (
          <button
            onClick={() => filterHandler(tab)}
            key={index}
            className={`hover:text-gray-400 px-3 py-1 rounded-md transition-colors bg-[#534045] border-2 duration-200 ${
              category === tab
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTab;
