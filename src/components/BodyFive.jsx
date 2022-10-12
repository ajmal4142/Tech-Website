import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { bodyFive } from "./styles";
const BodyFive = () => {
  return (
    <div>
      <Container sx={bodyFive.one}>
        <Container sx={bodyFive.two}>
          <Typography variant="h6" sx={bodyFive.three}>
            What We Do
          </Typography>
          <Typography variant="h3" sx={bodyFive.four}>
            We're Provide <br></br> Invest & Business Services
          </Typography>
        </Container>
        <Container sx={bodyFive.five}>
          <Container sx={bodyFive.seven}>
            <div style={bodyFive.ten}>
              <Box
                component="img"
                sx={bodyFive.nine}
                alt="The house from the offer."
                src="https://img.freepik.com/premium-vector/marketing-strategy-flat-vector-icon_9206-395.jpg"
              />
            </div>

            <Typography
              variant="h4"
              sx={{ fontSize: 25, fontWeight: 700, mt: 3, textAlign: "center" }}
            >
              Marketing Strategy
            </Typography>
            <Typography
              sx={{ fontSize: 12, width: "90%", mt: 3, textAlign: "center" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" sx={bodyFive.eleven}>
                Read More
              </Button>
            </div>
          </Container>
          <Container sx={bodyFive.eight}>
            <Box
              component="img"
              sx={bodyFive.twelve}
              alt="The house from the offer."
              src="https://vakilsearch.com/blog/wp-content/uploads/2022/05/section8-company-do-business.jpg"
            />
          </Container>
        </Container>
        <Container sx={bodyFive.six}>
          <Container sx={bodyFive.seven}>
            <Box
              component="img"
              sx={bodyFive.twelve}
              alt="The house from the offer."
              src="https://www.indiafilings.com/learn/wp-content/uploads/2015/07/starting-a-business-in-India-for-foreign-company.jpg"
            />
          </Container>
          <Container sx={bodyFive.eight}>
            <Container sx={bodyFive.thirteen}>
              <div style={bodyFive.fourteen}>
                <Box
                  component="img"
                  sx={bodyFive.nine}
                  alt="The house from the offer."
                  src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/60c704eddd02b_json_image_1623655661.webp"
                />
              </div>

              <Typography
                variant="h4"
                sx={{
                  fontSize: 25,
                  fontWeight: 700,
                  mt: 3,
                  textAlign: "center",
                }}
              >
                Management
              </Typography>
              <Typography
                sx={{ fontSize: 12, width: "90%", mt: 3, textAlign: "center" }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" sx={bodyFive.fifteen}>
                  Read More
                </Button>
              </div>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default BodyFive;
