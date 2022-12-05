import React from "react";
import CourseCard from "../Card";
import { Helmet } from "react-helmet";

const Courses = () => {
  let classes = [
    {
      name: "Gwalior Gharana",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },
    {
      name: "Diploma Courses",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },
    {
      name: "Classical Singing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },
    {
      name: "Harmonium",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },
    {
      name: "Guitar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },

    {
      name: "Keyboard",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },
    {
      name: "Tabla",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },
    {
      name: "Bhajan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },
    {
      name: "Karaoke Singing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
      price: "____",
    },
  ];

  const courseCards = classes.map((course) => {
    return (
      <CourseCard name={course.name} desc={course.desc} price={course.price} />
    );
  });

  return (
    <div className="w-screen h-full lg:h-screen  pb-[200px]">
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
      <div className="mt-10 flex gap-2 flex-wrap justify-center">
        {courseCards}
      </div>
    </div>
  );
};

export default Courses;
