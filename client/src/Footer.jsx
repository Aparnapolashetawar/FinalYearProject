import React from "react";
import "./index.css";
import Helpline from "./Helpline";

const d = new Date();
const year = d.getFullYear();
const Footer = () => {
  return (
    <>
      <Helpline />
      <footer className="footer mt-auto py-3 bg-dark navbar foot">
        <div className="container ">
          <span className="text-muted cn">
            <center>
              <p className="fclass ">copyright © {year}</p>
            </center>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
