interface ImageCardProps {
    imageUrl: string;
    title: string;
    description?: string; // Make description optional
  }
  
  const CertificateCard: React.FC<ImageCardProps> = ({
    imageUrl,
    title,
    description,
  }) => {
    return (
      // transform transition-transform duration-300 
      <div className="max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg 3xl:max-w-xl  bg-white border border-gray-200 rounded-2xl shadow-2xl flex-shrink-0 p-4 ">
        <img
          className="rounded-2xl"
          src={imageUrl}
          alt={title}
          fetchPriority="high"
          loading="eager"
        />
        <div className="pt-5 px-5 whitespace-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  text-ellipsis">
            {title}
          </h5>
          {description && (
            <p className="mb-3 font-normal text-black text-ellipsis">
              {description}
            </p>
          )}
          </div>
       
        
       
      </div>
    );
  };
  
  export default CertificateCard;