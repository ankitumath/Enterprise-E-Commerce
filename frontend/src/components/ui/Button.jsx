const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600",

    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;