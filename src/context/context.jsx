import { useContext, createContext, useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../utils/firebase";
import React from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [availableClasses, setAvailableClasses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showFindBooking, setShowFindBooking] = useState(false);

  const databaseBookings = ref(db, "bookings/");
  const databaseClasses = ref(db, "classes/");
  useEffect(() => {
    onValue(databaseClasses, (snapshot) => {
      const data = snapshot.val();
      setAvailableClasses(data);
    });
    // eslint-disable-next-line
  }, []);

  const toggleFindBookings = () => {
    setShowFindBooking((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    onValue(databaseBookings, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => {
          return data[key];
        });

        setBookings(formattedData);
      }
    });
    //eslint-disable-next-line
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => {
      return !prevState;
    });
  };

  const togglePopup = () => {
    setShowAlert((prevState) => {
      return !prevState;
    });
  };

  return (
    <AppContext.Provider
      value={{
        toggleModal,
        showModal,
        showAlert,
        togglePopup,
        availableClasses,
        showFindBooking,
        toggleFindBookings,
        bookings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
