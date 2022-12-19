import { useContext, createContext, useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../utils/firebase";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [availableClasses, setAvailableClasses] = useState([]);

  const databaseClasses = ref(db, "classes/");
  useEffect(() => {
    onValue(databaseClasses, (snapshot) => {
      const data = snapshot.val();
      setAvailableClasses(data);
    });
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
