import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-screen fixed  bottom-0">
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link href="/" className="hover:underline">
            सुरताल™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex list-none flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/courses" className="mr-4 hover:underline md:mr-6 ">
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/support/privacy"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/support/tos" className="mr-4 hover:underline md:mr-6">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/support" className="hover:underline">
              Contact
            </Link>
          </li>

          <li>
            <button className="mx-5" onClick={scrollUp}>
              Back to Top
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
