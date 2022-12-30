import React from "react";
import { Alert } from "@mui/material";
import { Stack } from "@mui/system";

export const Alert_error = (props) => {
  return (
    <div className="">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">{props.val}</Alert>
      </Stack>
    </div>
  );
};
