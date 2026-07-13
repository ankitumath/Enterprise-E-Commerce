import { useProductContext } from "../../context/ProductContext";

const ProductFilters = () => {
  const {
    keyword,
    setKeyword,
    category,
    setCategory,
    sort,
    setSort,
  } = useProductContext();

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border rounded-lg px-4 py-2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">All Categories</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">Newest</option>
        <option value="price">Price Low → High</option>
        <option value="-price">Price High → Low</option>
      </select>
    </div>
  );
};

export default ProductFilters;