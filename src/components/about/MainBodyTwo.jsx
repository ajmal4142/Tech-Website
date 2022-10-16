import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import { mainBodyTwo, bodyFour } from "../styles";
const MainBodyTwo = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-evenly"
        display={{ xs: "flex", sm: "flex", md: "flex" }}
        width="100%"
        sx={mainBodyTwo.one}
      >
        <Box m={2} sx={mainBodyTwo.two}>
          <Box
            component="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPt5QgeSeh9RLXTn3QZiPwOdpdEP6WYQgbIg&usqp=CAU"
            sx={mainBodyTwo.three}
          />
          <Typography variant="h6" sx={mainBodyTwo.four}>
            Website Developement
          </Typography>
          <Typography sx={mainBodyTwo.five}>
            Web developers create and maintain websites. <br></br> They are also
            responsible for the site's technical aspects.
          </Typography>
          <Button sx={bodyFour.four}>Read More</Button>
        </Box>
        <Box m={2} sx={mainBodyTwo.two}>
          <Box
            component="img"
            src="https://www.oracle.com/a/ocom/img/cb125v4-career-ops-corporate-functions.jpg"
            sx={mainBodyTwo.three}
          />
          <Typography variant="h6" sx={mainBodyTwo.four}>
            Marketing Solution
          </Typography>
          <Typography sx={mainBodyTwo.five}>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here.
          </Typography>
          <Button sx={bodyFour.four}>Read More</Button>
        </Box>
        <Box m={2} sx={mainBodyTwo.two}>
          <Box
            component="img"
            src="https://mymainellc.com/wp-content/uploads/2019/07/4-Reasons-to-Consider-Changing-Your-Business-Structure-in-Maine.jpg"
            sx={mainBodyTwo.three}
          />
          <Typography variant="h6" sx={mainBodyTwo.four}>
            Application Developement
          </Typography>
          <Typography sx={mainBodyTwo.five}>
            It is a long established fact that a reader will be distracted{" "}
            <br></br> By the readable content of a page when looking at its
            layout.
          </Typography>
          <Button sx={bodyFour.four}>Read More</Button>
        </Box>
      </Grid>
    </>
  );
};

export default MainBodyTwo;
