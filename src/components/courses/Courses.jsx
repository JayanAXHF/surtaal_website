import React from "react";
import CourseCard from "../Card";
import { Helmet } from "react-helmet";
import { useGlobalContext } from "../../context/context";

const Courses = () => {
  const { availableClasses: classes } = useGlobalContext();

  const courseCards = classes.map((course, i) => {
    const desc = course.desc.replace("\n", "\n").toString();

    return (
      <CourseCard name={course.name} desc={desc} price={course.price} key={i} />
    );
  });

  return (
    <div className="w-screen h-full scale-95 md:scale-100   lg:h-screen grid grid-flow-row  justify-center justify-items-center  pb-14">
      {/*Title and tabbar*/}

      <Helmet>
        <title> सुरताल - Courses</title>
        <link
          rel="shortcut icon"
          href="../images/PNG-image.ico"
          type="../images/PNG-image.svg"
        />
      </Helmet>

      <h1 className="text-5xl dark:text-white text-center mt-20">
        We offer a variety of courses for people trying to learn music
      </h1>
      <h5 className="text-xl dark:text-white text-center gap-3 grid mt-10 grid-flow-row justify-items-center  justify-center">
        <ul className="ml-3 list-square  text-left p-2 md:p-0">
          <b className="">NOTE: </b>
          <li>Admission Fees: ₹200/-</li> <li>Separate Meeting : ₹500/-</li>
          <li># Classes in a month : 12 | # Classes in a week : 3</li>
        </ul>
      </h5>
      <div className="mt-10 p10  flex  gap-2 flex-wrap justify-center justify-items-start pb-24 ">
        {courseCards}
      </div>
    </div>
  );
};

export default Courses;
