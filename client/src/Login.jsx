import React, { useState } from "react";

const Login = () => {
  const [userdata, setData] = useState({
    email: "",
    fullname: "",
  });

  const InputEvent2 = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const Submitform = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <div className="whole">
        <div className="whole2 ">
          <h1>Login</h1>
          <form onSubmit={Submitform}>
            <div class="form-group a  ">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                value={userdata.email}
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="Username"
                onChange={InputEvent2}
                required
              />
            </div>

            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                placeholder="password"
                onChange={InputEvent}
                required
              />
            </div>

            <button type="submit" class="btn btn-primary logbtn  rounded-pill ">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
