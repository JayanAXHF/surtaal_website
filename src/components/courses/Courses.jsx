import React from "react";
import CourseCard from "../Card";
import { Helmet } from "react-helmet";

const diplomaDesc =
  "(Exam and Practical fee 4000) Starting from:\nGrade 1 prarumbhik\nGrade 2 praveshika pratam\nGrade 3 praveshika puuren\nGrade 4 madhyama pratam \n Grade 5 madhayam purren\nVisharad pratam\nVisharad purren\nAlankaar purren\nAlankaar purren";

export const classes = [
  {
    name: "Gwalior Gharana",
    desc: "The Gwalior Gharana is the oldest Gharana of Hindustani classical music.This gharana is the most famous gharana of Khayal singing. In this gharana, the initial note is made open and loud in the form of aakar.  ",
    price: 2000,
  },
  {
    name: "Diploma Courses",
    desc:
      "(Exam and Practical fee 4000) Starting from" +
      " | " +
      "Grade 1 prarumbhik" +
      " | " +
      "Grade 2 praveshika pratam | Grade 3 praveshika puuren | Grade 4 madhyama pratam | Grade 5 madhayam purren | Visharad pratam | Visharad purren | Alankaar purren | Alankaar purren",
    price: 3000,
  },
  {
    name: "Classical Singing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec imperdiet diam. Pellentesque sem ligula, tincidunt at hendrerit eu, viverra eu velit. Quisque est nisi, mollis id enim vel, imperdiet.",
    price: 2000,
  },
  {
    name: "Harmonium",
    desc: "Starting from the Alankaar Taan-Palte, Variety of Taan, Gamak, Mheed etc; Bollywood Playing | Classical Playing | Versatile Playing | Performer Playing",
    price: 2000,
  },
  {
    name: "Guitar",
    desc: "Basic Guitar Course | Intermediate Course | Advance Course; Streaming Pattern | Code Pattern | Tab; Reading Finger Pattern | Plugging Pattern Bollywood; Playing Classical | Playing Versatile | Playing Performer Playing",
    price: 2000,
  },

  {
    name: "Keyboard",
    desc: "Basic keyboard course | Intermediate keyboard course | Advance keyboard course; Left & Right Hand Use | Code pattern | Book Reading | Versatile playing; Bollywood Playing  | Classical Playing  | Versatile Playing | Perfomer Playing ",
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
