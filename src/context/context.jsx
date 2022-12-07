import { useContext, createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
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
