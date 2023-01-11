import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import { Link } from "@mui/material";
const ContactUs = () => {
  return (
    <div className=" pt-16 scale-95 md:scale-100 h-full dark:hover:prose-a:text-white hover:prose-a:text-gray-800  dark:text-white mt-8 mb-14 overflow-y-scroll !overflow-x-none">
      {/*Title and tabbar*/}

      <Helmet>
        <title> सुरताल - Support</title>
        <link
          rel="shortcut icon"
          href="../images/PNG-image.ico"
          type="../images/PNG-image.svg"
        />
      </Helmet>

      <div className="ml-8">
        <h1 className="font-bold text-5xl">Support</h1>
        <h2 className="font-medium text-3xl ml-10 mt-5">Location</h2>
        <br />
        {
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.37020899530168!2d75.71297763415281!3d26.905927811868494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b54b87885c3%3A0x47d12a33cfe2ca8d!2sRangoli%20Garden%20Block%2023!5e0!3m2!1sen!2sin!4v1672754186410!5m2!1sen!2sin"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="ml-14 lg:w-[48rem] lg:h-[35rem] md:w-[40rem] md:h-[27rem]"
            title="Location on Google Maps"
          ></iframe>
        }
        <br />
        <p className="text-md ml-14">
          <Link
            href="https://goo.gl/maps/1CVZgsGz2xAAcwKR6"
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noreferrer"
            sx={{
              fontWeight: "500",
              fontFamily: "Karla",
            }}
            className="font-medium font-main"
          >
            B-23/1091,
            <br />
            Rangoli Gardens,
            <br />
            Panchyawala,
            <br />
            Jaipur, <br />
            Rajasthan - 302021
          </Link>
        </p>
        <h2 className="font-medium text-3xl ml-10 mt-5">Contact Us</h2>
        <ul className="ml-14">
          <li>
            <span className="m-0 dark:text-white text-xl">Monica Bhatia</span>
            <br />
            <p className="dark:text-gray-300 text-gray-600 ml-5">
              Tel:
              <Link
                href="tel:9799330625"
                file="Contactus"
                className="dark:hover:text-white hover:decoration-solid"
                color="inherit"
                underline="hover"
              >
                {" "}
                +91 9799330625
              </Link>
              <br />
              E-mail:{" "}
              <Link
                href="mailto:monicabhatia9@gmail.com"
                className="dark:hover:text-white hover:decoration-solid"
                file="Contactus"
                color="inherit"
                underline="hover"
              >
                monica@surtaal.net
              </Link>
            </p>
          </li>
          <li>
            <span className="m-0 dark:text-white text-xl">
              Priytam Pratihar
            </span>
            <br />
            <p className="dark:text-gray-300 text-dark-600 ml-5">
              Tel:{" "}
              <Link
                href="tel:9571371855"
                file="ContactUs"
                color="inherit"
                underline="hover"
              >
                +91 9571371855
              </Link>
              <br />
              E-mail:{" "}
              <Link
                href="mailto:montypratihar1995@gmail.com"
                className="dark:hover:text-white hover:decoration-solid"
                file="Contactus"
                color="inherit"
                underline="hover"
              >
                montypratihar1995@gmail.com
              </Link>
            </p>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default ContactUs;
