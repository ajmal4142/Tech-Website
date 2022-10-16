import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { mainBodyFour } from "../styles";

const MainBodyFour = () => {
  return (
    <>
      <Typography sx={mainBodyFour.six}>Meet Our Team</Typography>
      <Grid
        container
        justifyContent="space-evenly"
        display={{ xs: "flex", sm: "flex", md: "flex" }}
        width="100%"
        sx={mainBodyFour.one}
      >
        <Box m={2} sx={mainBodyFour.two}>
          <Box
            component="img"
            src="https://s3-us-west-2.amazonaws.com/internationalwomensday/upload/1234517068-1219.jpg"
            sx={mainBodyFour.three}
          />
          <Typography variant="h6" sx={mainBodyFour.four}>
            Nicolas Adams
          </Typography>
          <Typography sx={mainBodyFour.five}>
            nicolasadams@domain.com
          </Typography>
        </Box>
        <Box m={2} sx={mainBodyFour.two}>
          <Box
            component="img"
            src="https://assets.ajio.com/medias/sys_master/root/20220803/JEbE/62e9ec2eaeb26921afc0a1d3/wedani_blue_striped_ruffle-neck_top.jpg"
            sx={mainBodyFour.three}
          />
          <Typography variant="h6" sx={mainBodyFour.four}>
            Suzen Fernandez
          </Typography>
          <Typography sx={mainBodyFour.five}>
            suzenfernadaz@gmail.com
          </Typography>
        </Box>
        <Box m={2} sx={mainBodyFour.two}>
          <Box
            component="img"
            src="https://assets.ajio.com/medias/sys_master/root/20211027/7Znh/61789fceaeb2690110abb955/znx_clothing_multicoloured_floral_print_wrap_top.jpg"
            sx={mainBodyFour.three}
          />
          <Typography variant="h6" sx={mainBodyFour.four}>
            Andrea Hernandez
          </Typography>
          <Typography sx={mainBodyFour.five}>
            andreahernandez007@gmail.com
          </Typography>
        </Box>
        <Box m={2} sx={mainBodyFour.two}>
          <Box
            component="img"
            src="https://www.phase-eight.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-master-Catalog-P8/default/dw1c7e0eea/images/502205000/502205000-01-polly-paisley-print-blouse.jpg?sw=571&sh=800&strip=false"
            sx={mainBodyFour.three}
          />
          <Typography variant="h6" sx={mainBodyFour.four}>
            Joan Russell
          </Typography>
          <Typography sx={mainBodyFour.five}>joanrussel@domain.tld</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default MainBodyFour;
