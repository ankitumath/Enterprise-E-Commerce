import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold text-red-600">
        403
      </h1>

      <p className="mt-4 text-xl">
        You are not authorized to access this page.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>

    </div>
  );
}

export default Unauthorized;