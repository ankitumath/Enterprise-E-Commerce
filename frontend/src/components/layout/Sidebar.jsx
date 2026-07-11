import {
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">
        Dashboard
      </h2>

      <ul className="space-y-6">

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaHome />
          Home
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaBoxOpen />
          Products
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaShoppingCart />
          Orders
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaUser />
          Profile
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;