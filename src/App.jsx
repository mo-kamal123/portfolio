import { useRef } from "react";
import "./App.css";
import Hero from "./componants/Hero";
// import NextSection from "./componants/Skills";
import Skills from "./componants/Skills";
import Project from "./componants/Project";
import Contact from "./componants/Contact";
import TopButton from "./componants/TopButton";

function App() {
  const nextSectionRef = useRef(null);

  const scrollToNext = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{backgroundImage: 'url("../src/images/fullsite-bg.jpg")'}} className="bg-gray-900 overflow-hidden ">
      <Hero scrollToNext={scrollToNext}/>
      <TopButton />
      <div className="flex items-center h-svh" ref={nextSectionRef}>
        <Skills />
      </div>
      <div>
        <Project />
      </div>
      <div className="mb-10 lg:mb-0">
        <Contact />
      </div>
    </div>
  );
}

export default App;
