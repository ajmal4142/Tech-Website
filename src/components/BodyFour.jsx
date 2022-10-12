import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { bodyFour, bodyThree } from "./styles";
const BodyFour = () => {
  return (
    <>
      <div style={bodyFour.two}>
        <div style={{ width: "60%", marginTop: "5rem", display: "flex" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={bodyFour.one}>About Our Company</Typography>
            <Typography variant="h1" sx={bodyFour.three}>
              Your Success Is Our Mission
            </Typography>
            <Typography variant="h6" sx={bodyThree.six}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            <Button sx={bodyFour.four}>Read More</Button>
          </div>
          <div style={{ width: "50%" }}>
            <Box
              component="img"
              sx={bodyFour.five}
              alt="The house from the offer."
              src="https://www.indiafilings.com/learn/wp-content/uploads/2016/09/Company-Management.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyFour;
