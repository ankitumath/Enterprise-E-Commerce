import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Section */}

      <div className="hidden lg:flex flex-col justify-center items-center bg-slate-900 text-white p-12">

        <h1 className="text-5xl font-bold">
          Enterprise
        </h1>

        <h2 className="text-3xl mt-2 text-blue-400">
          E-Commerce
        </h2>

        <p className="mt-8 text-center max-w-md text-gray-300">
          Build, manage and grow your business with a powerful
          enterprise e-commerce platform.
        </p>

      </div>

      {/* Right Section */}

      <div className="flex items-center justify-center bg-slate-100 p-6">

        <Outlet />

      </div>

    </div>
  );
}

export default AuthLayout;