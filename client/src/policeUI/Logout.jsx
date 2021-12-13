import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    fetch("/policeUI/Logout", {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        history.push("/", { replace: "true" });
        if (!res.status !== 200) {
          const error = new Error(res.eror);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <h1>THIS IS Logout PAGE </h1>;
};
export default Logout;
