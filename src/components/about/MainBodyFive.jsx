import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { mainBodyFive } from "../styles";
const MainBodyFive = () => {
  return (
    <>
      <Typography sx={mainBodyFive.seven}>Latest News</Typography>
      <Grid
        container
        justifyContent="space-evenly"
        display={{ xs: "flex", sm: "flex", md: "flex" }}
        width="100%"
        sx={mainBodyFive.one}
      >
        <Box m={2} sx={mainBodyFive.two}>
          <Box
            component="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPt5QgeSeh9RLXTn3QZiPwOdpdEP6WYQgbIg&usqp=CAU"
            sx={mainBodyFive.three}
          />
          <Typography variant="h6" sx={mainBodyFive.four}>
            Website Developement
          </Typography>
          <Typography sx={mainBodyFive.five}>
            Web developers create and maintain websites. They are also
            responsible for the site's technical aspects.
          </Typography>
          <Button sx={mainBodyFive.six}>Read More</Button>
        </Box>
        <Box m={2} sx={mainBodyFive.two}>
          <Box
            component="img"
            src="https://www.oracle.com/a/ocom/img/cb125v4-career-ops-corporate-functions.jpg"
            sx={mainBodyFive.three}
          />
          <Typography variant="h6" sx={mainBodyFive.four}>
            Marketing Solution
          </Typography>
          <Typography sx={mainBodyFive.five}>
            Web developers create and maintain websites. They are also
            responsible for the site's technical aspects.
          </Typography>
          <Button sx={mainBodyFive.six}>Read More</Button>
        </Box>
        <Box m={2} sx={mainBodyFive.two}>
          <Box
            component="img"
            src="https://www.oracle.com/a/ocom/img/cb125v4-career-ops-corporate-functions.jpg"
            sx={mainBodyFive.three}
          />
          <Typography variant="h6" sx={mainBodyFive.four}>
            Marketing Solution
          </Typography>
          <Typography sx={mainBodyFive.five}>
            Web developers create and maintain websites. They are also
            responsible for the site's technical aspects.
          </Typography>
          <Button sx={mainBodyFive.six}>Read More</Button>
        </Box>
        <Box m={2} sx={mainBodyFive.two}>
          <Box
            component="img"
            src="https://s3.amazonaws.com/external_clips/attachments/2121632/original/AdobeStock_201760065.jpg?1538104464"
            sx={mainBodyFive.three}
          />
          <Typography variant="h6" sx={mainBodyFive.four}>
            App Developement
          </Typography>
          <Typography sx={mainBodyFive.five}>
            Web developers create and maintain websites. They are also
            responsible for the site's technical aspects.
          </Typography>
          <Button sx={mainBodyFive.six}>Read More</Button>
        </Box>
      </Grid>
    </>
  );
};

export default MainBodyFive;
