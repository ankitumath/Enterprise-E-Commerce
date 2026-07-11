import { useForm } from "react-hook-form";
import { registerUser } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);

      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Register
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          {...register("name", {
            required: "Name is required",
          })}
          placeholder="Name"
          className="border w-full p-3 rounded mb-2"
        />

        <p className="text-red-500 text-sm">
          {errors.name?.message}
        </p>

        <input
          {...register("email", {
            required: "Email is required",
          })}
          placeholder="Email"
          className="border w-full p-3 rounded mt-4 mb-2"
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
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg"
        >
          Register
        </button>

      </form>

      <p className="mt-5 text-center">
        Already have an account?

        <Link
          to="/login"
          className="text-blue-600 ml-2"
        >
          Login
        </Link>

      </p>

    </div>
  );
}

export default Register;