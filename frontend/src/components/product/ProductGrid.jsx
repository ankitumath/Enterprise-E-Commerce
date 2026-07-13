import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [], loading }) => {
  if (loading) {
    return <h2 className="text-center py-20">Loading Products...</h2>;
  }

  if (products.length === 0) {
    return (
      <h2 className="text-center py-20 text-gray-500">
        No Products Found
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;