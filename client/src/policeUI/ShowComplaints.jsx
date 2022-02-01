import React, { Component } from "react";
import axios from "axios";

class ShowComplaints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Complaints: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get("http://localhost:5000/Complaints").then((res) => {
      if (res.data.success) {
        this.setState({
          Complaints: res.data.Complaints,
        });
        console.log("post:", this.state.Complaints);
        // console.log("post select:", this.state.Complaints[0][1]);
        console.log("post1:", this.state.Complaints[0]);
      }
    });
  }

  render() {
    // {
    //   this.state.Complaints.map((d) => {
    //     return { select: false,fullname:d.fullname,adhar:d.adhar,email:d.email,phone:d.phone,address:d.address,pincode:d.pincode,opponentName:d.opponentName,opponentAddress=d.opponentAddress,complaint:d.complaint };
    //   });
    // }

    return (
      <div class="whole3">
        <h1 class="acs"> All Complaints </h1>

        <table
          class="table table-striped 
        "
        >
          <thead>
            <tr class="table-dark">
              <th scope="col">Sr.No.</th>

              <th scope="col">FullName</th>
              <th scope="col">Adhar</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Pincode</th>
              <th scope="col">OpponentName</th>
              <th scope="col">OpponentAddress</th>

              <th scope="col">Complaint</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Complaints.map((st, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{st.fullname}</td>
                <td>{st.adhar}</td>
                <td>{st.email}</td>
                <td>{st.phone}</td>
                <td>{st.address}</td>
                <td>{st.pincode}</td>
                <td>{st.opponentName}</td>
                <td>{st.opponentAddress}</td>
                <td>{st.complaint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowComplaints;

/*const ShowComplaints = () => {
  return <h1>THIS IS Complaint PAGE for police</h1>;
};
export default ShowComplaints ;*/
