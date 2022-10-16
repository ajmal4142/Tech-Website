import React from "react";
import MainBody1 from "./components/about/MainBody1";
import MainBodyFive from "./components/about/MainBodyFive";
import MainBodyFour from "./components/about/MainBodyFour";
import MainBodyThree from "./components/about/MainBodyThree";
import MainBodyTwo from "./components/about/MainBodyTwo";

const About = () => {
  return (
    <>
      <div>
        <MainBody1 />
        <MainBodyTwo />
        <MainBodyThree />
        <MainBodyFour />
        <MainBodyFive />
      </div>
    </>
  );
};

export default About;
