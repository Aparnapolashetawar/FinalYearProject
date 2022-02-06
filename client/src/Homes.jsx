import React, { useEffect, useState } from "react";
import "./index.css";
const mongoose = require("mongoose");

const Homes = () => {
  const [userName, setuserName] = useState("");
  const userHomepage = async () => {
    try {
      const res = await fetch("/Logins", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setuserName(data.loginEmail);
      console.log(userName);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userHomepage();
  }, []);

  return (
    <>
      <div className="wholee1">
        <div
          className="igclass"
          style={{
            backgroundColor: "black",
            opacity: "0.5",
            borderRadius: "15px",
            bottom: "125px",
          }}
        >
          <div
            style={{
              marginTop: "60px",
              marginLeft: "40px",
            }}
          >
            <div className="pa" style={{ textAlign: "center" }}>
              <p>Hello {userName}</p>
              <p>Welcome to our portal !!!!!!</p>
            </div>
            <p style={{ textAlign: "center" }}>Explore the portal</p>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default Homes;
