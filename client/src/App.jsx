import React, { useState, useEffect } from "react";
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
import Logout from "./policeUI/Logout";

import AddGallary from "./policeUI/AddGallary";
import AddVehicle from "./policeUI/AddVehicle";
import ShowComplaints from "./policeUI/ShowComplaints";
import Admin from "./policeUI/Admin";
import Vehicle from "./Vehicle";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/gallaries")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Complaints" component={Complaints} />
        <Route
          exact
          path="/policeUI/ShowComplaints"
          component={ShowComplaints}
        />
        <Route exact path="/Gallary" render={() => <Gallary posts={posts} />} />
        <Route exact path="/policeUI/AddGallary" component={AddGallary} />
        <Route exact path="/About" component={About} />

        <Route exact path="/Vehicle" component={Vehicle} />
        <Route exact path="/policeUI/AddVehicle" component={AddVehicle} />
        <Route exact path="/policeUI/Admin" component={Admin} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/policeUI/Logout" component={Logout} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
