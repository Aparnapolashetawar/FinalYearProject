import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Polices from "./Polices";
const Admin = () => {
  const history = useHistory();

  const [data, setData] = useState({
    policeName: "",
    policeEmail: "",
    policePassword: "",
    cpolicePassword: "",
    adminkey: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      policeName,
      policeEmail,
      policePassword,
      cpolicePassword,
      adminkey,
    } = data;

    const res = await fetch("/Admins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        policeName,
        policeEmail,
        policePassword,
        cpolicePassword,
        adminkey,
      }),
    });

    const store = await res.json();

    if (res.status === 422 || !store) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("police Registered Successfully");
      console.log("police Registered Successfully");
      history.push("/");
    }
  };

  return (
    <>
      <div className="image">
        <h1>Register Police Officer Here</h1>

        <div className="container contact_div ">
          <div className="row ">
            <div className="col-md-6 col-10 mx-auto solution ">
              <form method="POST " className="">
                <div className="mb-3 ">
                  <label for="exampleFormControlInput1" className="form-label ">
                    Full Name of Police Officer
                  </label>
                  <input
                    type="text"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="policeName"
                    value={data.policeName}
                    onChange={InputEvent}
                    placeholder="Enter Police Officer Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="policeEmail"
                    value={data.policeEmail}
                    onChange={InputEvent}
                    placeholder="name@FullName example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Set Police Password
                  </label>
                  <input
                    type="password"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="policePassword"
                    value={data.policePassword}
                    onChange={InputEvent}
                    placeholder="password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Confirm Police Password
                  </label>
                  <input
                    type="password"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="cpolicePassword"
                    value={data.cpolicePassword}
                    onChange={InputEvent}
                    placeholder="password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Admin Key
                  </label>
                  <input
                    type="password"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="adminkey"
                    value={data.adminkey}
                    onChange={InputEvent}
                    placeholder="Admin Key"
                    required
                  />
                </div>

                <div className="col-12 mb-3">
                  <button
                    className="btn btn-outline-primary sub below rounded-pill button1  border border-info"
                    type="submit"
                    value="Register Police Officer"
                    onClick={PostData}
                  >
                    Register Police Officer
                  </button>
                </div>
              </form>
            </div>
            <Polices />
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
