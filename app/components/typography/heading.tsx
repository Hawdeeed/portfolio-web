const Heading = ({
  text,
  coloredText,
  coloredTextStart = false,
  onDarkBackground = true,
  className,
}: {
  text?: string;
  coloredText?: string;
  coloredTextStart?: boolean;
  onDarkBackground?: boolean;
  className?: string;
}) => {
  return (
    <h1
      className={`w-fit font-extrabold ${onDarkBackground ? "text-white" : "text-black"} ${className || "text-[40px] leading-[3rem]  sm:text-[50px] sm:leading-[4.5rem]  lg:text-[60px] xl:text-[75px] xl:leading-[5.5rem] tracking-[-0.04em]"}`}
    >
      {coloredText && coloredTextStart && (
        <span className="text-[#ff004f]">{coloredText} </span>
      )}
      {text && <span>{text}</span>}
      {coloredText && !coloredTextStart && (
        <span className="text-[#ff004f]"> {coloredText}</span>
      )}
    </h1>
  );
};

export default Heading;
