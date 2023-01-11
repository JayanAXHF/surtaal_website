import logo from "../images/PNG-image.svg";
import { NavLink } from "react-router-dom";
import "../App.css";
import Divider from "@mui/material/Divider";
import Booking from "./Booking";
import { useGlobalContext } from "../context/context";
import FindBooking from "./modals/FindBooking";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { green, blue } from "@mui/material/colors";
import * as React from "react";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Courses", href: "/courses", current: false },
    { name: "Support", href: "/support", current: false },
  ];

  const [prefersDarkMode] = React.useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const { toggleModal, toggleFindBookings, showFindBooking } =
    useGlobalContext();

  return (
    <>
      {showFindBooking && <FindBooking />}
      <Booking />
      <Disclosure as="nav" className="dark:bg-gray-800 py-1  w-full z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden dark:invert"
                      src={logo}
                      alt="Surtaal"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block dark:invert"
                      src={logo}
                      alt="Surtaal Logo"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item, i) => (
                        <NavLink
                          to={item.href}
                          key={i}
                          className={({ isActive }) =>
                            isActive
                              ? "bg-gray-900 text-white  px-3 py-2 rounded-md text-base font-medium"
                              : "dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <ButtonGroup variant="contained">
                    <Button
                      onClick={toggleModal}
                      color="success"
                      sx={{
                        "&: hover": {
                          backgroundColor: prefersDarkMode
                            ? green[600]
                            : green[700],
                        },
                      }}
                    >
                      Book Your Class
                    </Button>
                    <Button
                      onClick={toggleFindBookings}
                      color="primary"
                      sx={{
                        "&: hover": {
                          backgroundColor: prefersDarkMode
                            ? blue[600]
                            : blue[700],
                        },
                      }}
                    >
                      Find Booking
                    </Button>
                  </ButtonGroup>
                  {/* Profile dropdown */}
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden grid grid-flow-row justify-center justify-items-center bg-white dark:bg-gray-800 transition-all  ease-in border-b-2 border-b-slate-900 dark:border-none">
              <div className="space-y-3 px-2 pt-2 pb-3 grid grid-flow-row justify-center justify-items-center">
                {navigation.map((item, i) => (
                  <NavLink
                    to={item.href}
                    key={i}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-900 w-[1fr] text-white px-3 py-3 my-1 text-center rounded-lg text-base font-medium"
                        : "dark:text-gray-300  text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-400 hover:text-white block px-3 py-3 my-1 rounded-md text-base font-medium"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <br />
              <Divider sx={{ bgcolor: "#64748B", color: "#fff" }} />
              <ButtonGroup variant="contained">
                <Button
                  onClick={toggleModal}
                  color="success"
                  sx={{
                    "&: hover": {
                      backgroundColor: prefersDarkMode
                        ? green[600]
                        : green[700],
                    },
                  }}
                >
                  Book Your Class
                </Button>
                <Button
                  onClick={toggleFindBookings}
                  color="primary"
                  sx={{
                    "&: hover": {
                      backgroundColor: prefersDarkMode ? blue[600] : blue[700],
                    },
                  }}
                >
                  Find Booking
                </Button>
              </ButtonGroup>
              <br />
              <br />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
