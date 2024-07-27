interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`font-light rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
