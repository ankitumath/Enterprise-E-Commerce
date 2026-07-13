import ProductFilters from "../../components/product/ProductFilters";
import ProductGrid from "../../components/product/ProductGrid";
import useProducts from "../../hooks/useProducts";

const Shop = () => {
  const { products, loading } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Shop
      </h1>

      <ProductFilters />

      <ProductGrid
        products={products}
        loading={loading}
      />
    </div>
  );
};

export default Shop;