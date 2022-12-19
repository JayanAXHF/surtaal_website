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
    <div className="w-screen h-full lg:h-screen grid  justify-center  pb-[200px]">
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
      <h5 className="text-xl dark:text-white text-center mt-10">
        Note: Admission Fees: ₹200/- <br /> Separate Meeting : ₹500/- <br /> #
        Classes in a month : 12 | # Classes in a week : 3
      </h5>
      <div className="mt-10  flex gap-2 flex-wrap justify-center pb-24 ">
        {courseCards}
      </div>
    </div>
  );
};

export default Courses;
