import React from "react";

const ExperienceItem = ({
  title,
  description,
  date,
  link,
  linkDescription,
  type,
}) => {
  const isWork = type === "work";
  const isEducation = type === "education"; 

  return (
    <>
      <div className="absolute size-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-300 dark:text-gray-500">
        {date}
      </time>
      <div className="hover:bg-black/20 rounded-lg transition p-2">
        <h3 className={`text-lg font-semibold ${isWork ? 'text-blue-400' : isEducation ? 'text-blue-200' : ''} my-4`}>{title}</h3>
        <p className="mb-4 text-base font-normal text-gray-400 dark:text-gray-100 text-pretty">
          {description}
        </p>

        {link && (
          <>
            <a
              href={link}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
