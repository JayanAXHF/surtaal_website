import { motion } from "framer-motion";

const Teacher = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-sm mb-16 w-max bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 motion-safe:animate-cards"
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
        <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>

        <hr />
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">
          <br />

          <h2 className="text-lg font-medium dark:text-white">
            {" "}
            Qualifications:
          </h2>
          <br />
          <ul className="list-none">
            <li>{props.firstQuality}</li>
              <li>{props.secondQuality}</li>
              <li>{props.thirdQuality}</li>
              <li>{props.fourthQuality}</li>

          </ul>
        </p>
      </div>
    </motion.div>
  );
};

export default Teacher;
