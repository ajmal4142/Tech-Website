import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
const NavBar = () => {
  return (
    <>
      <div>
        <AppBar
          position="relative"
          sx={{ background: "white", height: "6rem" }}
        >
          <Toolbar sx={{ justifyContent: "center", height: "6rem" }}>
            <Box
              component="img"
              sx={{ width: 100, height: 50 }}
              alt="The house from the offer."
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb5ThYypoONQgwE1pVwMg58iqWGD63G9ZpDJIEtMW_L7fp7lkXrh5NjfLJgkkQOnFoII&usqp=CAU"
            />
            <Button href="#" sx={{ color: "black", ml: 42 }}>
              Home
            </Button>
            <Button href="#" sx={{ color: "black" }}>
              Features
            </Button>
            <Button href="#" sx={{ color: "black" }}>
              Services
            </Button>
            <Button href="#" sx={{ color: "black" }}>
              Prices
            </Button>
            <Button href="#" sx={{ color: "black" }}>
              About
            </Button>
            <Button href="#" sx={{ color: "black" }}>
              Contacts
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
