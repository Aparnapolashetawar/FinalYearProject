import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Complaints from "./Complaints";
import Gallary from "./Gallary";
import About from "./About";
import Login from "./Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Complaints" component={Complaints} />
        <Route exact path="/Gallary" component={Gallary} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Login" component={Login} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
