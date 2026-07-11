import { FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md h-16 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        Enterprise Shop
      </h1>

      <div className="flex items-center gap-6 text-2xl">
        <FaHeart className="cursor-pointer hover:text-red-500" />
        <FaShoppingCart className="cursor-pointer hover:text-blue-500" />
        <FaUserCircle className="cursor-pointer text-3xl" />
      </div>
    </nav>
  );
}

export default Navbar;