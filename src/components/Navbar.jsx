import logo from "../images/PNG-image.svg";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import { Navbar as Header, Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";

const Navbar = () => {
  const activeClass = "text-blue-700";

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    toggleTheme();
  }, [theme]);

  const toggleTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme(localStorage.theme);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme(localStorage.theme);
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  };

  return (
    <div className="motion-safe:animate-Navbar">
      <div className="">
        <Header rounded={true} className="">
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
            <ul className="navList flex flex-col  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:dark:bg-transparent dark:bg-transparent dark:border-gray-700">
              <li>
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : `
                  block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className={"active:text-blue-700"}>
                <NavLink
                  exact
                  to="/courses"
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : `
                  block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
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
                  block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-gray-100 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                >
                  Support
                </NavLink>
              </li>
            </ul>
            <span className="self-center">
              <Dropdown label="Theme">
                <Dropdown.Item
                  onClick={() => {
                    localStorage.removeItem("theme");
                    toggleTheme();
                  }}
                >
                  OS Preference
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    localStorage.setItem("theme", "light");
                    toggleTheme();
                  }}
                >
                  Light
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    localStorage.setItem("theme", "dark");
                    toggleTheme();
                  }}
                >
                  Dark
                </Dropdown.Item>
              </Dropdown>
            </span>
          </Header.Collapse>
        </Header>
      </div>
    </div>
  );
};

export default Navbar;
