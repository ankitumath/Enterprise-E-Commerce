import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          EnterpriseShop
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[420px]">

          <FaSearch className="text-gray-500 mr-3" />

          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full"
          />

        </div>

        {/* Navigation */}
        <div className="flex items-center gap-7">

          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="hover:text-blue-600"
          >
            Shop
          </Link>

          <Link
            to="/categories"
            className="hover:text-blue-600"
          >
            Categories
          </Link>

          <FaHeart
            className="text-xl cursor-pointer hover:text-red-500"
          />

          <FaShoppingCart
            className="text-xl cursor-pointer hover:text-blue-500"
          />

          <FaUserCircle
            className="text-3xl cursor-pointer"
          />

        </div>
      </div>
    </header>
  );
};

export default Navbar;