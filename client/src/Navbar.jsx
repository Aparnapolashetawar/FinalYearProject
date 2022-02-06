import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item ">
            <NavLink
              activeClassName="menu_active"
              exact
              className="nav-link active"
              aria-current="page"
              to="/Homes"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/policeUI/ShowComplaints"
            >
              Complaints
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/policeUI/AddGallary"
            >
              Gallary
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/policeUI/AddVehicle"
            >
              Vehicle
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/policeUI/Admin"
            >
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/policeUI/Logout"
            >
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item ">
            <NavLink
              activeClassName="menu_active"
              exact
              className="nav-link active"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/Complaints"
            >
              Complaints
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/Gallary"
            >
              Gallary
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/Vehicle"
            >
              Vehicle
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="menu_active"
              className="nav-link"
              to="/Login"
            >
              Login
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row cli">
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid ">
              <a class="navbar-brand" href="/">
                DigitalPoliceOffice
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <RenderMenu />
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
