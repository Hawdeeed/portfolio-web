const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`font-normal text-base xl:text-[20px] lg:text-[19px] text-[20px] sm:leading-[32px] ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
