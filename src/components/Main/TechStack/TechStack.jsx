import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import tagIcons from "../../../utils/tagIcons";

const TechStack = () => {
  const iconsRef = useRef(null);

  // Specify the order of the icons you want to display
  const iconOrder = [
    "REACT",
    "TYPESCRIPT",
    "NODEJS",
    "EXPRESS",
    "MONGODB",
    "SASS",
    "TAILWINDCSS",
    "CYPRESS",
    "JEST",
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
  ];

  useEffect(() => {
    requestAnimationFrame(() => {
      const scrollWidth = iconsRef.current.scrollWidth;
      const offsetWidth = iconsRef.current.offsetWidth;
      const totalScroll = scrollWidth - offsetWidth;

      gsap.fromTo(
        iconsRef.current,
        { x: 0 },
        {
          x: () => `-${totalScroll}px`,
          ease: "linear",
          duration: 5, // Adjusted for demonstration. Consider slowing it down for visibility.
          repeat: -1, // Repeat the animation indefinitely
          yoyo: true, // Go back and forth
        }
      );
    });
  }, []);

  return (
    <div className="overflow-hidden mt-36 w-full">
      <div ref={iconsRef} className="flex justify-start items-center gap-5 mx-5">
        {iconOrder.map((key) => {
          const IconData = tagIcons[key];
          return IconData ? (
            <img
              key={key}
              src={IconData.icon}
              alt={`${key} icon`}
              className="w-[50px] h-auto"
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default TechStack;
