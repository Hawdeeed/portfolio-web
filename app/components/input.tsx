"use client";
import { InputHTMLAttributes, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  className,
  disabled = false,
  type,
  required = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <div className="flex items-center gap-1">
          <label className="font-medium text-white">{label}</label>
          {required && <span className="text-red-500">*</span>}
        </div>
      )}
      <div
        className={`flex items-center gap-2.5 w-full px-4 py-3 border-b border-white focus-within:border-[#ff004f] outline-none ${disabled ? "text-gray-400 cursor-not-allowed" : "text-white"} ${className}`}
      >
        {icon && <>{icon}</>}
        <input
          type={isPassword && showPassword ? "text" : type}
          className={`w-full bg-transparent outline-none ${disabled ? "cursor-not-allowed" : ""}`}
          disabled={disabled}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-400 hover:text-white transition"
          >
            {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
