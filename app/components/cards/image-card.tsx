interface ImageCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  skills: string[];
  sourceCodeUrl?: string; 
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  description,
  skills,
  sourceCodeUrl,
}) => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg 3xl:max-w-xl flex justify-between flex-col bg-white border border-gray-200 rounded-2xl shadow-2xl flex-shrink-0 p-4">
      <div>
        <div className=" rounded-2xl w-full md:h-56 h-auto">
          <img
            className="rounded-2xl"
            src={imageUrl}
            alt={title}
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="pt-4 xl:pt-12 px-5 whitespace-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-ellipsis">
            {title}
          </h5>
          {description && (
            <p className="mb-3 font-normal text-black text-ellipsis">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="text-black flex flex-col px-4">
        <div className="flex flex-row items-center flex-wrap gap-2">
          <h1 className="font-bold text-lg mr-2">Skills:</h1>
          {skills.map((skill, index) => (
            <p
              key={index}
              className="px-2 mr-1 text-white border-transparent border-[1px] rounded-xl bg-[#ff004f]"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="flex flex-row mt-1 items-center">
          <h1 className="font-bold text-lg mr-2">Source Code:</h1>
          {sourceCodeUrl ? (
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff004f] underline"
            >
              View Code
            </a>
          ) : (
            <span className="text-gray-500">None</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
