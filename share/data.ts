import { IMAGES } from "./assets";

export const HEADER_ITEMS: HeaderItem[] = [
  // {
  //   name: "Home",
  //   href: ROUTES.home,
  // },
  // {
  //   name: "About",
  //   href: ROUTES.about,
  // },
  // {
  //   name: "Careers",
  //   href: ROUTES.careers,
  // },
  // {
  //   name: "Portfolio",
  //   href: ROUTES.portfolio,
  // },
];

export const FOOTER_ITEMS: FooterItems = {
  email: {
    value: "hadeeda980@gmail.com",
    href: "mailto:hadeeda980@gmail.com",
  },
  phone: "+923054827267",
  socials: [
    {
      icon: IMAGES.socials.facebook,
      href: "https://www.facebook.com/sheikh.hadeed.3/",
    },
    {
      icon: IMAGES.socials.linkedin,
      href: "https://www.linkedin.com/in/hadeed-ahmed-27a97a268/",
    },
    {
      icon: IMAGES.socials.instagram,
      href: "https://www.instagram.com/hadeedsheikhh?igsh=MWJoNHFoYmVwZ3hmNg%3D%3D&utm_source=qr ",
    },
  ],
  linkItems: [
   
  ],
};

export const CLIENTS: Skill[] = [
  // {
  //   name: "C/C++",
  //   logo: IMAGES.clients.c,
    
  // },
  {
    name: "ReactJS",
    logo: IMAGES.skills.react,
  },
  {
    name: "MongoDB",
    logo: IMAGES.skills.mongodb,
  },
  {
    name: "SQL",
    logo: IMAGES.skills.sql,
  },
  {
    name: "Python",
    logo: IMAGES.skills.python,
  },
  {
    name: "NextJS",
    logo: IMAGES.skills.next,
  },
  {
    name: "NodeJS",
    logo: IMAGES.skills.node,
  },
  {
    name: "Tailwind",
    logo: IMAGES.skills.tailwind,
  },
  // {
  //   name: "HTML",
  //   logo: IMAGES.clients.html,
  // },
 
];

export const EXPERIENCE: Experience[] = [
  {
    title: "2021",
    description:"from",
 },
  {
    title: "2025",
    description: "to"
   },
 
];



export const PROJECTS: Project[] = [
  {
    imageUrl: IMAGES.projects.news,
    title: "NewsAPI",
    description:"Developed a dynamic and responsive news application using React that integrates with a News API to provide users with the latest news articles from various sources. The application features a sleek, user-friendly interface designed with Bootstrap CSS, ensuring a seamless and visually appealing user experience across different devices.",
  },
  {
    imageUrl: IMAGES.projects.login,
    title: "Transparent Login Form",
    description:
    "Created a modern and visually appealing login form using HTML and CSS, featuring a transparent background that allows the form to seamlessly blend with any webpage. The form includes user-friendly input fields with smooth transitions and animations, enhancing the overall user experience. ",
  },
  {
    imageUrl: IMAGES.projects.textUtils,
    title: "Text-Utils",
    description:
    "Developed an engaging website named Text Utils using ReactJS, designed to manage text efficiently. The application features both light and dark background modes, allowing users to switch between themes based on their preference. It includes text transformation, character and word count, and formatting options etc. ",
  },
  {
    imageUrl: IMAGES.projects.shows,
    title: "Landing Page",
    description:
    "Developed a sophisticated landing page for an online premium movies website using HTML and CSS. The landing page is designed to captivate visitors with its visually appealing layout and intuitive navigation. Users can easily sign up and choose from various subscription plans to get started.",
  },
  {
    imageUrl: IMAGES.projects.chat,
    title: "Real Time Chat",
    description:
    "Developed a dynamic chat application using Node.js and Socket.IO, facilitating instant messaging and real-time communication between users. The application is making it easy for users to send and receive messages seamlessly. By utilizing Node.js and the real-time capabilities of Sockets, it delivers low latency and high performance.",
  },
  {
    imageUrl: IMAGES.projects.pharmacy,
    title: "Pharmacy Management",
    description:
    "I developed a comprehensive Pharmacy Management System using ASP.NET, C#, and Microsoft SQL Server, which streamlines operations including inventory, sales, and prescription management, while enhancing customer and supplier interactions through detailed analytics. I didn't focus much on front-end side here.",
  },
  {
    imageUrl: IMAGES.projects.maze,
    title: "Bee Game",
    description:
    "The Bee Game is a maze-based arcade game developed using Assembly x86. In this game, players navigate a bee character through a complex maze to find and collect honey. This project demonstrates my proficiency in low-level programming and understanding of computer architecture.",
  },
  {
    imageUrl: IMAGES.projects.dipProject,
    title: "Pesudo Coloring",
    description:
    "Made a project regarding Digital Image Processing. The technique I used in this project is the art of Pseudo Coloring ( Pseudo coloring allows for customization of color schemes to suit specific applications or user preferences). This flexibility can be valuable in various fields such as medical imaging and scientific visualization.",
  },
  {
    imageUrl: IMAGES.projects.foodpanda,
    title: "Food Delivery Management",
    description:
    "Developed a comprehensive text-based application in C++ designed for managing food delivery and cooking operations. This system efficiently handles all aspects of the operations using text-based input and output, providing a straightforward and accessible interface.",
  },

  {
    imageUrl: IMAGES.projects.artist,
    title: "Artists Management",
    description:
    "Developed a comprehensive text-based application in C++ for managing records of artists, including writers, singers, and actors. This application provides a user-friendly interface for handling all aspects of artist record management through text-based input and output. ",
  },
];


export const CERTIFICATES: Certificate[] = [
  {
    imageUrl: IMAGES.certificates.deans,
    title: "Academic Excellence",
    description:
      "Certified with academic recognition after an excellent result in Fall 2022 semester, also added in the deans list of students.",
  },
  {
    imageUrl: IMAGES.certificates.hackerrank,
    title: "SQL Test",
    description:
      "Certified after applying and testing my skills in SQL database at online platform called as HackerRank.",
  },
  {
    imageUrl: IMAGES.certificates.softec23,
    title: "Softec 23",
    description:
      "Certified for managing SOFTEC, Pakistan's largest tech event, held at FAST NUCES, Lahore.",
  },
  {
    imageUrl: IMAGES.certificates.nascon24,
    title: "Nascon 24",
    description:
      "Certified for participating as a team in the Web Development competition at NASCON, held at FAST NUCES, Islamabad.",
  },

  
];


export const AWARDS: Award[] = [
  {
    imageUrl: IMAGES.awards.school3,
    title: "First Award",
    description:
      "Got my first medal at school. It marked the beginning of my journey towards excellence, reinforcing my commitment to continuous growth and achievement.",
  },
  {
    imageUrl: IMAGES.awards.school1,
    title: "Top Honors",
    description:
      "Receiving my second school medal was a pivotal moment in my academic career. This recognition not only validated my efforts but also significantly boosted my confidence.",
  },
  {
    imageUrl: IMAGES.awards.school2,
    title: "Outstanding Performance",
    description:
      "Receiving this award was a testament to my dedication and hard work. This recognition further motivated me to excel my goals with even greater determination.",
  },
  {
    imageUrl: IMAGES.awards.medal,
    title: "Milestone Achievement",
    description:
      "This award was a significant milestone in my professional journey during university. It recognized my contribution, highlighting my dedication and skill in Computer Science. ",
  },
 

 
];

// data.ts
export const HIRING: Hire[] = [
  {
    title: "Web Developer",
    description: "at Fiverr",
    additionalDescription: "(Current)",
  },
  {
    title: "Internee",
    description: "at CodSoft",
    additionalDescription: "(Aug-2023 to Sep-2023)",
  },
  {
    title: "Internee",
    description: "at Grootcore Systems",
    additionalDescription: "(Current)",
  },
];


