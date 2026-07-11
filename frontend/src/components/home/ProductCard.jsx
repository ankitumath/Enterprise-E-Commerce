function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">
          {product.title}
        </h3>

        <p className="text-gray-500 mt-2">
          ₹ {product.price}
        </p>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;