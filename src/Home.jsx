import React from "react";
import BodyFive from "./components/BodyFive";
import BodyFour from "./components/BodyFour";
import Body1 from "./components/BodyOne";
import BodySeven from "./components/BodySeven";
import BodySix from "./components/BodySix";
import BodyThree from "./components/BodyThree";
import BodyTwo from "./components/BodyTwo";

const Home = () => {
  return (
    <div
      style={{
        margin: -9,
        fontFamily: "system-ui",
        background: "rgb(240, 245, 245)",
      }}
    >
      <Body1 />
      <BodyTwo />
      <BodyThree />
      <BodyFour />
      <BodyFive />
      <BodySix />
      <BodySeven />
    </div>
  );
};

export default Home;
