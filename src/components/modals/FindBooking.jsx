import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../context/context";
import Tooltip from "@mui/material/Tooltip";
import { Backdrop } from "@mui/material";
import { Alert_error } from "../Reusables";
import Zoom from "@mui/material/Zoom";
const FindBooking = () => {
  const { toggleFindBookings, bookings, showFindBooking } = useGlobalContext();

  const [bId, setBId] = useState(null);
  const [foundBooking, setFoundBooking] = useState(false);
  const [searchedBooking, setSearchedBooking] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [notFilled, setNotFilled] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;

    setBId(value);
  };

  const handleSubmit = (e) => {
    console.log(bId.length);
    e.preventDefault();
    if (bId.length === 10) {
      setNotFilled(false);
      const res = bookings.find((x) => x.bId === Number(bId));
      if (res) {
        setSearchedBooking(res);
        setFoundBooking(true);
      } else {
        setErrorMessage("Booking Not Found");
        setNotFilled(true);
      }
    } else {
      setErrorMessage("Invalid Booking Id");
      setNotFilled(true);
    }
  };
  function reverseString(str) {
    return str.split("-").reverse().join("-");
  }

  let dateList;

  if (searchedBooking?.classDates) {
    dateList = (
      <ol className="list-[upper-roman] list-inside">
        {searchedBooking.classDates.map((date, index) => {
          const dte = new Date(reverseString(date));

          const currentDate = new Date();
          var diff_time = dte.getTime() - currentDate.getTime();

          let TotalDays = Math.ceil(diff_time / (1000 * 3600 * 24));

          if (TotalDays > 0) {
            return (
              <li className="text-xl list-item" key={index}>
                {date}
              </li>
            );
          }
        })}
      </ol>
    );
  } else {
    dateList = (
      <h4 className="w-full text-center text-xl">
        There are no scheduled classes
      </h4>
    );
  }

  return (
    <Backdrop sx={{ zIndex: 1 }} open={showFindBooking}>
      <div
        id="defaultModal"
        className="overscroll-none w-full md:w-max overflow-x-hidden overflow-y-auto   h-max md:h-full"
      >
        <div className="relative w-full h-full p-14  md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Find Booking
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => {
                  toggleFindBookings();
                  setNotFilled(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {!foundBooking ? (
              <form action="">
                <div className="p-14 space-y-6">
                  {notFilled && <Alert_error val={errorMessage} />}
                  <div className="mb-6">
                    <label
                      for="bookingId"
                      className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Booking Id
                      <Tooltip
                        title="Your Booking Id is a unique, 10-digit identifier for your booking that is given to you after booking."
                        TransitionComponent={Zoom}
                        arrow
                        placement="top"
                        sx={{ fontSize: 18 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 ml-2 stroke-black dark:invert"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                          />
                        </svg>
                      </Tooltip>
                    </label>
                    <input
                      type="number"
                      name="bookingId"
                      value={bId}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                  >
                    Find Booking
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-14 dark:text-white">
                <h2 className="text-3xl">Details:</h2>
                <br />
                <ul className="grid text-xl lg:grid-cols-2 gap-x-6 grid-flow-row">
                  <li>Name: {searchedBooking["name"]}</li>
                  <li>Age: {searchedBooking?.age} years</li>
                  <li>Tel: {searchedBooking?.tel}</li>
                  <li>Mother: {searchedBooking?.mName}</li>
                  <li>Father: {searchedBooking?.fName}</li>
                  <li>
                    School:{" "}
                    {searchedBooking?.school ? searchedBooking.school : "N/A"}
                  </li>
                  <li>
                    Grade:{" "}
                    {searchedBooking?.grade ? searchedBooking.grade : "N/A"}
                  </li>
                  <li className="w-max">Booking Id: {searchedBooking?.bId}</li>
                </ul>
                <br />
                <h2 className="text-3xl">Upcoming Classes:</h2>
                <br />

                {dateList}
              </div>
            )}
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default FindBooking;
