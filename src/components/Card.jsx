import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context/context";

const CourseCard = (props) => {
  const { toggleModal } = useGlobalContext();

  return (
    <div>
      <motion.div whileHover={{ scale: 1.05 }} className="">
        <div className="max-w-sm p-6 bg-white border h-80 grid content-between justify-between border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-1 w-15 m-2">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {props.desc}
            </p>
          </div>
          <br />
          <div className="grid justify-between gap-x-4 justify-items-center grid-flow-row  md:grid-cols-2 gap-y-3 md:gap-y-0">
            <p className="font-bold text-lg dark:text-white">
              {props.price} ₹
              <sub>
                / <sub>month</sub>
              </sub>
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 w-36 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                toggleModal();
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseCard;
