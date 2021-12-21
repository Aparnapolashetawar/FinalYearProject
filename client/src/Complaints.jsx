import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Complaints = () => {
  const history = useHistory();
  const [data, setData] = useState({
    fullname: "",
    adhar: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    opponentName: "",
    opponentAddress: "",
    opponentPincode: "",
    complaint: "",
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
      fullname,
      adhar,
      phone,
      email,
      address,
      pincode,
      opponentName,
      opponentAddress,
      opponentPincode,
      complaint,
    } = data;

    const res = await fetch("/Complaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        adhar,
        phone,
        email,
        address,
        pincode,
        opponentName,
        opponentAddress,
        opponentPincode,
        complaint,
      }),
    });

    const store = await res.json();

    const ph = ["1", "2", "3", "4", "5", "6"];
    if (res.status === 422 || !store) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else if (data.phone.length !== 10) {
      window.alert("Invalid Phone Number");
    } else if (data.phone[0] in ph) {
      window.alert("invalid phone Number");
    } else if (data.pincode.length !== 6) {
      window.alert("Invalid Pincode");
    } else {
      window.alert("Complaint Registered Successfully");
      console.log("Complaint Registered Successfully");
      history.push("/");
    }
  };

  return (
    <>
      <div className="image">
        <h1>Register Complaint Here</h1>

        <div className="container contact_div">
          <div className="row ">
            <div className="col-md-6 col-10 mx-auto solution">
              <form method="POST">
                <div className="mb-3 ">
                  <label for="exampleFormControlInput1" className="form-label ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Adhar No
                  </label>
                  <input
                    type="Number"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="adhar"
                    value={data.adhar}
                    onChange={InputEvent}
                    placeholder="Adhar Number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile Number"
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
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@FullName example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Permanent Address
                  </label>
                  <input
                    type="address"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="address"
                    value={data.address}
                    onChange={InputEvent}
                    placeholder="address"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Pin Code
                  </label>
                  <input
                    type="Number"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="pincode"
                    value={data.pincode}
                    onChange={InputEvent}
                    placeholder="Pin Code"
                    required
                  />
                </div>

                <div className="mb-3 ">
                  <label for="exampleFormControlInput1" className="form-label ">
                    Complaint Against
                  </label>
                  <input
                    type="text"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="opponentName"
                    value={data.opponentName}
                    onChange={InputEvent}
                    placeholder="Enter opponent's Name if Known"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Address of opponent
                  </label>
                  <input
                    type="address"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="opponentAddress"
                    value={data.opponentAddress}
                    onChange={InputEvent}
                    placeholder="Enter Address if known"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Opponent Pin Code
                  </label>
                  <input
                    type="Number"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="opponentPincode"
                    value={data.opponentPincode}
                    onChange={InputEvent}
                    placeholder="Enter Pin Code if known"
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Complaint Details
                  </label>
                  <textarea
                    className="form-control border border-info"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="complaint"
                    value={data.complaint}
                    onChange={InputEvent}
                    placeholder="Add Complaint"
                    required
                  ></textarea>
                </div>

                <div className="col-12 mb-3">
                  <button
                    className="btn btn-outline-primary sub below rounded-pill button1  border border-info"
                    type="submit"
                    value="Register Complaint"
                    onClick={PostData}
                  >
                    Register Complaint
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Complaints;
