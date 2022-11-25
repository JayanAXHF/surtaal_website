import React from "react";

const ContactUs = () => {
  return (
    <div className="w-screen h-full lg:h-screen dark:text-white ml-8 mt-8">
      <h1 className="font-bold text-5xl">Support</h1>
      <h2 className="font-medium text-3xl ml-10 mt-5">Location</h2>
      <p className="text-md ml-10">
        B-23/1091,
        <br />
        Rangoli Gardens,
        <br />
        Panchyawala,
        <br />
        Jaipur - 302021
      </p>
      <h2 className="font-medium text-3xl ml-10 mt-5">Contact Us</h2>
      <ul className="ml-10">
        <li>
          Monica Bhatia
          <br />
          Tel: +91 9799330625
          <br />
          E-mail: monicabhatia9@gmail.com
        </li>

        <li>
          Priytam Pratihar
          <br />
          Tel: +91 ____________
          <br />
          E-mail: _____________
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
