import React from "react";

const SocialBadge = ({ text, Icon, link }) => {
  return (
    <a
      className="rounded-full border border-b-cyan-950 border-t-cyan-700 border-cyan-800 shadow shadow-cyan-800/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-white bg-white/5 hover:scale-105 hover:bg-[#00cee9] hover:text-black hover:border-cyan-400 hover:shadow-cyan-400 hover:shadow-2xl transition-all duration-100"
      href={link}
      target=" _blank"
      rel="noopener noreferer"
    >
      <Icon/>
      {text}
    </a>
  );
};

export default SocialBadge;
