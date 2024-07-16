import React from "react";

const ExperienceItem = ({
  title,
  description,
  icon,
  items,
  extraDescription,
  date,
  link,
  linkDescription,
  type,
}) => {
  const isWork = type === "work";
  const isEducation = type === "education";

  return (
    <>
      {/* <div className="absolute -translate-x-2 size-3 bg-neutral-700 rounded-full mt-2 border border-neutral-700"></div> */}
      <div className="transition p-5">
        <div
          className={`text-xl font-bold flex flex-row gap-4 md:items-center ${
            isWork ? "text-blue-500" : isEducation ? "text-neutral-100" : ""
          } mt-4`}
        >
          <img
            className="rounded-full size-16 md:size-12"
            src={icon}
            alt="Several Energy SL"
          />
          <div>
            <h3>{title}</h3>
            <time className="my-1 text-sm font-normal italic leading-none text-gray-300">
              {date}
            </time>
          </div>
        </div>
        <p className="my-6 text-sm font-medium text-gray-400 text-pretty">
          {description}
        </p>
        {items && (
          <ul className="list-disc pl-5 mb-5">
            {items.map((item, id) => (
              <li
                key={id}
                className="text-sm font-normal text-gray-500 text-pretty"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        {extraDescription && (
          <p className="mb-4 text-sm font-normal text-gray-400 text-pretty">
            {extraDescription}
          </p>
        )}
        {link && (
          <>
            <a
              href={link}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-neutral-900 border border-gray-500 rounded-lg hover:bg-neutral-800 hover:text-white focus:z-10 focus:ring-2 focus:outline-none focus:ring-gray-500"
            >
              {linkDescription}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 14 10"
              />
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default ExperienceItem;
