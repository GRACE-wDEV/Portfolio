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
  stemforces,
  gzoor,
  cineverse,
  hackclub,
  ghstem,
  codeforces,
  tictactoe,
  jobit,
  me,
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
    id: "repos",
    title: "Repos",
  },
  {
    id: "now",
    title: "Now",
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
    link: "https://elzero.org/",
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
    link: "https://stemgharbiya.app/",
    points: [
      "Paused web dev a bit to focus on the rigor of school and my first research project",
      "Finished 4 Research Projects; currently doing the fifth!",
      "Started to LOVE math",
      "Was an instructor for the web dev team for creating the official school website",
    ],
  },
  {
    title: "Competitive Programming",
    company_name: "Codeforces",
    icon: codeforces,
    iconBg: "#fff",
    date: "Jun 2024 - Present",
    link: "https://codeforces.com/profile/igrace",
    points: [
      "Started competitive programming on Codeforces (igrace).",
      "Solved over 477 problems ranging from 800 to 2700 difficulty.",
      "Read Competitive Programming's Handbook by Antti Laaksonen.",
      "Participated in several contests to improve problem-solving skills",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Self-Employed",
    icon: me,
    iconBg: "#000",
    date: "Jan 2023 - Present",
    link: null,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed 5+ projects including Gharbiya Hack Club, Stemforces, Gzoor Club, and more.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Looking for the next big challenge to level up my skills!",
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
    name: "Stemforces",
    description:
      "A gamified educational platform for Egypt's STEM students to progress in solving a bunck of worthy materials along with scores, leaderboards, and more!",
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
    image: stemforces,
    source_code_link: "https://github.com/GRACE-wDEV/Stemforces",
    live_demo: "https://stemforces.vercel.app",
  },
  {
    name: "GH STEM website",
    description:
      "I insctucted a team of developers to bring the first-ever school website",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient"
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: ghstem,
    source_code_link: "https://github.com/glory-dev/stemgharbiya",
    live_demo: "https://stemgharbiya.app",
  },
  {
    name: "Gzoor Club",
    description:
      "A sustainable carpooling platform connecting students for eco-friendly life at school",
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
    image: gzoor,
    source_code_link: "https://github.com/GRACE-wDEV/Gzoor-Club",
    live_demo: "https://gzoor-club.vercel.app",
  },
  {
    name: "Cineverse",
    description:
      "A movie finder platform along with the trending 5 movies functionality",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "REST api",
        color: "pink-text-gradient",
      },
    ],
    image: cineverse,
    source_code_link: "https://github.com/GRACE-wDEV/cineverse",
    live_demo: "https://igrace-cineverse.vercel.app/",
  },
  // {
  //   name: "Cocktail",
  //   description:
  //     "A GSAP-first website that includes cool animations.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "GSAP",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gzoor,
  //   source_code_link: "https://github.com/GRACE-wDEV/gsap-cocktail",
  //   live_demo: "https://gsap-cocktail.vercel.app",
  // },
  {
    name: "GH Hack Club",
    description:
      "I designed and developed the first-ever website for the hack club alog fouding the 4th season of the club",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient"
      },
    ],
    image: hackclub,
    source_code_link: "https://github.com/stemgharbiya/hackclub",
    live_demo: "https://gharbiya.hackclub.com/",
  },
  
  {
    name: "Tic Tac Toe",
    description:
      "A classical Tic tac toe game, but with game history.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "blue-text-gradient"
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/GRACE-wDEV/Tic-Tac-Toe",
    live_demo: "https://tic-tac-toe-three-eta-58.vercel.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
