import { useEffect, useState } from "react";
import logo from "../images/logo2.png";
import cv from "../../public/Mostafa-Kamal-CV.pdf"
import { motion } from "framer-motion";
const Hero = ({ scrollToNext }) => {
  const texts = [
    "Hi, I'm Mostafa Kamal",
    "I'm a Front-End Developer.",
    "Let's build something great!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 200;
  const deleteSpeed = 150;

  useEffect(() => {
    const handleTyping = () => {
      const currentString = texts[index];

      if (isDeleting) {
        setCurrentText(currentString.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentText(currentString.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through texts
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timer); // Clear timeout on cleanup
  }, [charIndex, isDeleting, index]);

  const scrollToContact = ()=> {
    document.getElementById("contact").scrollIntoView({behavior: 'smooth' })
  }
  return (
    <div className="text-white">
      <div className="relative">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{type: "spring", stiffness: 50 }}
          className="w-full flex justify-center py-2  "
        >
          <img src={logo} alt="Logo" className="w-28 cursor-pointer " />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 10 }}
          className="flex flex-col gap-0  items-center justify-center h-[calc(100vh-80px)]"
        >
          <h1 className="text-6xl text-center md:text-6xl lg:text-8xl mb-20 lg:mb-0 h-[200px] lg:h-fit ">
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent typed-text transition-opacity duration-300 ease-in-out">
              {currentText}
            </span>
            <span className="blink-cursor bg-white w-1 h-8 lg:h-12 inline-block ml-1"></span>
          </h1>
          <div className="my-5 lg:my-20 flex gap-10">
            <button onClick={scrollToContact} className=" bg-sky-600 px-5 py-2 rounded-md text-white text-lg">
              Hire me
            </button>
            <a href={cv} download="Mostafa-Kamal-CV.pdf">
            <button className=" bg-sky-600 px-5 py-2 rounded-md text-white text-lg">
              {" "}
              download CV
            </button>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-5 flex w-full items-center justify-center flex-col">
        <p className="text-sm text-gray-400">Click here to see More</p>
        <motion.div
          initial={{y: 0}}
          animate={{ y: [ 20, -20, 0,20, -20, 0,20, -20, 0,20, -20, 0,20, -20, 0] }}
          transition={{ duration: 2 }}
          onClick={scrollToNext}
          className="mt-0 px-3 py-3  text-gray-300 hover:text-white rounded-full hover:border-blue-600 transition"
        >
          <i className="fa-solid fa-angles-down text-2xl"></i>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
