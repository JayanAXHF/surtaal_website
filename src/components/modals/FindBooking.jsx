import { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { Backdrop, Button, Chip } from "@mui/material";
import { Alert_error as AlertError } from "../Reusables";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Divider from "@mui/material/Divider";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function sortDates(dates) {
  return dates.sort((a, b) => {
    const [dayA, monthA, yearA] = a.split("-");
    const [dayB, monthB, yearB] = b.split("-");
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateA - dateB;
  });
}

const FindBooking = () => {
  const { toggleFindBookings, bookings, showFindBooking } = useGlobalContext();

  const [bId, setBId] = useState("");
  const [foundBooking, setFoundBooking] = useState(false);
  const [searchedBooking, setSearchedBooking] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [notFilled, setNotFilled] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;

    setBId(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bId.length === 10 && bId) {
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
    const sortedDates = sortDates(searchedBooking?.classDates);
    const currentDate = new Date();
    //eslint-disable-next-line
    let futureSortedDates = sortedDates.filter((date) => {
      const dte = new Date(reverseString(date));
      let TotalDays = Math.ceil(
        (dte.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
      );
      if (TotalDays >= 0) {
        return date;
      }
    });

    dateList = (
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {/*eslint-disable-next-line  */}
        {searchedBooking.classDates.map((date, i) => {
          const dte = new Date(reverseString(date));

          const currentDate = new Date();
          var diff_time = dte.getTime() - currentDate.getTime();

          let TotalDays = Math.ceil(diff_time / (1000 * 3600 * 24));

          if (TotalDays > -1) {
            return (
              <TimelineItem key={i}>
                <TimelineSeparator>
                  <TimelineDot />
                  {i > futureSortedDates.length && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>{date}</TimelineContent>
              </TimelineItem>
            );
          }
        })}
      </Timeline>
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
      <Dialog open={showFindBooking} onClose={toggleFindBookings}>
        <DialogTitle>Find Booking</DialogTitle>
        <DialogContent>
          {!foundBooking ? (
            <React.Fragment>
              <DialogContentText>
                Your Booking Id is an unique, ten-digit identifier for your
                booking. It is given to you after your booking.
              </DialogContentText>
              <br />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Booking Id"
                type="number"
                fullWidth
                variant="outlined"
                name="bookingId"
                value={bId}
                onChange={handleChange}
              />
              {notFilled && <AlertError val={errorMessage} />}
            </React.Fragment>
          ) : (
            <div className="p-14 dark:text-white">
              <h2 className="text-3xl">Upcoming Classes:</h2>
              <br />

              <h1 className="text-left">{dateList}</h1>
              <br />
              <Divider role="presentation" sx={{ width: "100%" }}>
                <Chip label="DETAILS" />
              </Divider>

              <br />
              <ul className="grid text-xl lg:grid-cols-2 gap-x-6 grid-flow-row">
                <li>Name: {searchedBooking["name"]}</li>
                <li>Age: {searchedBooking?.age} years</li>
                <li>Tel: {searchedBooking?.tel}</li>
                <li>Mother: {searchedBooking?.mName}</li>
                <li>Father: {searchedBooking?.fName}</li>
                <li>
                  School:
                  {searchedBooking?.school ? searchedBooking.school : "N/A"}
                </li>
                <li>
                  Grade:{" "}
                  {searchedBooking?.grade ? searchedBooking.grade : "N/A"}
                </li>
                <li className="w-max">Booking Id: {searchedBooking?.bId}</li>
                <li className="w-max">Email: {searchedBooking?.email}</li>
              </ul>
              <br />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          {!foundBooking ? (
            <>
              <Button onClick={toggleFindBookings}>Cancel</Button>
              <Button onClick={handleSubmit}>Search</Button>
            </>
          ) : (
            <>
              <Button onClick={toggleFindBookings}>Close</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Backdrop>
  );
};

export default FindBooking;
