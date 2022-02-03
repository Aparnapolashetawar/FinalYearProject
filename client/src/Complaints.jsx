import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Complaints = () => {
  const history = useHistory();
  const [formerrors, setformerrors] = useState({});
  const [issubmit, setissubmit] = useState(false);
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
    select: "",
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
    setformerrors(validate(data));
    setissubmit(true);
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
      select,
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
        complaint,
        select,
      }),
    });

    const store = await res.json();

    if (res.status === 422 || !store) {
      window.alert("Invalid credentials");
      console.log("Invalid credentials");
    } else {
      window.alert("Complaint Registered Successfully");
      console.log("Complaint Registered Successfully");
      history.push("/");
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;
    const ph = ["1", "2", "3", "4", "5", "6"];
    if (!values.fullname) {
      errors.fullname = "Name is required!";
    }
    if (!values.adhar) {
      errors.adhar = "adhar no is required!";
    } else if (values.adhar.length != 12) {
      errors.adhar = "adhar no must contain 12 digits";
    }

    if (!values.phone) {
      errors.phone = "phone no is required!";
    } else if (values.phone.length != 10) {
      errors.phone = "phone no must be 10 digit number";
    } else if (values.phone[0] in ph) {
      errors.phone = "phone no starting with digits(7,8,9) are only acceptable";
    }

    if (!values.email) {
      errors.email = "email address is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.address) {
      errors.address = "permanent address is required!";
    }
    if (!values.pincode) {
      errors.pincode = "pincode is required!";
    } else if (values.pincode.length != 6) {
      errors.pincode = "pincode must include 6 digits";
    }
    if (!values.complaint) {
      errors.complaint = "complaint is required!";
    }
    return errors;
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
                  <p className="error">{formerrors.fullname}</p>
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
                  <p className="error">{formerrors.adhar}</p>
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="Number"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile Number"
                    required
                  />
                  <p className="error">{formerrors.phone}</p>
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
                  <p className="error">{formerrors.email}</p>
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
                  <p className="error">{formerrors.address}</p>
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
                  <p className="error">{formerrors.pincode}</p>
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
                  <p className="error">{formerrors.complaint}</p>
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
