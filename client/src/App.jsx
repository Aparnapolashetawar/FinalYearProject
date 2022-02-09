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
import Homes from "./Homes";
import Login from "./Login";
import Logout from "./policeUI/Logout";
import AddGallary from "./policeUI/AddGallary";
import AddVehicle from "./policeUI/AddVehicle";
import ShowComplaints from "./policeUI/ShowComplaints";

import Admin from "./policeUI/Admin";
import Vehicle from "./Vehicle";

import EditPost from "./policeUI/EditPost";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
import axios from "axios";
export const UserContext = createContext();

const Routing = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/AddGallaries")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Homes" component={Homes} />
      <Route exact path="/Complaints" component={Complaints} />
      <Route exact path="/policeUI/ShowComplaints" component={ShowComplaints} />

      <Route exact path="/policeUI/AddGallary" component={AddGallary} />
      <Route exact path="/About" component={About} />

      <Route exact path="/Vehicle" component={Vehicle} />
      <Route exact path="/policeUI/AddVehicle" component={AddVehicle} />

      <Route exact path="/edit/:id" component={EditPost} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/policeUI/Logout" component={Logout} />
      <Route exact path="/policeUI/Admin" component={Admin} />
      <Route to="/Gallary" render={() => <Gallary posts={posts} />} />
      <Redirect to="/" />
    </Switch>
  );
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
      <Footer />
    </>
  );
};

export default App;
