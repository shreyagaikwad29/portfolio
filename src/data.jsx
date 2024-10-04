import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";
import Work7 from "./assets/project-7.jpeg";
import Work8 from "./assets/project-8.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/About",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/Projects",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/Contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Shreya",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Gaikwad",
  },

  {
    id: 3,
    title: "Age : ",
    description: "20 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Bhandup, Mumbai",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8108411828",
  },

  {
    id: 8,
    title: "Email : ",
    description: "shreyaagaikwad11@mail.com",
  },

  {
    id: 9,
    title: "Langages : ",
    description: "English, Hindi, Marathi",
  },
];

export const stats = [
  {
    id: 1,
    no: "12+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "97+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "53+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaBriefcase />,
    year: "2020 - 2023",
    title: "<span> BSC IT </span>",
    desc: "from SIES College Of Arts, Science and Commerce in 2023 with 7.60 CGPA",
  },

  {
    id: 2,
    category: "education",
    icon: <FaBriefcase />,
    year: "2019 - 2020",
    title: "<span> HSC </span>",
    desc: "from Navjeevan College in [2019-20] with percentage of 65 %",
  },

  {
    id: 3,
    category: "education",
    icon: <FaBriefcase />,
    year: "2005 - 2013",
    title: "<span> SSC </span>",
    desc: "from Sahyadri Vidyaandir School in [2017-18] with Percentage of 83%",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "89",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "SQL",
    percentage: "66",
  },

  {
    id: 5,
    title: "Core Java",
    percentage: "95",
  },

  {
    id: 6,
    title: "Advanced java",
    percentage: "50",
  },

  {
    id: 7,
    title: "Hibernate",
    percentage: "65",
  },

  {
    id: 8,
    title: "React",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Health Care APP",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Health Care APP",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Flutter, Dart",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Fahsion Hunt",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Fahsion Hunt",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Core Java",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Netflix Clone",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Netflix Clone",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Royal Enfield Clone",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Royal Enfield Clone",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "21 Card Game",
    details: [
      {
        title: "Project : ",
        desc: "21 Card Game",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Music Player",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Music Player",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: "Weather App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Weather App",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: "Quiz App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Quiz App",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
