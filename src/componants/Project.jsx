import { useEffect, useState } from "react";
import { FullSites, allProjects, challenges, landing } from "./ProjectsData";
import { motion } from "framer-motion";

const Project = () => {
  useEffect(() => {
    // Initialize AOS
    window.AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  const [category, setCategort] = useState(allProjects);
  const [visible, setVisible] = useState(5);
  const [active, setActive] = useState("all");
  const showMore = () => {
    setVisible((prev) => prev + 5);
  };
  const showLess = () => {
    setVisible((prev) => prev - 15);
  };
  let button;
  if (visible < category.length) {
    button = (
      <button onClick={showMore} className="bg-blue-500 px-3 py-1 my-4 rounded">
        show more
      </button>
    );
  } else if (visible <= 5) {
    button = "";
  } else {
    button = (
      <button onClick={showLess} className="bg-blue-500 px-3 py-1 my-4 rounded">
        show less
      </button>
    );
  }
  return (
    <div className="overflow-hidden">
      <div className="w-11/12 my-5 m-auto text-white ">
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-8xl font-extralight mb-5">Projects</h1>
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-center items-center gap-5 md:gap-10 lg:gap-16 w-full md:w-1/2 mx-auto my-10 py-3 rounded text-black bg-white "
        >
          <p
            className={` ${
              active === "all" ? "text-blue-500" : "text-black"
            } cursor-pointer hover:text-blue-500 `}
            onClick={() => {
              setCategort(allProjects);
              setActive("all");
            }}
          >
            All
          </p>
          <p
            className={` ${
              active === "full" ? "text-blue-500" : "text-black"
            } cursor-pointer hover:text-blue-500 `}
            onClick={() => {
              setCategort(FullSites);
              setActive("full");
            }}
          >
            FullSites
          </p>
          <p
            className={` ${
              active === "land" ? "text-blue-500" : "text-black"
            } cursor-pointer hover:text-blue-500 `}
            onClick={() => {
              setCategort(landing);
              setActive("land");
            }}
          >
            Landing
          </p>
          <p
            className={` ${
              active === "challenge" ? "text-blue-500" : "text-black"
            } cursor-pointer hover:text-blue-500 `}
            onClick={() => {
              setCategort(challenges);
              setActive("challenge");
            }}
          >
            Challenges
          </p>
        </div>
        <div>
          {category.slice(0, visible).map((project, index) => (
            <div
              key={index}
              data-aos={project.to}
              className="flex flex-col lg:flex-row justify-between items-center gap-8 border-b-2  py-10"
            >
              <div className="flex flex-col gap-5 lg:gap-10">
                <h1 className="text-3xl font-light">{project.name}</h1>
                <p className="text-sm font-light text-gray-300">
                  {project.description}
                </p>
                <div className="hidden lg:block">
                  <div className="mb-4">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-teal-800 px-2 py-1 mr-2 rounded hover:bg-teal-600 transition-all duration-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className=" w-28  bg-blue-500 px-2 py-1 text-xl">
                    <a href={project.live} target="_blank">
                      Go Live
                    </a>
                  </button>
                </div>
              </div>
              <motion.div
                // initial={{ filter: "grayscale(90%)" }}
                // whileHover={{ filter: "grayscale(0%)" }}
                // whileFocus={{ filter: "grayscale(0%)" }} // Add this line to handle focus
                // transition={{ duration: 0.3 }}
              >
                <img
                  src={project.img}
                  alt="project-img"
                  className="w-[700px] rounded"
                />
              </motion.div>
              <div className="block lg:hidden text-center ">
                <div>
                  {project.skills.map((skill, index) => (
                    <button key={index} className="bg-teal-800 px-2 py-1 mr-2 mb-2 rounded hover:bg-teal-600 transition-all duration-300 text-sm">
                      {skill}
                    </button>
                  ))}
                </div>
                <button className=" w-28  bg-blue-500 px-2 py-1 text-xl">
                  <a href={project.live} target="_blank">
                    Go Live
                  </a>
                </button>
              </div>
            </div>
          ))}
          <div data-aos="fade-up" className=" flex justify-center items-center">
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
