import React from "react";
import { AppBar, Toolbar, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { hey } from "./styles";
const NavBar = () => {
  return (
    <>
      <div>
        <AppBar
          position="relative"
          sx={{ background: "white", height: "6rem", boxShadow: 0, m: 0 }}
        >
          <Toolbar
            sx={{
              justifyContent: "center",
              height: "6rem",
              m: 0,
            }}
          >
            <Box
              component="img"
              sx={{ width: 100, height: 50 }}
              alt="The house from the offer."
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb5ThYypoONQgwE1pVwMg58iqWGD63G9ZpDJIEtMW_L7fp7lkXrh5NjfLJgkkQOnFoII&usqp=CAU"
            />
            <Grid sx={{ width: "79%" }} />

            <Button sx={hey}>
              <Link to="/">Home</Link>
            </Button>
            <Button sx={hey}>
              <Link to="/About" p={0}>
                About
              </Link>
            </Button>
            <Button
              href="#"
              sx={{ color: "#3B312F", ml: "1%" }}
              display={{ xs: "flex", sm: "flex", md: "none" }}
            >
              Features
            </Button>
            <Button href="#" sx={{ color: "#3B312F", ml: "2%" }}>
              Services
            </Button>
            <Button href="#" sx={{ color: "#3B312F", ml: "1%" }}>
              Prices
            </Button>
            <Box display={{ xs: "none", sm: "none", md: "flex" }}>
              <Button href="#" sx={{ color: "#3B312F", ml: "1%" }}>
                Contacts
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
