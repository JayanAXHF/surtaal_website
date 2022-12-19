import logo from "../images/PNG-image.svg";

import { NavLink, Link } from "react-router-dom";
import "../App.css";
import { Navbar as Header } from "flowbite-react";
import Booking from "./Booking";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const activeClass = "text-blue-700 m-0";

  const { toggleModal } = useGlobalContext();

  return (
    <div className="motion-safe:animate-Navbar">
      <div className="">
        <Header rounded={true} fluid={false} className="">
          <Link to="/">
            {" "}
            <Header.Brand href="/">
              <img
                src={logo}
                className="h-6 mr-3 sm:h-9 text-white dark:invert ml-4"
                alt="surtaal logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                सुरताल
              </span>
            </Header.Brand>
          </Link>
          <Header.Toggle />
          <Header.Collapse>
            <ul className="navList gap-4 flex flex-col items-center  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:dark:bg-transparent dark:bg-transparent dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : `
                   text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className={"active:text-blue-700"}>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : `
                   text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                >
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : `
                    text-gray-700 m-0 focus:m-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                >
                  Support
                </NavLink>
              </li>
              <button
                onClick={toggleModal}
                className="focus:outline-none mr-4 self-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Book Your Class
              </button>
            </ul>
          </Header.Collapse>
        </Header>
      </div>
      <Booking />
    </div>
  );
};

export default Navbar;
