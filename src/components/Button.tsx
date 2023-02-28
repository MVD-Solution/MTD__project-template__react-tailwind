type ButtonProps = {
  children?: React.ReactNode;
  value?: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, value, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      value={value}
      className={`px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-gray-50 font-bold rounded-lg w-full md:w-1/2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
