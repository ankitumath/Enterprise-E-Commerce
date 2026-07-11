import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex mb-10">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 border rounded-l-lg px-4 py-3 focus:outline-none"
      />

      <button className="bg-blue-600 px-6 rounded-r-lg text-white">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;