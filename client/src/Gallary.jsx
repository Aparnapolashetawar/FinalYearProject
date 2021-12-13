import React, { useState } from "react";

const Gallary = ({ posts }) => {
  const [gallary, setGallary] = useState([]);
  return (
    <>
      <div>
        <h1>THIS IS Gallary PAGE</h1>
        {posts.map((gallary, key) => (
          <div className="container" key={key}>
            <img src="" alt="" />
            <h2>{gallary.title}</h2>
            <p>{gallary.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Gallary;
