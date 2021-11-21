import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
    address: "",
    pincode: "",
    vaddress: "",
    vpincode: "",
    victim: "",
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

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };
  return (
    <>
      <div class="image">
        <h1>Register Complaint Here</h1>

        <div className="container contact_div">
          <div className="row ">
            <div className="col-md-6 col-10 mx-auto solution">
              <form onSubmit={formSubmit}>
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
                    Phone No
                  </label>
                  <input
                    type="Number"
                    class="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile Number"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@FullName example.com"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Permanent Address
                  </label>
                  <input
                    type="address"
                    class="form-control border border-info"
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
                    class="form-control border border-info"
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
                    Victim's Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="victim"
                    value={data.victim}
                    onChange={InputEvent}
                    placeholder="Enter Victim's Name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Victims's Address
                  </label>
                  <input
                    type="address"
                    class="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="vaddress"
                    value={data.vaddress}
                    onChange={InputEvent}
                    placeholder="Enter Address if known"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Victim's Pin Code
                  </label>
                  <input
                    type="Number"
                    class="form-control border border-info"
                    id="exampleFormControlInput1"
                    name="vpincode"
                    value={data.vpincode}
                    onChange={InputEvent}
                    placeholder="Enter Pin Code if known"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Complaint Details
                  </label>
                  <textarea
                    class="form-control border border-info"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                    placeholder="Add Complaint"
                    required
                  ></textarea>
                </div>

                <div class="col-12 mb-3">
                  <button
                    class="btn btn-outline-primary sub below rounded-pill button1  border border-info"
                    type="submit"
                  >
                    Submit form
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
export default Contact;
