import { motion } from "framer-motion";
import React from "react";
const Teacher = (props) => {
  const { qualities } = props;

  const qualitiesElement = qualities.map((quality, i) => {
    const newQual = quality.replace("<br/>", "\n");

    return <li key={i}>{newQual}</li>;
  });

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-sm mb-16 w-max scale-90 md:scale-100 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 motion-safe:animate-cards font-secondary"
    >
      <a href="/">
        <img
          className="rounded-t-lg"
          src={
            props.image
              ? props.image
              : "https://www.flowbite.com/docs/images/blog/image-1.jpg"
          }
          alt=""
        />
      </a>
      <div className="p-5">
        <h5 className="mb-2 !text-left text-2xl tracking-wide  font-bold  text-gray-900 dark:text-white">
          {props.name}
        </h5>

        <hr />
        <div className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">
          <br />

          <h2 className="text-2xl !text-left tracking-wide font-medium dark:text-white">
            {" "}
            Qualifications:
          </h2>
          <br />
          <ul className="list-square tracking-wide text-xl">
            {qualitiesElement}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Teacher;
