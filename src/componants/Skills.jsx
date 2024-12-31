import React, { useEffect } from "react";
import { motion } from "framer-motion";

import icon1 from "../images/icons/icon1.svg";
import icon2 from "../images/icons/icon2.svg";
import icon3 from "../images/icons/icon3.svg";
import icon4 from "../images/icons/icon4.svg";
import icon5 from "../images/icons/icon5.svg";
import icon6 from "../images/icons/icon6.svg";
import icon7 from "../images/icons/icon7.svg";
import icon8 from "../images/icons/icon8.svg";
import icon9 from "../images/icons/icon9.svg";
import icon10 from "../images/icons/icon10.svg";
import icon11 from "../images/icons/icon11.svg";
import icon12 from "../images/icons/icon12.svg";
import icon13 from "../images/icons/icon13.svg";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: icon1 },
    { name: "CSS", icon: icon2 },
    { name: "JavaScript", icon: icon3 },
    { name: "React JS", icon: icon4 },
    { name: "Tailwind CSS", icon: icon5 },
    { name: "Bootstrap CSS", icon: icon6 },
    { name: "Redux Toolkit", icon: icon7 },
    { name: "React Router", icon: icon8 },
    { name: "Firebase", icon: icon9 },
    { name: "Framer Motion", icon: icon10 },
    { name: "Swiper JS", icon: icon11 },
    { name: "Git", icon: icon12 },
    { name: "Github", icon: icon13 },
  ];
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Initialize AOS
    window.AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);
  return (
    <>
      <div className="w-11/12 m-auto  text-center  lg:py-10 ">
        <div className="text-white mb-10" data-aos="fade-right">
          <h1 className="text-8xl font-extralight mb-10 lg:mb-8">Skills</h1>
          <p
            style={{ fontFamily: '"poppins", sans serf' }}
            className="text-base lg:text-lg mb-5 text-gray-400"
          >
            In this section, I am pleased to present a comprehensive showcase of
            my frontend development skills. As a dedicated professional with a
            passion for crafting visually appealing and user-friendly web
            interfaces
          </p>
        </div>
        <div data-aos="fade-up">
          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              scrollbar={{ draggable: true }}
              loop={true}
              className="p-12"
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 60,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 100,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 55,
                },
              }}
            >
              {skills.map((skill, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div
                    style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)" }}
                    className="min-h-[160px] p-5 bg-gray-900 drop-shadow-md shadow-custom  rounded text-white font-semibold text-lg  flex flex-col justify-between items-center gap-3"
                  >
                    <motion.img
                      whileHover={{ scale: 1.3 }}
                      src={skill.icon}
                      alt="skills icon"
                      className="w-20"
                    />
                    <h1>{skill.name}</h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
