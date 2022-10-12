import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { bodySeven } from "./styles";
const BodySeven = () => {
  return (
    <>
      <Container sx={bodySeven.one}>
        <Container sx={bodySeven.two}>
          <Typography sx={bodySeven.three}>WHY BUSINESS CHOOSE US</Typography>
          <Typography sx={bodySeven.four}>JumpStart Your Business</Typography>
          <div style={bodySeven.five}>
            <Typography sx={bodySeven.six}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
          </div>
        </Container>
        <Container sx={bodySeven.seven}>
          <Container sx={bodySeven.eight}>
            <div style={bodySeven.nine}>
              <Box
                component="img"
                sx={bodySeven.ten}
                alt="The house from the offer."
                src="https://media.istockphoto.com/vectors/employee-appreciation-icon-review-vector-icon-man-and-three-stars-vector-id1316660390?k=20&m=1316660390&s=612x612&w=0&h=592A4zV5k5kCKEbY7cU51yVuoxzB52XBcxjcmIdC9mg="
              />
            </div>
            <Typography sx={bodySeven.eleven}>We're Loyal</Typography>
            <Typography sx={bodySeven.twelve}>
              It is a long established fact that a reader will be distracted by
              the readable content.
            </Typography>
          </Container>
          <Container sx={bodySeven.eight}>
            <div style={bodySeven.nine}>
              <Box
                component="img"
                sx={bodySeven.ten}
                alt="The house from the offer."
                src="https://thumbs.dreamstime.com/b/call-center-customer-care-line-icon-logo-design-template-vector-164864537.jpg"
              />
            </div>
            <Typography sx={bodySeven.eleven}>We're Helpfull</Typography>
            <Typography sx={bodySeven.twelve}>
              It is a long established fact that a reader will be distracted by
              the readable content.
            </Typography>
          </Container>
          <Container sx={bodySeven.eight}>
            <div style={bodySeven.nine}>
              <Box
                component="img"
                sx={bodySeven.ten}
                alt="The house from the offer."
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU"
              />
            </div>
            <Typography sx={bodySeven.eleven}>We're Flexible</Typography>
            <Typography sx={bodySeven.twelve}>
              It is a long established fact that a reader will be distracted by
              the readable content.
            </Typography>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default BodySeven;
