const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-cyan-500 text-white rounded-md p-2 mt-4 w-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
