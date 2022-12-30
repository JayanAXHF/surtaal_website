import React from "react";
import { useGlobalContext } from "../context/context";
import { Modal, Button } from "flowbite-react";
import { Backdrop } from "@mui/material";

const Popup = () => {
  const { togglePopup, showAlert } = useGlobalContext();

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 1 }} open={showAlert}>
      <div>
        <React.Fragment>
          <Modal show={showAlert} size="md" popup={true} onClose={togglePopup}>
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Please Fill All the Required Inputs
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="gray" onClick={togglePopup}>
                    Okay
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      </div>
    </Backdrop>
  );
};

export default Popup;
