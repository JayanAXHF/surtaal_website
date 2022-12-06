import React from "react";
import CourseCard from "../Card";
import { Helmet } from "react-helmet";

export const classes = [
  {
    name: "Gwalior Gharana",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
  {
    name: "Diploma Courses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 3000,
  },
  {
    name: "Classical Singing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
  {
    name: "Harmonium",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
  {
    name: "Guitar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },

  {
    name: "Keyboard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
  {
    name: "Tabla",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
  {
    name: "Bhajan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
  {
    name: "Karaoke Singing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
  {
    name: "Bollywood Singing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
];
const Courses = () => {
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
      <h5 className="text-xl dark:text-white text-center mt-10">
        Note: Admission Fees: ₹200/- <br /> Separate Meeting : ₹500/- <br /> #
        Classes in a month : 12 | # Classes in a week : 3
      </h5>
      <div className="mt-10 flex gap-2 flex-wrap justify-center">
        {courseCards}
      </div>
    </div>
  );
};

export default Courses;
