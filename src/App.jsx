import React from "react";
// import {
//   Typography,
//   Toolbar,
//   Container,
//   CssBaseline,
//   createTheme,
//   ThemeProvider,
// } from "@mui/material";
import AppBar from "./components/AppBar";
import BodyFive from "./components/BodyFive";
import BodyFour from "./components/BodyFour";
import Body1 from "./components/BodyOne";
import BodySeven from "./components/BodySeven";
import BodySix from "./components/BodySix";
import BodyThree from "./components/BodyThree";
import BodyTwo from "./components/BodyTwo";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div
      style={{
        margin: -9,
        fontFamily: "system-ui",
        background: "rgb(240, 245, 245)",
      }}
    >
      <AppBar />
      <NavBar />
      <Body1 />
      <BodyTwo />
      <BodyThree />
      <BodyFour />
      <BodyFive />
      <BodySix />
      <BodySeven />
      <Footer />
    </div>
  );
};

export default App;
