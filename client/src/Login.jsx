import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();

  /*const [userdata, setData] = useState({
    loginEmail: "",
    loginPassword: "",
  });*/

  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");

  const loginPolice = async (e) => {
    e.preventDefault();
    const res = await fetch("/Logins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginEmail,
        loginPassword,
      }),
    });
    const store = await res.json();
    if (res.status === 400 || !store) {
      window.alert("Invalid");
    } else {
      window.alert("login Successful");
      history.push("/policeUI/PoliceApp");
    }
  };

  /*const InputEvent2 = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };*/

  return (
    <>
      <div className="whole">
        <div className="whole2 ">
          <h1>Login</h1>
          <form method="POST">
            <div class="form-group a  ">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                name="loginEmail"
                value={loginEmail}
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="loginPassword"
                id="loginPassword"
                placeholder="loginPassword"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              onClick={loginPolice}
              class="btn btn-primary logbtn  rounded-pill "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
