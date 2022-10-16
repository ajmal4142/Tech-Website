import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { bodyboxOne, style2 } from "./styles";

const BodyTwo = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "720px",
          display: "flex",
          justifyContent: "center",
          background: "white",
        }}
      >
        <div style={{ width: "60%", height: "620px", marginTop: "4rem" }}>
          <Box>
            <Button href="#" sx={bodyboxOne.bottonOne}>
              About Us
            </Button>
          </Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: "700", fontFamily: "system-ui", fontSize: 40 }}
          >
            We're Delivering Only <br></br>Exceptional Quality Work
          </Typography>
          <div style={{ display: "flex" }}>
            <Box
              component="img"
              sx={style2.paper2}
              alt="The house from the offer."
              src="https://s3.amazonaws.com/external_clips/attachments/2121632/original/AdobeStock_201760065.jpg?1538104464"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="" sx={bodyboxOne.typeOne}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.<br></br>
                <br /> Lorem ipsum may be used as a placeholder before final
                copy is available.
              </Typography>
              <Box display={{ xs: "none", sm: "none", md: "flex" }}>
                <Button href="#" sx={bodyboxOne.bottonTwo}>
                  Read More
                </Button>
              </Box>
            </div>
          </div>
          <Box display={{ xs: "none", sm: "none", md: "flex" }}>
            <div style={bodyboxOne.divDecor}>
              <div style={bodyboxOne.decor}>
                <Typography variant="h6" sx={{ fontSize: 13 }}>
                  People
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: 30, mt: 2, fontWeight: 900 }}
                >
                  251+
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 13, mt: 2 }}>
                  In publishing and graphic.
                </Typography>
              </div>

              <div style={bodyboxOne.decor}>
                <Typography variant="h6" sx={{ fontSize: 13 }}>
                  World Offices
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: 30, mt: 2, fontWeight: 900 }}
                >
                  12
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 13, mt: 2 }}>
                  Lorem ipsum may be used.
                </Typography>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default BodyTwo;
