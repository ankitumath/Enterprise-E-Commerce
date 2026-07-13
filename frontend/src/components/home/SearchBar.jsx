import { FaSearch } from "react-icons/fa";
import { useProductContext } from "../../context/ProductContext";
const SearchBar = () => {
  const { keyword, setKeyword } = useProductContext();

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Search products..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border rounded-xl pl-12 pr-4 py-4 shadow focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;