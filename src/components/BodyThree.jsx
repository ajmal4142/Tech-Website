import React from "react";
import { Typography, Slider, Box } from "@mui/material";
import { bodyThree } from "./styles";
const BodyThree = () => {
  return (
    <>
      <div style={bodyThree.one}>
        <div style={{ display: "flex", marginTop: 65, width: "65%" }}>
          <Box
            component="img"
            sx={bodyThree.two}
            alt="The house from the offer."
            src="https://blog.hubspot.com/hubfs/company-values-2.jpg"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 40,
              marginTop: 40,
            }}
          >
            <Typography sx={bodyThree.four}>WHY CHOOSE US</Typography>
            <Typography variant="h1" sx={bodyThree.five}>
              Benifits Of Choosing Our Agency
            </Typography>
            <Typography variant="h6" sx={bodyThree.six}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            <Typography sx={bodyThree.seven}>Locally Recommented</Typography>
            <Slider
              aria-label="Temperature"
              defaultValue={40}
              valueLabelDisplay="on"
              step={5}
              marks
              max={100}
              disabled
              sx={{ height: 20, borderRadius: 0 }}
            />
            <Typography sx={bodyThree.seven}>
              Projects completed Successfully
            </Typography>
            <Slider
              defaultValue={69}
              valueLabelDisplay="on"
              step={10}
              marks
              max={100}
              disabled
              sx={{ height: 20, borderRadius: 0 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyThree;
