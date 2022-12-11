import React from "react";
import { motion } from "framer-motion";

const CourseCard = (props) => {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.05 }} className="">
        <div class="max-w-sm p-6 bg-white border h-80 grid border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-1 w-15 m-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {props.desc}
          </p>
          <br />
          <hr className="bg-gray-500 border-none h-[1px]" />
          <p class="font-bold text-lg dark:text-white">
            {props.price} ₹
            <sub>
              / <sub>month</sub>
            </sub>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseCard;
