import React, { useState, useEffect } from "react";

import "./btnUpDown.css";

const ScrollButton = () => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.scrollHeight - 1500; // Adjust this value to set the threshold
    setIsNearBottom(scrollPosition >= threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPosition = () => {
    window.scrollTo({
      top: isNearBottom ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button id="scrollDown" onClick={scrollToPosition} title={isNearBottom ? "Posun Nahoru" : "Posun Dolů"}>
      <img src="/img/btnUpDown.svg" alt={isNearBottom ? "Scroll Up" : "Scroll Down"} style={isNearBottom ? { transform: "rotate(180deg)", width: "20px", height: "20px", transition: "transform 0.3s" } : { transition: "transform 0.3s", transform: "rotate(0deg)", width: "20px", height: "20px" }} />
    </button>
  );
};

export default ScrollButton;
