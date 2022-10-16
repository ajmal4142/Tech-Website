import React from "react";
import { Box, Grid } from "@mui/material";

const Responsive = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={2}
        justifyContent="space-evenly"
        m={4}
        display={{ xs: "flex", sm: "flex", md: "flex" }}
      >
        <Box m={2} width="200px" height="200px" bgcolor="blue"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="blue"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="blue"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="blue"></Box>
      </Grid>
      {/* This box will only render in the medium devices */}
      <Grid
        container
        m={4}
        justifyContent="space-evenly"
        display={{ xs: "flex", sm: "flex", md: "flex" }}
      >
        <Box m={2} width="200px" height="200px" bgcolor="red"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="red"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="red"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="red"></Box>
      </Grid>
      <Box
        m={4}
        display={{ xs: "flex", sm: "flex", md: "flex" }}
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box m={2} width="200px" height="200px" bgcolor="Green"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="Green"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="Green"></Box>
        <Box m={2} width="200px" height="200px" bgcolor="Green"></Box>
      </Box>
    </>
  );
};

export default Responsive;
