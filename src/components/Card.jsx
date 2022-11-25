import React from "react";

const CourseCard = (props) => {
  return (
    <div>
      <div className="">
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-1 w-15 m-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {props.desc}
          </p>
          <br />
          <p class="font-bold text-lg text-white">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
