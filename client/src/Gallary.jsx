import React, { Component } from "react";
import axios from "axios";

const Gallary = ({ posts }) => {
  return (
    <>
      <div>
        welcome to the Gallary
        {posts.map((gal, key) => (
          <div key={key}>
            <img src={`/uploads/${gal.image}`} alt="..." />
            <h2>{gal.title}</h2>
            <p>{gal.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallary;
