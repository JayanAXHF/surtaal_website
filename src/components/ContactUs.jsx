import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
const ContactUs = () => {
  return (
    <div className="w-screen scale-95 md:scale-100 h-full dark:hover:prose-a:text-white hover:prose-a:text-gray-800 lg:h-screen dark:text-white ml-8 mt-8">
      {/*Title and tabbar*/}

      <Helmet>
        <title> सुरताल - Support</title>
        <link
          rel="shortcut icon"
          href="../images/PNG-image.ico"
          type="../images/PNG-image.svg"
        />
      </Helmet>

      <h1 className="font-bold text-5xl">Support</h1>
      <h2 className="font-medium text-3xl ml-10 mt-5">Location</h2>
      <p className="text-md ml-14">
        B-23/1091,
        <br />
        Rangoli Gardens,
        <br />
        Panchyawala,
        <br />
        Jaipur - 302021
      </p>
      <h2 className="font-medium text-3xl ml-10 mt-5">Contact Us</h2>
      <ul className="ml-14">
        <li>
          <span className="m-0 dark:text-white text-xl">Monica Bhatia</span>
          <br />
          <p className="dark:text-gray-300 text-gray-600 ml-5">
            <a href="tel:9799330625" file="Contactus">
              {" "}
              Tel: +91 9799330625
            </a>
            <br />
            E-mail:{" "}
            <a
              href="mailto:monicabhatia9@gmail.com"
              className="dark:hover:text-white hover:decoration-solid"
              file="Contactus"
            >
              monica@surtaal.net
            </a>
          </p>
        </li>

        <li>
          <span className="m-0 dark:text-white text-xl">Priytam Pratihar</span>
          <br />
          <p className="dark:text-gray-300 text-dark-600 ml-5">
            Tel:{" "}
            <a href="tel:9571371855" file="ContactUs">
              +91 9571371855
            </a>
            <br />
            E-mail:{" "}
            <a
              href="mailto:montypratihar1995@gmail.com"
              className="dark:hover:text-white hover:decoration-solid"
              file="Contactus"
            >
              montypratihar1995@gmail.com
            </a>
          </p>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default ContactUs;
