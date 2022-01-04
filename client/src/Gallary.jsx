import React, { Component } from "react";
import axios from "axios";

const Gallary = ({ posts }) => {
  return (
    <>
      <div>
        <h1 className="ht1"> Image Gallary</h1>
        {posts.map((gal, key) => (
          <div className="main" key={key}>
            <div className="cards">
              <div className="images">
                <img src={`/uploads/${gal.image}`} alt="..." />
              </div>
              <div className="title">
                <h1 className="ht">{gal.title}</h1>
              </div>

              <div className="des">
                <p>{gal.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallary;

/*
welcome to the Gallary
        {posts.map((gal, key) => (
          <div key={key}>
            <img src={`/uploads/${gal.image}`} alt="..." />
            <h2>{gal.title}</h2>
            <p>{gal.description}</p>
          </div>
        ))}

*/
