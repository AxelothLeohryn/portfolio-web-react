import React from "react";

const SocialBadge = ({ text, Icon, link }) => {
  return (
    <a
      className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-base bg-white/5 hover:scale-105 hover:bg-gradient-to-t from-[#4599bb] to-[#00cee9] transition-all"
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
