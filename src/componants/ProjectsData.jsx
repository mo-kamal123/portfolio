import img1 from "../images/projects imgs/Next.png";
import img2 from "../images/projects imgs/Medicare.png";
import img3 from "../images/projects imgs/Portfolio.png";
import img4 from "../images/projects imgs/Social.png";
import img5 from "../images/projects imgs/Apple.png";
import img6 from "../images/projects imgs/mo.jpg";
import img7 from "../images/projects imgs/Bondi.png";
import img8 from "../images/projects imgs/kasper.jpg";
import img9 from "../images/projects imgs/leon.jpg";
import img10 from "../images/projects imgs/Tiba.png";
import img11 from "../images/projects imgs/Hayat.jpg";
import img12 from "../images/projects imgs/Fantasy.png";
import img13 from "../images/projects imgs/Eventually.png";
import img14 from "../images/projects imgs/todo.png";
import img15 from "../images/projects imgs/nft.png";
import img16 from "../images/projects imgs/Product.png";
import img17 from "../images/projects imgs/social1.jpg";

export const FullSites = [
  {
    name: "NEXT",
    description:
      "Interactive e-commerce store with React, Tailwind, Firebase, and Redux. Offers responsive design, product sliders, cart management, and user authentication.",
    img: img1,
    skills: ["React js", "Tailwind", "Redux toolkit", "Swiper js", "Firebase"],
    live: "https://next-mo.surge.sh/",
    to: "fade-left",
  },
  {
    name: "Medicare",
    description:
      "User-friendly medical clinic website using React, Tailwind, and Firebase.Features appointment booking, patient data management, and a responsive design.",
    img: img2,
    skills: ["React js", "Tailwind", "Firebase"],
    live: "https://medi-care-mo.netlify.app/",
    to: "fade-right",
  },
  {
    name: "MK",
    description:
      "Visually striking portfolio built with React, Tailwind, and Firebase.Showcases projects, skills, and experiences with animations and interactive elements.",
    img: img3,
    skills: ["React js", "Tailwind", "AOS", "Swiper js", "Firebase"],
    live: "https://mo-kamal-portfolio.netlify.app/",
    to: "fade-left",
  },
  {
    name: "Loopify",
    description:
      " Dynamic social media app using HTML, CSS, JavaScript, Bootstrap, and Axios. Features user profiles, posts, likes, comments, and real-time updates.",
    img: img17,
    skills: ["HTML", "CSS", "JS", "Tailwind", "AXIOS"],
    live: "https://mo-kamal123.github.io/loopify/",
    to: "fade-right",
  },
  {
    name: "social media app",
    description:
      " Dynamic social media app using HTML, CSS, JavaScript, Bootstrap, and Axios. Features user profiles, posts, likes, comments, and real-time updates.",
    img: img4,
    skills: ["HTML", "CSS", "JS", "BOOTSTRAP", "AXIOS"],
    live: "https://mo-kamal123.github.io/social-media-app/",
    to: "fade-left",
  },  
  {
    name: "APPLE STORE",
    description:
      "E-commerce website inspired by the Apple Store, using HTML, CSS, and JavaScript.Features product image sliders and a clean, modern design.",
    img: img5,
    skills: ["HTML", "CSS", "JS"],
    live: "https://mo-kamal123.github.io/apple-store/",
    to: "fade-right",
  },
  {
    name: "MO",
    description:
      " Basic personal website using HTML and CSS for content structure and styling. Includes sections for about, portfolio, and contact information.",
    img: img6,
    skills: ["HTML", "CSS"],
    live: "https://mo-kamal123.github.io/mo/",
    to: "fade-left",
  },
  {
    name: "Bondi",
    description:
      " Responsive marketing agency website using HTML and Bootstrap. Features services, case studies, and client testimonials.",
    img: img7,
    skills: ["html", "CSS", "BOOTSTRAP"],
    live: "https://mo-kamal123.github.io/Bond",
    to: "fade-right",
  },
  {
    name: "Kasper",
    description:
      "Visually appealing marketing agency website using HTML and CSS.Focuses on showcasing services, case studies, and client testimonials.",
    img: img8,
    skills: ["HTML", "CSS"],
    live: "https://mo-kamal123.github.io/kasper/",
    to: "fade-left",
  },
  {
    name: "Leon",
    description:
      "Functional marketing agency website using HTML and CSS. Emphasizes user-friendly navigation and clear calls-to-action.",
    img: img9,
    skills: ["HTML", "CSS"],
    live: "https://mo-kamal123.github.io/leon/",
    to: "fade-right",
  },
];

export const landing = [
  {
    name: "Tiba",
    description:
      "Nature-inspired landing page for Tiba Farm using HTML, CSS, and JavaScript. Showcases fresh produce and sustainable practices.",
    img: img10,
    skills: ["HTML", "CSS", "JS"],
    live: "https://mo-kamal123.github.io/TIBA/",
    to: "fade-left",
  },
  {
    name: "Hayat",
    description:
      "Elegant landing page for Hayat hotel using HTML, CSS, and JavaScript. Features a responsive design for seamless user experience.",
    img: img11,
    skills: ["HTML", "CSS"],
    live: "https://mo-kamal123.github.io/hayat/",
    to: "fade-right",
  },
  {
    name: "Fantasy",
    description:
      " A vibrant and modern landing page for Fantasy Hotel. With HTML for content structure, CSS for a sleek, immersive design,",
    img: img12,
    skills: ["HTML", "CSS"],
    live: "https://mo-kamal123.github.io/landing-page/",
    to: "fade-left",
  },
  {
    name: "eventually",
    description:
      "Minimalist login page for Eventually platform using HTML and CSS.Offers a clean, intuitive layout with smooth transitions.",
    img: img13,
    skills: ["HTML", "CSS"],
    live: "https://mo-kamal123.github.io/My-eventually/",
    to: "fade-right",
  },
  {
    name: "TODO",
    description:
      "Functional to-do list app landing page using HTML, CSS, and JavaScript. Allows users to add, edit, and remove tasks.",
    img: img14,
    skills: ["HTML", "CSS", "JS"],
    live: "https://mo-kamal123.github.io/todo/",
    to: "fade-left",
  },
];

export const challenges = [
  {
    name: "NFT-Card",
    description:
      "Modern NFT card preview landing page using HTML and CSS. Showcases a featured NFT with a minimalist design.",
    img: img15,
    skills: ["HTML", "CSS"],
    live: "https://mo-kamal123.github.io/nft-preview/",
    to: "fade-right",
  },
  {
    name: "Product Preview",
    description:
      "Sleek product preview landing page using HTML and CSS. Features product images, descriptions, and pricing.",
    img: img16,
    skills: ["HTML", "CSS"],
    live: "https://mo-kamal123.github.io/broduct-preview/",
    to: "fade-left",
  },
];

export const allProjects = [...FullSites, ...landing, ...challenges];
