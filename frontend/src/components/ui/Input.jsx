function Input({
  label,
  type = "text",
  placeholder,
  register,
  name,
  errors,
}) {
  return (
    <div className="mb-5">

      <label className="block mb-2 font-medium">

        {label}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name].message}
        </p>
      )}

    </div>
  );
}

export default Input;