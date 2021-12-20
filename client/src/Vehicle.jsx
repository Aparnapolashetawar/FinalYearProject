import React, { Component } from "react";
import axios from "axios";

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddVehicle: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get("http://localhost:5000/AddVehicle").then((res) => {
      if (res.data.success) {
        this.setState({
          AddVehicle: res.data.AddVehicle,
        });
        console.log("post:", this.state.AddVehicle);
      }
    });
  }
  render() {
    return (
      <div class="whole3 ">
        <div class="container">
          <center>
            <h1>Lost vehicle/Picked vehicle</h1>
          </center>
          <table
            class="table table-striped 
        "
          >
            <thead>
              <tr class="table-dark">
                <th scope="col">Sr.No.</th>

                <th scope="col">Vehicle Number</th>
                <th scope="col">Category</th>
                <th scope="col">Registered Name</th>
                <th scope="col">Place to contact</th>
                <th scope="col">Fine</th>
              </tr>
            </thead>
            <tbody>
              {this.state.AddVehicle.map((st, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{st.vehiclenumber}</td>
                  <td>{st.category}</td>
                  <td>{st.registeredname}</td>
                  <td>{st.place}</td>
                  <td>{st.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Vehicle;
