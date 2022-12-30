import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context/context";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
const CourseCard = (props) => {
  const { toggleModal } = useGlobalContext();

  return (
    <Stack>
      <motion.div whileHover={{ scale: 1.05 }} className="">
        <div className="max-w-sm p-6 bg-white border lg:h-96 grid content-between justify-between border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-1 w-15 m-2">
          <div>
            <h5 className="mb-2 font-secondary tracking-wide text-3xl font-bold text-gray-900 dark:text-white">
              {props.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {props.desc}
            </p>{" "}
            <br />
          </div>

          <Alert severity="success" color="info">
            Online Classes Available
          </Alert>
          <br />
          <div className="grid justify-between gap-x-4 justify-items-center grid-flow-row  md:grid-cols-2 gap-y-3 md:gap-y-0">
            <p className="font-bold text-lg dark:text-white">
              {props.price} ₹
              <sub>
                / <sub>month</sub>
              </sub>
            </p>
            <Button
              onClick={() => {
                toggleModal();
              }}
              variant="contained"
              sx={{ borderRadius: 4 }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </motion.div>
    </Stack>
  );
};

export default CourseCard;
