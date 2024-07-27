import { HIRING } from "@/share/data";
import Heading from "../typography/heading";
const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      className="w-fit h-fit p-[1.4px] rounded-3xl"
      style={{
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, #FFFFFF 49.56%, rgba(255, 255, 255, 0.08) 99.84%)",
      }}
    >
      <div className="bg-gray-800 rounded-3xl shadow-lg flex flex-col lg:gap-4 justify-center items-center w-[250px] lg:w-[300px] h-[120px] lg:h-[150px]">
        <h2 className="text-3xl md:text-4xl lg:text-[50px] text-white font-extrabold">
          {title}
        </h2>
        <p className="text-base lg:text-[20px] text-white opacity-65">
          {description}
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section className="bg-bg-dark" id="education">
      <div className="flex flex-col justify-center items-center gap-14 lg:gap-16 pt-16 sm:pt-24 xl:pt-28 px-6 sm:px-14 xl:px-24 max-w-[1500px] mx-auto">
        <div className="w-full flex flex-col xl:flex-row xl:items-center">
          <div className="w-full xl:w-8/12 mr-8">
            <Heading text="Computer Science Student at" coloredText="FAST"  />
            <Heading
              text="National University"
              coloredTextStart={true}
            />
            <p className="ml-1 text-[#ff004f] ">Expected graduate in 2025</p>
          </div>
          <div className="xl:w-5/12 w-full">
            <p className="text-white mt-6 xl:text-[20px] text-[20px]">
            Joining FAST University as a Computer Science student was a transformative experience that ignited my passion for technology and innovation. From the outset, I was immersed in a dynamic environment of academic rigor and cutting-edge research, where brilliant professors and collaborative projects challenged me to push the boundaries of my knowledge and skills. The hands-on learning, coupled with a vibrant extracurricular scene of tech clubs and hackathons, allowed me to apply theory to real-world problems and stay abreast of industry trends.
            </p>
          </div>
        </div>
        {/* <div className="w-full flex flex-wrap justify-center sm:justify-normal gap-6">
          {EXPERIENCE.map((experience: Experience, index: number) => (
            <Card
              key={index}
              description={experience.description}
              title={experience.title}
            />
          )
          )}
        </div> */}
        
      </div>
      <div className="px-6 sm:px-14 xl:px-24 py-14 max-w-[1500px] mx-auto">
  <div className="">
    {HIRING.map((job, index) => (
      <div
        key={index}
        className="flex sm:flex-row flex-col justify-between sm:items-center items-start border-b border-gray-300 py-4"
      >
        <div>
          <h3 className="md:text-2xl text-xl text-white font-bold">
            {job.title}
          </h3>
          <p className="text-[#979797] my-2">{job.description}</p>
        </div>
        <p className="text-white font-semibold">{job.additionalDescription}</p> {/* New description */}

      </div>
    ))}
  </div>
</div>



    </section>
  );
};

export default Education;

