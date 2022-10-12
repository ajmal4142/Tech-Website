import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import React from "react";
import { bodySix } from "./styles";
const BodySix = () => {
  return (
    <>
      <div style={bodySix.one}>
        <Container sx={bodySix.two}>
          <Typography sx={bodySix.three}>Testimonials</Typography>
          <Typography variant="h1" sx={bodySix.four}>
            What Our Client Says
          </Typography>
          <div
            style={{ height: 120, display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              sx={bodySix.five}
              alt="The house from the offer."
              src="https://media.istockphoto.com/photos/passport-picture-businesswoman-with-brown-hair-picture-id856479974?b=1&k=20&m=856479974&s=170667a&w=0&h=lsFA0ysOxRbYpz-989tgILhd29y-oRtGvMOnQKZhfc4="
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={bodySix.six}>
              One of the worst service in courierI ordered an item from cycle.in
              and they have forwarded through expressbees. that it has a
              more-or-less normal distribution of letters, as opposed to using.
            </Typography>
          </div>
          <Typography variant="h1" sx={bodySix.seven}>
            Carolyn Stewart
          </Typography>
          <Typography variant="h1" sx={bodySix.eight}>
            United States
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              sx={{ alignItems: "center", mt: 1.3 }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default BodySix;
