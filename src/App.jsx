import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
const App = () => {
  return (
    <Router>
      <div
        style={{
          margin: -9,
          fontFamily: "system-ui",
          background: "rgb(240, 245, 245)",
        }}
      >
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
