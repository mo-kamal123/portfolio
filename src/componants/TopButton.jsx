import top from "../images/icons/topicon.svg"
import React, { useState, useEffect } from 'react';

const topButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust this value based on when you want the button to appear
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed z-20 bottom-4 right-4 p-2 shadow-md "
        aria-label="Scroll to top"
      >
        <img className="w-10" src={top} alt="" />
      </button>
    )
  );
};

export default topButton;