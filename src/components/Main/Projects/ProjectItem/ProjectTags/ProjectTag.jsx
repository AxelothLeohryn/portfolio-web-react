import { useState } from "react";
import tagIcons from "../../../../../utils/tagIcons";

const ProjectTag = ({ tag }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { icon: IconComponent, color } = tagIcons[tag.toUpperCase()] || {};
  const boxShadowOpacity = isHovering ? "" : "10";
  const style = {
    borderColor: color || "#FFFFFF",
    borderWidth: "1px",
    boxShadow: `0px 0px 200px 15px ${color}${boxShadowOpacity}`,
  };

  return (
    <span
      className="project-tag bg-gray-900 text-slate-300 text-[0.6rem] md:text-[0.8rem] font-semibold inline-flex items-center px-2.5 py-1 rounded-b-xl hover:scale-110 transition cursor-pointer"
      style={style}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img className="size-5 me-1.5" src={IconComponent} alt={tag} />
      {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}
    </span>
  );
};

export default ProjectTag;
