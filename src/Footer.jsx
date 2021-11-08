import React from "react";

const d = new Date();
const year = d.getFullYear();
const Footer = () => {
  return (
    <>
<<<<<<< HEAD
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <span className="text-muted">
          <center>
            <p className="fclass">copyright © {year}</p>
=======
      <footer className="footer mt-auto py-3 bg-dark ">
        <div className="container">
          <span className="text-muted">
            <center>
              <p className="fclass">copyright © {year}</p>
>>>>>>> 2016cd3dbf14b500ebdf71999bc32d7cbef0fb28
            </center>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
