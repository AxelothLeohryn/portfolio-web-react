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
      className="bg-gray-800 text-slate-100 text-[0.6rem] font-medium inline-flex items-center px-2.5 py-1 rounded-b-lg hover:scale-110 transition cursor-pointer"
      style={style}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img className="size-5 me-1.5" src={IconComponent} alt={tag} />
      {tag}
    </span>
  );
};

export default ProjectTag;
