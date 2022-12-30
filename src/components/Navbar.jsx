import logo from "../images/PNG-image.svg";

import { NavLink, Link } from "react-router-dom";
import "../App.css";
import { Navbar as Header } from "flowbite-react";
import Booking from "./Booking";
import { useGlobalContext } from "../context/context";
import FindBooking from "./modals/FindBooking";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";

const Navbar = () => {
  const activeClass = "text-blue-700 m-0";

  const { toggleModal, toggleFindBookings, showFindBooking } =
    useGlobalContext();

  return (
    <div className="motion-safe:animate-Navbar">
      {showFindBooking && <FindBooking />}
      <div className="">
        <Header fluid={false} className="">
          <Link to="/">
            {" "}
            {/* <Header.Brand> */}
            <div className="flex gap-x-1">
              <img
                src={logo}
                className="h-6 mr-3 sm:h-9 text-white dark:invert ml-4"
                alt="surtaal logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                सुरताल
              </span>
            </div>
            {/* </Header.Brand> */}
          </Link>
          <Header.Toggle />
          <Header.Collapse>
            <ul className="navList gap-3 flex flex-col items-center  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:dark:bg-transparent dark:bg-transparent dark:border-gray-700">
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
              <ButtonGroup variant="outlined">
                <Button color="success" onClick={toggleModal}>
                  Book Your Class
                </Button>
                <Button onClick={toggleFindBookings} color="primary">
                  Find Booking
                </Button>
              </ButtonGroup>
            </ul>
          </Header.Collapse>
        </Header>
      </div>
      <Booking />
    </div>
  );
};

export default Navbar;
