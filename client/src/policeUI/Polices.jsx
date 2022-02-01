import React, { Component } from "react";
import axios from "axios";

class Polices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Admin: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get("http://localhost:5000/Admin").then((res) => {
      if (res.data.success) {
        this.setState({
          Admin: res.data.Admin,
        });
        console.log(this.state.Admin);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/delete/${id}`).then((res) => {
      alert(res.data.policeName + "  has been deleted successfully");
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Registered Police Officers</h1>

          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">Police Name</th>
                <th scope="col">Police Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Admin.map((post, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td colspan="1">{post.policeName}</td>
                  <td>{post.policeEmail}</td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${post._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      href="#"
                      onClick={() => this.onDelete(post._id)}
                    >
                      <i class="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Polices;
