import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const AddVehicle = () => {
  const history = useHistory();
  const [data, setData] = useState({
    vehiclenumber: "",
    category: "",

    registeredname: "",
    place: "",
    fine: "",
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
    const { vehiclenumber, category, registeredname, place, fine } = data;

    const res = await fetch("/AddVehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vehiclenumber,
        category,

        registeredname,
        place,
        fine,
      }),
    });

    const store = await res.json();

    if (res.status === 422 || !store) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Vehicle Registered Successfully");
      console.log("Vehicle Registered Successfully");
      history.push("/");
    }
  };

  return (
    <>
      <div className="whole">
        <div className="whole2 ">
          <h1>Add Vehicle Details</h1>
          <form method="POST">
            <div class="form-group a  ">
              <label for="exampleFormControlInput1">Vehicle Number</label>
              <input
                type="String"
                class="form-control"
                name="vehiclenumber"
                value={data.vehiclenumber}
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="Vehicle Number"
                onChange={InputEvent}
                required
              />
            </div>

            <div class="form-group a  ">
              <label for="exampleFormControlInput1">Category</label>
              <input
                type="text"
                class="form-control"
                name="category"
                value={data.category}
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="category"
                onChange={InputEvent}
                required
              />
            </div>

            <div class="form-group a  ">
              <label for="exampleFormControlInput1">Registered Name</label>
              <input
                type="text"
                class="form-control"
                name="registeredname"
                value={data.registeredname}
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="registered Name"
                onChange={InputEvent}
                required
              />
            </div>

            <div class="form-group a  ">
              <label for="exampleFormControlInput1">Place for Contact</label>
              <input
                type="text"
                class="form-control"
                name="place"
                value={data.place}
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="Visit for more details"
                onChange={InputEvent}
                required
              />
            </div>

            <div class="form-group a  ">
              <label for="exampleFormControlInput1">Vehicle Fine Charge</label>
              <input
                type="Number"
                class="form-control"
                name="fine"
                value={data.fine}
                id="exampleFormControlInput1"
                aria-describedby="emailHelp"
                placeholder="fine"
                onChange={InputEvent}
              />
            </div>

            <button
              type="submit"
              onClick={PostData}
              class="btn btn-primary logbtn  rounded-pill "
            >
              Add Vehicle
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVehicle;
