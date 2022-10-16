import { Paper, Typography } from "@mui/material";
import React from "react";
import { mainBodyOne } from "../styles";

const MainBody1 = () => {
  return (
    <>
      <Paper sx={mainBodyOne.one}>
        <Typography variant="h2" sx={mainBodyOne.two}>
          About Us
        </Typography>
      </Paper>
    </>
  );
};

export default MainBody1;
