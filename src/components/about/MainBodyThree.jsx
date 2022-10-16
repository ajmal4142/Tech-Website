import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { mainBodyThree, bodyFour } from "../styles";
import { useMediaQuery } from "@mui/material";
const MainBodyThree = () => {
  const media = useMediaQuery("(max-width:1000px)");
  const hey = useMediaQuery("(max-width:600px)");
  const there = useMediaQuery("(max-width:400px)");

  return (
    <>
      <Grid
        container
        color="blue"
        justifyContent="space-evenly"
        display={{ xs: "flex", sm: "flex", md: "flex" }}
        width="100%"
        sx={mainBodyThree.one}
      >
        <Box m={2} sx={mainBodyThree.two}>
          {media && (
            <>
              <Typography variant="h6" sx={mainBodyThree.five}>
                We Provide Digital Services
              </Typography>
              <Typography variant="h6" sx={mainBodyThree.seven}>
                We Provide
              </Typography>
            </>
          )}
          {there && (
            <Typography variant="h6" sx={mainBodyThree.seven}>
              We Provide
            </Typography>
          )}
          {hey && (
            <Typography variant="h6" sx={mainBodyThree.five}>
              We Provide Digital
            </Typography>
          )}

          <Typography sx={mainBodyThree.four}>
            Serives we're Offering
          </Typography>
          <Box
            component="img"
            src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6e1fa504-d765-47b5-ba8c-ac101ff5ff7e.jpg?fit=scale-down&source=next&width=700"
            sx={mainBodyThree.three}
          />
        </Box>
        <Box m={2} sx={mainBodyThree.two}>
          <Box
            component="img"
            src="https://media.istockphoto.com/photos/colleagues-discussing-over-digital-tablet-picture-id498323251?k=20&m=498323251&s=612x612&w=0&h=sdJebPUxqVOAPUxmG0inV3RJqy4tbmzg6yiIotNaNxY="
            sx={mainBodyThree.threee}
          />

          <Typography sx={mainBodyThree.six}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.<br></br>{" "}
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text,
          </Typography>
          <Button sx={bodyFour.four} href="#">
            Discover More
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default MainBodyThree;
