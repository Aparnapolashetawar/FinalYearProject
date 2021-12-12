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
import Logout from "./policeUI/Logout";
import AddGallary from "./policeUI/AddGallary";
import AddVehicle from "./policeUI/AddVehicle";
import ShowComplaints from "./policeUI/ShowComplaints";
import Admin from "./policeUI/Admin";
import Vehicle from "./Vehicle";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Complaints" component={Complaints} />
      <Route exact path="/policeUI/ShowComplaints" component={ShowComplaints} />
      <Route exact path="/Gallary" component={Gallary} />
      <Route exact path="/policeUI/AddGallary" component={AddGallary} />
      <Route exact path="/About" component={About} />

      <Route exact path="/Vehicle" component={Vehicle} />
      <Route exact path="/policeUI/AddVehicle" component={AddVehicle} />
      <Route exact path="/policeUI/Admin" component={Admin} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/policeUI/Logout" component={Logout} />

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
