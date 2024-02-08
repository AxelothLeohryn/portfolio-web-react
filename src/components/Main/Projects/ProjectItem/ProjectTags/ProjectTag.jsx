import tagIcons from "../../../../../assets/tag-icons/tagIcons"; // Adjust the path to where tagIcons.js is located

const ProjectTag = ({ tag }) => {
  const { icon: IconComponent, color } = tagIcons[tag.toUpperCase()] || {};
  const style = {borderColor: color || "#FFFFFF", borderWidth: "1px", boxShadow: `2px 2px 10px ${color}10`};

  return (
    <span className="bg-gray-800 text-slate-100 text-[0.6rem] font-semibold inline-flex items-center px-2.5 py-1 rounded-full dark:bg-gray-700 dark:text-blue-400 hover:border-2" style={style}>
      <img className="size-5 me-1.5" src={IconComponent} alt={tag} />
      {tag}
    </span>
  );
};

export default ProjectTag;
