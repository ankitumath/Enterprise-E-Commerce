import { useForm } from "react-hook-form";
import { loginUser } from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      login(response.user, response.token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Login
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          {...register("email", {
            required: "Email is required",
          })}
          placeholder="Email"
          className="border w-full p-3 rounded mb-2"
        />

        <p className="text-red-500 text-sm">
          {errors.email?.message}
        </p>

        <input
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          placeholder="Password"
          className="border w-full p-3 rounded mt-4 mb-2"
        />

        <p className="text-red-500 text-sm">
          {errors.password?.message}
        </p>

        <button
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg"
        >
          Login
        </button>

      </form>

      <p className="mt-5 text-center">
        Don't have an account?

        <Link
          to="/register"
          className="text-blue-600 ml-2"
        >
          Register
        </Link>

      </p>

    </div>
  );
}

export default Login;