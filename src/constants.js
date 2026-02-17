// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';



// Education Section Logo's
import rgpvLogo from './assets/education_logo/rgpv_logo.png';
import highLogo from './assets/education_logo/high_logo.png';

// Project Section Logo's
import ebayLogo from './assets/work_logo/ebay.png';
import skywingsLogo from './assets/work_logo/skywings.png';
import coutryLogo from './assets/work_logo/country.jpg';
import learningLogo from './assets/work_logo/learn_section.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },

    ],
  },
  // {
  //   title: 'Backend',
  //   skills: [

  //     { name: 'Node JS', logo: nodejsLogo },
  //     { name: 'Express JS', logo: expressjsLogo },
  //     { name: 'MongoDB', logo: mongodbLogo },

  //   ],
  // },
  
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },

    ],
  },
];


export const education = [

  {
    id: 0,
    img: rgpvLogo,
    school: "SGBM College, Jabalpur",
    date: "July 2019 - June 2023",
    grade: "8.33 CGPA",
    desc: "I have completed my Bachelor's degree in Computer Science Engineering (CSE) from RGPV University Bhopal, Jabalpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Object-Oriented Programming, Computer Science, Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at SGBM College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - CSE (Computer Science Engineering)",
  },
  {
    id: 1,
    img: highLogo,
    school: "Higher Secondary School Pathasihora, Mandla",
    date: "Apr 2018 - March 2019",
    grade: "68.87%",
    desc: "I completed my class 12 education from Higher Secondary School, Pathasihora, Mandla, under the Mp board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "Mp Board(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: highLogo,
    school: "High School Deori, Mandla",
    date: "Apr 2016 - March 2017",
    grade: "63.33%",
    desc: "I completed my class 10 education from High  School, Deori, under the Mp board, where I studied Science with Additional Subjects .",
    degree: "Mp Board(X), Science with Additional Subjects ",
  },
];

export const projects = [
  {
    id: 0,
    title: "E-commerce Online Shopping",
    description:
      "A powerful and user-friendly React.js application designed to explore and showcase how a user can shop from eBay while sitting at home. In this app, each person can select their favorite clothes and place an order. It is an essential tool for both developers and recruiters.",
    image: ebayLogo,
    tags: [ "CSS","Tailwind CSS", "React JS", "API"],
    github: "https://github.com/ambikasahu482/ebay-frontend-web",
    webapp: "https://amtrends.netlify.app/",
  },
   {
    id: 3,
    title: "E-Learning Web",
    description:
    "Complete Responsive E-learning Education Website using ReactJS +Tailwind CSS + Framer-motion",
    image: learningLogo,
    tags: ["React JS", "Tailwind CSS","Framer-motion","EmailJS"],
    github: "https://github.com/ambikasahu482/e-learning",
    webapp: "https://amlearning.netlify.app/",
  },
  {
    id: 1,
    title: "skywings travel",
    description:
    "A responsive frontend travel website built using HTML, CSS, and JavaScript that allows users to explore destinations and book trips with a smooth and user-friendly interface.",
    image: skywingsLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ambikasahu482/travel-app",
    webapp: "https://amtravel.netlify.app/",
  },
  {
    id: 2,
    title: "Countries API ",
    description:
    "Complete Responsive Quiz Feature  website built using HTML, CSS, and JavaScript",
    image: coutryLogo,
    tags: [ "HTML", "CSS", "JavaScript","Rest API"],
    github: "https://github.com/ambikasahu482/country-api",
    webapp: "https://amcountry.netlify.app/",
  },
 
];  