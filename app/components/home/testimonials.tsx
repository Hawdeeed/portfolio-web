"use client";
import Heading from "../typography/heading";

interface Review {
  id: number;
  text: string;
  clientName: string;
  rating: number;
  platform: string;
  platformLink?: string;
}

// Grouped reviews per client
interface ClientReviews {
  clientName: string;
  platform: string;
  platformLink?: string;
  rating: number; // you can use highest rating or average
  reviews: string[];
}

// Transform your REVIEWS array into grouped CLIENT_REVIEWS
const CLIENT_REVIEWS: ClientReviews[] = [
  {
    clientName: "mohammadali98",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "I’ve been working with Hadeed for 6+ months and can confidently say he’s the best in the market. He’s built custom LoRAs and other advanced AI solutions for my brand, and every project has exceeded expectations. He’s not just a developer, he’s a creative technologist: share the vision, and he delivers something no one else has. His attention to detail is unmatched, and he knows how to turn ideas into real, high-performing results. I’ve worked with many AI pros, but Hadeed consistently brings the smartest solutions and the strongest outcomes, his work helped drive a 10x lift in sales for us. If you want excellence and someone to solve your problem, hire Hadeed.",
    ],
  },
  {
    clientName: "balispell",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "Perfect outcome. Delivered exactly what I needed, when I needed. Great communication. Will use again for sure.",
      "My second time working with this vendor, and what a joy again. Great communication, excellent delivery. WIll come back again and again.",
      "Another great delivery. Did everything I asked and more. Great after service. Perfect communication.",
    ],
  },
  {
    clientName: "Jammes07",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "Had a good time with him, understood my requirements and gave me quality work in less time. Will suggest him to everyone for sure!! Thank you.",
    ],
  },
  {
    clientName: "killtherobot",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "The best to work with on fiverr. Game changer !!",
      "Incredible work s always!",
      "Amazing work !",
      "Amazing as always",
      "My only go to on Fiverr. The best!",
      "Amazing work super fast",
    ],
  },
  {
    clientName: "alx_hunter",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "This guy is exceptional, delivered high quality work and good in communication. Would love to work with him again!",
    ],
  },
  {
    clientName: "william_034",
    platform: "Fiverr",
    platformLink: "https://www.fiverr.com/s/0b3lGQa",
    rating: 5,
    reviews: [
      "Excellent person he is, knows how to handle problems, a good communicator as well. Gave me high resolution AI images as per according to what I need. This guy is a beast!!",
    ],
  },
];

const TestimonialCard: React.FC<{ client: ClientReviews }> = ({ client }) => {
  return (
    <div className="bg-black text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="mb-3">{"⭐".repeat(client.rating)}</div>
        {client.reviews.map((text, index) => (
          <blockquote
            key={index}
            className="text-gray-300 mb-4 leading-relaxed italic"
          >
            &ldquo;{text}&rdquo;
          </blockquote>
        ))}
      </div>

      {/* Bottom: client name + platform */}
      <div className="mt-auto">
        <p className="font-semibold text-lg">— {client.clientName}</p>
        {client.platformLink ? (
          <a
            href={client.platformLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff004f] text-sm mt-2 inline-block hover:underline"
          >
            {client.platform}
          </a>
        ) : (
          <p className="text-gray-400 text-sm mt-2">{client.platform}</p>
        )}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-[#ff004f]" id="projects">
      <div className="relative py-10 xl:pb-16 max-w-[1500px] mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center items-start px-6 sm:px-14 xl:px-24">
          <Heading text="Testimonials" />
        </div>

        {/* Reviews Grid - showing 6 clients */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 sm:px-14 xl:px-24 auto-rows-fr">
          {CLIENT_REVIEWS.slice(0, 6).map((client) => (
            <TestimonialCard key={client.clientName} client={client} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://www.fiverr.com/s/0b3lGQa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#ff004f] px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            View All Reviews on Fiverr
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
