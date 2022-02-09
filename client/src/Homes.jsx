import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
const mongoose = require("mongoose");

const Homes = () => {
  const history = useHistory();
  const [userData, setUserData] = useState("");
  const userHomepage = async () => {
    try {
      const res = await fetch("/Home", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      console.log("Username=", userData.policeName);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      //history.push("/about");
    }
  };
  useEffect(() => {
    userHomepage();
  }, []);

  return (
    <>
      <form method="GET">
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
                <p>Hello {userData.policeName}</p>
                <p>Welcome to our portal !!!!!!</p>
              </div>
              <p style={{ textAlign: "center" }}>Explore the portal</p>
            </div>
          </div>
        </div>
        <footer></footer>
      </form>
    </>
  );
};

export default Homes;
