import React from "react";
import { Typography, Button, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { style1, styleButton, bodyOne } from "./styles";

const body1 = () => {
  return (
    <>
      <Paper style={style1.paperContainer}>
        <Typography variant="h6" align="center" sx={bodyOne.one}>
          WELCOME TO DIGITAL STARTUP AGENCY
        </Typography>
        <Typography variant="h2" align="center" sx={bodyOne.two}>
          Best Digital Technology
        </Typography>
        <Typography variant="h2" align="center" sx={bodyOne.three}>
          Agency
        </Typography>
        <Box align="center">
          <Button variant="outlined" sx={styleButton.bottonContainer}>
            Read more
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default body1;
