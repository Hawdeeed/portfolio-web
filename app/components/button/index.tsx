interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset"; // <- added type prop
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button", // default to "button"
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type} // <- use the type here
      disabled={disabled}
      className={`font-light rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
