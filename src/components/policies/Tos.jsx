import { Typography } from "@mui/material";
import React from "react";

const Tos = () => {
  return (
    <div className=" ml-5 text-black dark:text-white">
      <Typography
        variant="h1"
        className="text-black dark:text-white z-50 font-normal ml-5"
      >
        Terms of service
      </Typography>
      <div className="ml-16" id="terms">
        <Typography variant="h3" className="ml-3" sx={{ fontFamily: "Karla" }}>
          Content
        </Typography>
        <ul className="list-[lower-roman] prose-li:list-item  list-inside ml-4 text-justify">
          <li className="list-item">
            We are only providing services for admission for children above four
            (“4”) years of age.{" "}
          </li>
          <li>
            The Online Admission Form must be filled in and submitted before the
            student’s first class.{" "}
          </li>
          <li>The admission fee is non-refundable. </li>
          <li>
            The fee structure is on a monthly basis. A month consists of 12
            classes, with 3 classes per week.{" "}
          </li>
          <li>
            In case of absence, no extra class shall be provided under any
            circumstances.{" "}
          </li>
          <li>
            An application will be processed only after completion of the
            mandatory fields in the form. One may carry their own musical
            instrument.{" "}
          </li>
          <li>
            Surtaal is not liable for damage cause to any instrument brought by
            a student. Students shall bring their own musical instruments at
            their own risk.{" "}
          </li>
        </ul>
      </div>

      <div className="ml-16" id="refund">
        <Typography variant="h3" sx={{ fontFamily: "karla" }}>
          Refund and Cancellation
        </Typography>
        <span className="ml-4">
          <Typography variant="p" sx={{ fontFamily: "karla" }}>
            Any class or meeting missed by the consumer for any reason will not
            be refunded. We shall not entertain any cancellation request for any
            class under any circumstances.
          </Typography>
        </span>
      </div>
    </div>
  );
};

export default Tos;
