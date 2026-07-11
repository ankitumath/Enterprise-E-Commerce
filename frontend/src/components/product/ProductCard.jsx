import { FaHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2">

      {/* Product Image */}

      <div className="relative">

        <img
          src={
            product.images?.[0]?.url ||
            "https://via.placeholder.com/400x300"
          }
          alt={product.name}
          className="h-60 w-full object-cover"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">

          <FaHeart />

        </button>

      </div>

      {/* Product Info */}

      <div className="p-5">

        <p className="text-sm text-gray-500">

          {product.category?.name || "Category"}

        </p>

        <h3 className="font-bold text-xl mt-2">

          {product.name}

        </h3>

        <div className="flex items-center mt-3 gap-1">

          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />

          <span className="text-gray-500 ml-2">

            (128)

          </span>

        </div>

        <div className="mt-4">

          <span className="text-2xl font-bold">

            ₹{product.price}

          </span>

        </div>

        <button className="w-full bg-black text-white py-3 rounded-xl mt-6 hover:bg-orange-500 transition">

          Add To Cart

        </button>

      </div>

    </div>
  );
};

export default ProductCard;