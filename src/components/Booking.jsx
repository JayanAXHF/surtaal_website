// eslint-disable-next-line
import { useState, useEffect } from "react";
import { Modal, Button } from "flowbite-react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { ref, set } from "firebase/database";
import { nanoid } from "../index.js";
import { nanoid as idCreater } from "nanoid";
import { db as app } from "../utils/firebase";
import { useGlobalContext } from "../context/context";
import Popup from "./Popup";
import { Backdrop } from "@mui/material";
import Confetti from "react-confetti";
import "../App.css";

const Booking = () => {
  const [checked, setChecked] = useState(false);
  const [booked, setBooked] = useState(false);
  const [error] = useState(false);
  const [running, setRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedCoursePrice, setSelectedCoursePrice] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const [details, setDetails] = useState([{}]);
  const [alert, setAlert] = useState(false);

  const { showModal, toggleModal, togglePopup, availableClasses } =
    useGlobalContext();

  const classOptions = availableClasses.map((course, i) => {
    return <option key={i}>{course.name}</option>;
  });

  useEffect(() => {
    if (booked && !error) {
      setRunning(true);
      setTimeout(() => {
        setRunning(false);
        setShowConfetti(false);
      }, 7000);
    } // eslint-disable-next-line
  }, [booked]);

  useEffect(() => {
    const hasBooked = localStorage.getItem("booked");
    if (hasBooked) {
      setBooked(true);
      setBookingId(Number(localStorage.getItem("bId")));
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const db = app;

    const id = idCreater();
    const nanid = parseInt(nanoid());
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} hrs`;

    const currentDate = `${day}-${month}-${year}`;

    setBookingId(nanid);

    if (
      details.name &&
      details.age &&
      details.tel &&
      details.course !== "-- Select a Course--"
    ) {
      try {
        setAlert(false);
        await set(ref(db, `bookings/${id}`), {
          ...details,
          id: id,
          bId: nanid,
          date: currentDate,
          hInstru: checked,
          classDates: "",
          age: parseInt(details.age),
          time: time,
          location: details.location ? details.location : "Offline",
          gender: details.gender ? details.gender : "Male",
        });
        setBooked(true);
        setShowConfetti(true);
        localStorage.setItem("booked", "true");
        localStorage.setItem("bId", nanid.toString());
      } catch (err) {
        throw error;
      }
    } else {
      setAlert(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked: checkboxValue } = e.target;

    setDetails({
      ...details,
      [name]: type === "checkbox" ? !checkboxValue : value,
    });

    if (type === "checkbox") {
      setChecked((prevState) => {
        return !prevState;
      });
    }

    if (name === "course") {
      let tempCourse = availableClasses.find((x) => x.name === value);
      setSelectedCoursePrice(tempCourse.price);
    }
  };

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 1 }} open={showModal}>
      <div className="dark:prose-h4:text-white font-main z-50">
        {!error && booked && showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={200}
            confettiSource={{ x: 0, y: 0, w: window.innerWidth, h: 0 }}
            run={running}
          />
        )}
        <Modal
          show={showModal}
          onClose={() => {
            setAlert(false);
            toggleModal();
          }}
        >
          <Modal.Header>Book your class!</Modal.Header>
          {!booked ? (
            <form className="space-y-6">
              <Modal.Body>
                <div className="mb-6">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name{" "}
                    <span className="">
                      <sup className="text-sm text-red-500 underline  decoration-dotted decoration-sky-500">
                        *
                      </sup>
                    </span>
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    name="name"
                    value={details.name}
                    minLength={1}
                    required
                  />
                </div>
                <div className="grid grid-flow-row grid-cols-2 gap-3">
                  <div className="mb-6">
                    <label
                      htmlFor="base-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Father/Husband's name{" "}
                      <span className="">
                        <sup className="text-sm text-red-500 underline  decoration-dotted decoration-sky-500">
                          *
                        </sup>
                      </span>
                    </label>
                    <input
                      type="text"
                      id="base-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                      name="fName"
                      minLength={1}
                      value={details.fName}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="base-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mother/Wife's Name{" "}
                      <span className="">
                        <sup className="text-sm text-red-500  decoration-dotted underline decoration-sky-500">
                          *
                        </sup>
                      </span>
                    </label>
                    <input
                      type="text"
                      id="base-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                      name="mName"
                      minLength={1}
                      value={details.mName}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number{" "}
                    <span className="text-red-500  decoration-dotted underline decoration-sky-500">
                      <sup>*</sup>
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="base-input"
                    name="tel"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    maxLength={10}
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
                <div className="grid grid-flow-row grid-cols-2 gap-3 w-full">
                  <div className="mb-6">
                    <label
                      htmlFor="base-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Age{" "}
                      <span className="decoration-dotted">
                        <sup className="text-sm text-red-500 underline decoration-dotted decoration-sky-500">
                          *
                        </sup>
                      </span>
                    </label>
                    <input
                      type="number"
                      id="base-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg lg:w-[1fr] focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      min={6}
                      onChange={handleChange}
                      name="age"
                      value={details.age}
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender{" "}
                      <span className="">
                        <sup className="text-sm text-red-500 underline  decoration-dotted decoration-sky-500">
                          *
                        </sup>
                      </span>
                    </label>
                    <select
                      onChange={handleChange}
                      name="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                      required
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                      <option>Prefer not to specify</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="grid grid-flow-row grid-cols-2 gap-3">
                  <div className="mb-6">
                    <label
                      htmlFor="base-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Grade (optional)
                    </label>
                    <input
                      type="number"
                      id="base-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[1fr] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-32"
                      min={1}
                      max={12}
                      onChange={handleChange}
                      name="grade"
                      value={details.grade}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="base-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      School (optional){" "}
                    </label>
                    <input
                      type="text"
                      id="base-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                      name="school"
                      value={details.school}
                    />
                  </div>
                </div>
                <div className="grid grid-flow-row md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="courses"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Course{" "}
                      <span className="text-red-500 underline  decoration-dotted decoration-sky-500">
                        <sup>*</sup>
                      </span>
                    </label>
                    <select
                      id="courses"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                      name="course"
                      defaultValue={"----Select a course----"}
                      required
                    >
                      {/* <option default disabled>
                        -- Select a Course--
                      </option> */}
                      {classOptions}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location{" "}
                      <span className="text-red-500 underline  decoration-dotted decoration-sky-500">
                        <sup>*</sup>
                      </span>
                    </label>
                    <select
                      id="location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                      name="location"
                      defaultValue={"Offline"}
                      required
                    >
                      <option value="Offline">Offline</option>
                      <option value="Online">Online</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <fieldset>
                    <legend className="sr-only">
                      Do you have the instrument required at home?
                    </legend>
                    <div className="flex items-center mb-4">
                      <input
                        id="checkbox-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 accent-green-500 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onChange={handleChange}
                        checked={checked}
                        name="hInstru"
                      />
                      <label
                        htmlFor="checkbox-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        I have the required instrument at home
                      </label>
                    </div>
                  </fieldset>
                  {alert && (
                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Alert severity="error">
                        Please fill all the required fields!
                      </Alert>
                    </Stack>
                  )}
                  <br />
                  <h4 className="dark:text-white font-main">
                    Course Price: ₹{selectedCoursePrice}
                    <br />
                    Admission Fees: ₹200
                  </h4>
                  <h4 className="dark:text-white font-main">
                    Total = ₹{selectedCoursePrice} + ₹200 : ₹
                    {selectedCoursePrice + 200}
                  </h4>
                </div>
                <h6 className="dark:text-white font-[karla]">
                  All fields marked with
                  <span className="text-red-500 ">
                    &nbsp;
                    <sup className="underline  decoration-dotted decoration-sky-500">
                      *
                    </sup>
                  </span>
                  &nbsp; are required
                </h6>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleSubmit} type="submit" color="success">
                  Book My Class
                </Button>
              </Modal.Footer>
            </form>
          ) : (
            <div className="h-96 flex flex-col justify-center  font-[karla]">
              <h1 className="dark:text-white text-5xl text-center w-full">
                {error
                  ? "An error occurred. Please try again later."
                  : `Booking successful`}
              </h1>
              <br />
              <br />
              <h2 className={"text-center dark:text-white text-3xl"}>
                Booking Id: {bookingId}
              </h2>
              <br />
              <h2 className="text-center dark:text-white underline decoration-dotted dark:decoration-white">
                <strong className="text-lg font-main">
                  PLEASE REMEMBER YOUR BOOKING ID
                </strong>
              </h2>
            </div>
          )}
        </Modal>
        <Popup />
      </div>
    </Backdrop>
  );
};

export default Booking;
