const Product = ({ image, discountedPrice, originalPrice, name }) => {
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
    </div>
  );
};

export default Product;
