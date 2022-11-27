import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Teacher from "../Teacher.jsx";

const Main = () => {
  return (
    <div className="text-center dark:text-white font-[karla]">
      {/*Title and tabbar*/}

      <Helmet>
        <title> सुरताल - Home</title>
        <link
          rel="shortcut icon"
          href="../images/PNG-image.ico"
          type="../images/PNG-image.svg"
        />
      </Helmet>

      <h1 className="text-center mt-[200px] dark:text-white text-7xl font-[karla] font-bold motion-safe:animate-mainText">
        Music Classes for all Ages
      </h1>
      <h2 className={"text-3xl mt-10"}>
        From Classical Singing To Diploma Cources
      </h2>

      <h2 className={"text-3xl mt-3"}> We've got you covered!</h2>
      <p className={"text-md mt-2 w-80 text-center mx-auto"}>
        With our carefully-curated selection of cources, we are commited to
        deliver on our promises and provide you with the best service we can!
      </p>
      <span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="button"
          className=" text-gray-900 mt-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <Link to="/courses">View Courses</Link>
        </motion.button>
      </span>



      <h2 className="mt-10 font-[karla] font-medium text-3xl">
        Taught by Professionals
      </h2>
      <span className="flex just justify-center  mt-10">
        <Teacher
          name="Monica Bhatia"
          firstQuality="Visharad in Vocal"
          secondQuality="Attended and sung at over 25 programmes"
        />

        {/* second card*/}
        <Teacher
          name="Priytam Pratihar"
          firstQuality="First Quality"
          secondQuality="Second Quality"
        />
      </span>
    </div>
  );
};

export default Main;
