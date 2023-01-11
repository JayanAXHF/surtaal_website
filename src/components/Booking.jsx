// eslint-disable-next-line
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { ref, set } from "firebase/database";
import { nanoid } from "../index.js";
import { nanoid as idCreater } from "nanoid";
import { db as app } from "../utils/firebase";
import { useGlobalContext } from "../context/context";
import Popup from "./Popup";
import {
  Backdrop,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Confetti from "react-confetti";
import { Button } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import InputLabel from "@mui/material/InputLabel";

import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/system/Box";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const Booking = () => {
  const [checked, setChecked] = useState(false);
  const [booked, setBooked] = useState(false);
  const [error] = useState(false);
  const [running, setRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedCoursePrice, setSelectedCoursePrice] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const [details, setDetails] = useState({});
  const [alert, setAlert] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { showModal, toggleModal, availableClasses } = useGlobalContext();

  const classOptions = availableClasses.map((course, i) => {
    return (
      <MenuItem key={i} value={course.name}>
        {course.name}
      </MenuItem>
    );
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

  useEffect(() => {
    if (
      details.name &&
      details.age > 4 &&
      details.tel &&
      details.course !== "-- Select a Course--"
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [details]);

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
      <div className="dark:prose-h4:text-white font-main z-50 ">
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
          open={showModal}
          onClose={() => {
            setAlert(false);
            toggleModal();
            setDetails({});
          }}
          className="px-10"
          sx={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <DialogTitle>Book your class!</DialogTitle>
          {!booked ? (
            <>
              <DialogContent>
                <br />
                <form>
                  <div className="mb-6">
                    <TextField
                      type="text"
                      id="base-input"
                      className="text-sm rounded-lg block w-full p-2.5 "
                      onChange={handleChange}
                      name="name"
                      label="Name"
                      value={details?.name}
                      required
                    />
                  </div>
                  <div className="grid grid-flow-row md:grid-cols-2 gap-3">
                    <div className="mb-6">
                      <TextField
                        type="text"
                        className="text-sm  block w-full p-2.5 rounded-none"
                        onChange={handleChange}
                        name="fName"
                        minLength={1}
                        label="Father/Husband's Name"
                        value={details.fName}
                        sx={{
                          borderRadius: 0,
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <TextField
                        type="text"
                        id="base-input"
                        className="text-sm block w-full p-2.5"
                        onChange={handleChange}
                        name="mName"
                        minLength={1}
                        value={details.mName}
                        label={"Mother/Wife's Name"}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <TextField
                      label="Email"
                      type="email"
                      name="email"
                      className="text-sm  block w-full p-2.5 "
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <TextField
                      label="Mobile Number"
                      type="tel"
                      id="base-input"
                      name="tel"
                      className="text-sm  block w-full p-2.5 "
                      onChange={handleChange}
                      maxLength={10}
                      required
                      pattern="[0-9]{10}"
                    />
                  </div>
                  <div className="grid grid-flow-row grid-cols-2 gap-3 w-full">
                    <div className="mb-6">
                      <TextField
                        type="number"
                        id="base-input"
                        onChange={handleChange}
                        name="age"
                        value={details.age}
                        required
                        label="Age"
                      />
                    </div>
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel id="gender">Gender</InputLabel>
                        <Select
                          fullWidth
                          onChange={handleChange}
                          id="gender-select"
                          required
                          native={false}
                          labelId="gender"
                          value={details?.gender}
                          defaultValue={"Male"}
                          name="gender"
                          label="Gender"
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Non-binary">Non-binary</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                  <div className="grid grid-flow-row grid-cols-2 gap-3">
                    <div className="mb-6">
                      <TextField
                        type="number"
                        id="base-input"
                        className="text-sm  block w-full p-2.5 "
                        min={1}
                        max={12}
                        onChange={handleChange}
                        name="grade"
                        label="Grade(optional)"
                        value={details.grade}
                      />
                    </div>
                    <div className="mb-6">
                      <TextField
                        type="text"
                        id="base-input"
                        className="text-sm  block w-full p-2.5 "
                        onChange={handleChange}
                        name="school"
                        label="School (optional)"
                        value={details.school}
                      />
                    </div>
                  </div>
                  <div className="grid grid-flow-row md:grid-cols-2 gap-x-4">
                    <FormControl required>
                      <InputLabel id="courseLabel">Course</InputLabel>
                      <Select
                        labelId="curseLabel"
                        id="courses"
                        className="text-sm  block w-full  "
                        onChange={handleChange}
                        name="course"
                        label="Course *"
                        value={details.course ? details.course : ""}
                      >
                        {classOptions}
                      </Select>
                    </FormControl>
                    <br className="md:hidden" />
                    <FormControl required>
                      <InputLabel id="locationLabel">Location</InputLabel>

                      <Select
                        id="location"
                        labelId="locationLabel"
                        className="text-sm  block w-full  "
                        onChange={handleChange}
                        name="location"
                        label="Location *"
                        defaultValue={"Offline"}
                        required
                      >
                        <MenuItem value="Offline">Offline</MenuItem>
                        <MenuItem value="Online">Online</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="mt-5">
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="checkbox-1"
                          type="checkbox"
                          className=""
                          onChange={handleChange}
                          checked={checked}
                          name="hInstru"
                        />
                      }
                      label="I have the required instrument"
                    />

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
                      <sup className="">*</sup>
                    </span>
                    &nbsp; are required
                  </h6>
                </form>
                <Typography variant="body2">
                  By clicking &rdquo;Book My Class&rdquo;, you are agreeing to
                  the{" "}
                  <Link
                    to="/support/tos"
                    component={RouterLink}
                    onClick={toggleModal}
                  >
                    Terms of Service
                  </Link>{" "}
                  and the{" "}
                  <Link
                    to="/support/privacy"
                    component={RouterLink}
                    onClick={toggleModal}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    setAlert(false);
                    toggleModal();
                    setDetails({});
                  }}
                  type="button"
                  variant="contained"
                >
                  Cancel
                </Button>
                <Button
                  disabled={disabled}
                  onClick={handleSubmit}
                  type="submit"
                  color="success"
                  variant="contained"
                >
                  Book My Class
                </Button>
              </DialogActions>
            </>
          ) : (
            <>
              <div className="h-96 flex flex-col justify-center  font-[karla] p-10">
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
              <DialogActions>
                <Button
                  onClick={() => {
                    setAlert(false);
                    toggleModal();
                    setDetails({});
                  }}
                >
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Modal>
        <Popup />
      </div>
    </Backdrop>
  );
};

export default Booking;
