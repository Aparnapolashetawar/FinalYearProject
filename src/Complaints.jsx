import React, { useState } from "react";

const Complaints = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
    complaint: "",
  });

  let name, value;
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { fullname, phone, email, address, complaint } = data;

    const res = await fetch(
      "https://police-1-e2049-default-rtdb.firebaseio.com/police.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          phone,
          email,
          address,
          complaint,
        }),
      }
    );
  };

  return (
    <>
      <div class="a">
        <div className="my-5">
          <h1 className="text-center"> Register Complaint Here </h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form method="POST">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={getData}
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
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={getData}
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={getData}
                    placeholder="E-mail"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Address
                  </label>
                  <input
                    type="address"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="address"
                    value={data.address}
                    onChange={getData}
                    placeholder="Address"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Complaint Details
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="complaint"
                    value={data.complaint}
                    onChange={getData}
                    placeholder="Register Here"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <button
                    class="b btn btn-outline-primary sub"
                    type="submit"
                    onClick={postData}
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
export default Complaints;
