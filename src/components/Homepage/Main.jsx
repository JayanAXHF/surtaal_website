import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context.jsx";
import Teacher from "../Teacher.jsx";
import TeacherImg1 from "/Users/sunilchoudhary/Documents/Development/surtaal/surtaal_website/src/images/MonicaBhatia.jpg";
import TeacherImg2 from "/Users/sunilchoudhary/Documents/Development/surtaal/surtaal_website/src/images/Priytam.jpg";
import "../../App.css";

const Main = () => {
  const { toggleModal } = useGlobalContext();

  return (
    <div className="text-center dark:text-white font-[karla] mb-24">
      {/*Title and tabbar*/}

      <Helmet>
        <title> सुरताल - Home</title>
        <link
          rel="shortcut icon"
          href="../images/PNG-image.ico"
          type="../images/PNG-image.svg"
        />
      </Helmet>

      <div>
        <div>
          <h1 className="text-center mt-[200px] dark:text-white text-7xl font-[karla] font-bold motion-safe:animate-mainText">
            Music Classes for all Ages
          </h1>
          <h2 className={"text-3xl mt-10"}>
            From Classical Singing To Diploma Cources
          </h2>
          <h2 className={"text-3xl mt-3"}> We've got you covered!</h2>
          <p className={"text-md mt-2 w-80 text-center mx-auto"}>
            With our carefully-curated selection of cources, we are commited to
            deliver on our promises and provide you with the best service we
            can!
          </p>
          <span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="button"
              className=" text-gray-900 mt-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Link to="/courses">View Courses</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="button"
              className="focus:outline-none mr-4 self-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={toggleModal}
            >
              Book your class
            </motion.button>
          </span>
        </div>
      </div>

      <h2 className="mt-10 font-[karla] font-medium text-3xl">
        Taught by Professionals
      </h2>
      <span className="grid lg:grid-flow-col md:grid-flow-col sm:grid-flow-row w-full  justify-items-center justify-center gap-10  mt-10">
        <Teacher
          name="Monica Bhatia"
          firstQuality="Visharad in Vocal"
          secondQuality="Attended and sung at over 25 programmes"
          thirdQuality="Knows the Harmonium"
          image={TeacherImg1}
        />

        {/* second card*/}
        <Teacher
          name="Priytam Pratihar"
          firstQuality="Academic and College teacher."
          thirdQuality={`Knows:
            `}
          image={TeacherImg2}
          secondQuality={"Alankaar complete."}
          fourthQuality="    Harmonium | keyboard | guitar | tabla | cazon | ukulele and more."
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
          className="aspect-video w-video px-10 md:scale-60"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="surtaal-music-student-vid"
        ></iframe>
      </div>
    </div>
  );
};

export default Main;
