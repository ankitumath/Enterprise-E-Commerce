import ProductCard from "../product/ProductCard";
import useProducts from "../../hooks/useProducts";

const FeaturedProducts = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="animate-pulse bg-gray-200 rounded-2xl h-96"
            ></div>
          ))}
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Featured Products</h2>

        <div className="text-center text-gray-500 text-lg">
          No products found.
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <button className="text-orange-500 font-semibold hover:underline">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;