import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context/context";
import { Alert } from "@mui/material";

import { Box, Stack } from "@mui/system";
import Card from "@mui/material/Card";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import reactStringReplace from "react-string-replace";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const CourseCard = (props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const { toggleModal } = useGlobalContext();

  return (
    <Box>
      <motion.div whileHover={{ scale: 1.05 }} className="">
        <Card className="max-w-sm p-6  border lg:h-[32rem]  grid content-between justify-between border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 col-span-1 w-96 m-2">
          <CardContent>
            <div>
              <Typography
                variant="h5"
                className="mb-2 font-secondary tracking-wide text-3xl font-bold text-gray-900 dark:text-white"
                sx={{
                  marginBottom: "0.5rem",
                  color: prefersDarkMode ? "white" : "black",
                  fontFamily: "VT323",
                  fontSize: "1.875rem",
                  lineHeight: "2.25rem",
                  fontWeight: "700",
                  letterSpacing: "0.025em",
                }}
              >
                {props.name}
              </Typography>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {/*eslint-disable-next-line*/}
                {reactStringReplace(props.desc, "br", (match, i) => {
                  return <br />;
                })}
              </p>{" "}
              <br />
            </div>
          </CardContent>
          <Stack>
            <Alert
              severity="success"
              color="info"
              sx={{
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Online Classes Available
            </Alert>
            <br />
            <CardActions
              sx={{
                m: 0,
                p: 0,
                display: "grid",
                justifyContent: "space-between",
                justifyItems: "center",
                columnGap: "1rem",
                gridAutoFlow: "row",
              }}
            >
              <div className="grid justify-between gap-x-4 justify-items-center grid-flow-row  md:grid-cols-2 gap-y-3 md:gap-y-0  w-80 m-0">
                <p className="font-bold text-lg dark:text-white">
                  {props.price} ₹
                  <sub>
                    / <sub>month</sub>
                  </sub>
                </p>
                <ButtonUnstyled
                  onClick={() => {
                    toggleModal();
                  }}
                  variant="contained"
                  className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-500 dark:ring-offset-slate-900 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent font-tertiary"
                >
                  Book Now
                </ButtonUnstyled>
              </div>
            </CardActions>
          </Stack>
        </Card>
      </motion.div>
    </Box>
  );
};

export default CourseCard;
