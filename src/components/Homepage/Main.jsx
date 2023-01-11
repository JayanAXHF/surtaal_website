import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context.jsx";
import Teacher from "../Teacher.jsx";
import TeacherImg1 from "/Users/sunilchoudhary/Documents/Development/surtaal/surtaal_website/src/images/MonicaBhatia.jpg";
import TeacherImg2 from "/Users/sunilchoudhary/Documents/Development/surtaal/surtaal_website/src/images/Priytam.jpg";
import { ButtonGroup } from "@mui/material";

import { ButtonUnstyled } from "@mui/base";

const Main = () => {
  const { toggleModal } = useGlobalContext();
  const teacher1Qualities = [
    "Visharad in Vocal",
    "Attended and sung at over 25 programmes",
    "Knows the Harmonium",
  ];

  const teacher2 = [
    "Academic and College teacher.",
    "Alankaar complete.",

    "Knows: Harmonium | keyboard | guitar | tabla | cazon | ukulele and more.",
  ];

  return (
    <div className="grid text-center  h-min scale-[90%] md:scale-100 w-screen  md:w-auto justify-center  prose-headings:text-center justify-items-center  dark:text-white font-main  mb-40 md:p-0 ">
      {/*Head Tag Nonsense*/}

      <Helmet>
        <title> सुरताल - Home</title>
        <link
          rel="shortcut icon"
          href="../images/PNG-image.ico"
          type="../images/PNG-image.svg"
        />
      </Helmet>

      <div className="">
        <div>
          <h1 className="text-center md:mt-[200px] p-0 w-fit dark:text-white text-7xl font-[karla] font-bold ">
            Music Classes for all Ages
          </h1>
          <h2 className={"text-3xl pt-5 text-center"}>
            From Classical Singing To Diploma Courses
          </h2>
          <h2 className={"text-3xl mt-3"}> We've got you covered!</h2>
          <p className={"text-md mt-2 w-80 text-center mx-auto"}>
            With our carefully-curated selection of courses, we are committed to
            deliver on our promises and provide you with the best service we
            can!
          </p>
          <div className="grid justify-center m-0 p-0">
            <ButtonGroup>
              <span>
                <motion.span whileHover={{ scale: 1.05 }} type="button">
                  <ButtonUnstyled className=" text-gray-900 mt-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <Link to="/courses">View Courses</Link>
                  </ButtonUnstyled>
                </motion.span>
                <motion.span whileHover={{ scale: 1.05 }} type="button">
                  <ButtonUnstyled
                    onClick={toggleModal}
                    className="focus:outline-none  self-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Book your class
                  </ButtonUnstyled>
                </motion.span>
              </span>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <h2 className="mt-10 font-[karla] font-medium text-3xl">
        Taught by Professionals
      </h2>
      <span className="grid lg:grid-flow-col md:grid-flow-col sm:grid-flow-row w-full  justify-items-center justify-center gap-10  mt-10">
        <Teacher
          name="Monica Bhatia"
          qualities={teacher1Qualities}
          image={TeacherImg1}
        />
        {/* second card*/}

        <Teacher
          name="Priytam Pratihar"
          qualities={teacher2}
          image={TeacherImg2}
        />
      </span>

      <div className="grid grid-flow-row justify-center w-full">
        <h1 className="text-3xl dark:text-white font-[karla] text-center">
          Videos
        </h1>
        <p className="text-lg">
          <a href="https://www.youtube.com/@surtaalmusic23x3" target="_">
            <span className="flex flex-row justify-center text-blue-600">
              View all on youtube
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </a>
        </p>
        <br />
        <iframe
          src="https://www.youtube.com/embed/7E5r-_I75jU"
          className=" aspect-video w-[65vw] mb-16 rounded-3xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="surtaal-music-student-vid"
        ></iframe>
      </div>
    </div>
  );
};

export default Main;
