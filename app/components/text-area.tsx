import { useEffect, useRef } from "react";

interface TextareaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  autoResize?: boolean;
  maxHeight?: number;
  focus?: boolean;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  className = "",
  rows = 4,
  disabled = false,
  onKeyPress,
  autoResize = false,
  maxHeight,
  focus = false,
  required = false,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto to calculate new scrollHeight correctly
      const newHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = maxHeight
        ? `${Math.min(newHeight, maxHeight)}px`
        : `${newHeight}px`; // Calculate the new height based on scrollHeight and maxHeight (if provided)
    }
  }, [value, autoResize, maxHeight]);

  // Focus the Textarea when the component mounts and focus prop is true
  useEffect(() => {
    if (textareaRef.current && focus) textareaRef.current.focus();
  }, [focus]);

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-white font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}{" "}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`px-4 py-3 w-full text-white bg-transparent border-b border-white focus:border-[#ff004f] outline-none resize-none overflow-y-auto ${className}`}
        onKeyDown={onKeyPress || (() => {})}
      />
    </div>
  );
};

export default Textarea;
