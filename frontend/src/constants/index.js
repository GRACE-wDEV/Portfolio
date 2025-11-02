import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  notion,
  github,
  docker,
  stem,
  meta,
  starbucks,
  elzero,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Programmer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI & Math Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "notion",
    icon: notion,
  },
  {
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "The start",
    company_name: "Elzero Web School",
    icon: elzero,
    iconBg: "#005ecc",
    date: "Oct 2022 - June 2023",
    points: [
      "Learned HTML, CSS, and JavaScript with Elzero Web School.",
      "Completed all coursework and assignments.",
      "Used Markdown and GitHub for documentation and version control.",
      "Began using Notion for project management.",
    ],
  },
  {
    title: "Admitted to a STEM school — Ranked 14th/20000 in the admission test",
    company_name: "Gharbiya STEM High School",
    icon: stem,
    iconBg: "#000",
    date: "Sep 2023 - Present",
    points: [
      "Paused web dev a bit to focus on the rigor of school and my first research project",
      "Finished 4 Research Projects; currently doing the fifth!",
      "Started to LOVE math",
      "Was an instructor for the web dev team for creating the official school website",
    ],
  },
  {
    title: "Competitive Programming",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ahmed proved me wrong.",
    name: "Yousef Amir",
    designation: "President",
    company: "Hack Club",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ahmed does.",
    name: "Saif Amr",
    designation: "Full Stack Developer",
    company: "nt",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ahmed optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Marwan Elgharably",
    designation: "Head",
    company: "Robotics",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/adrianhajdin/project_car_showcase",
    live_demo: "https://car-rent-demo.vercel.app", // Example URL
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/adrianhajdin/project_next13_job_board",
    live_demo: "https://job-it-demo.vercel.app", // Example URL
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/adrianhajdin/project_travel",
    live_demo: "https://trip-guide-demo.vercel.app", // Example URL
  },
];

export { services, technologies, experiences, testimonials, projects };
