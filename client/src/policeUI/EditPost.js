import React, { Component } from "react";
import Axios from "axios";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policeName: "",
      policeEmail: "",
      policePassword: "",
      cpolicePassword: "",
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`/detail/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          policeName: res.data.post.policeName,
          policeEmail: res.data.post.policeEmail,
          policePassword: res.data.post.policePassword,
          cpolicePassword: res.data.post.cpolicePassword,
        });
      }
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { policeName, policeEmail, policePassword, cpolicePassword } =
      this.state;
    const data = {
      policeName: policeName,
      policeEmail: policeEmail,
      policePassword: policePassword,
      cpolicePassword: cpolicePassword,
    };
    console.log(data);
    const id = this.props.match.params.id;
    Axios.put(`/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("updated successfully");
        this.setState({
          policeName: "",
          policeEmail: "",
          policePassword: "",
          cpolicePassword: "",
        });
      }
    });
  };
  render() {
    return (
      <>
        <div className="image">
          <h1>Edit Officer Here</h1>

          <div className="container contact_div ">
            <div className="row ">
              <div className="col-md-6 col-10 mx-auto solution ">
                <form method="POST " className="">
                  <div className="mb-3 ">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label "
                    >
                      Full Name of Police Officer
                    </label>
                    <input
                      type="text"
                      className="form-control border border-info"
                      id="exampleFormControlInput1"
                      name="policeName"
                      value={this.state.policeName}
                      onChange={this.handleInputChange}
                      placeholder="Enter Police Officer Name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control border border-info"
                      id="exampleFormControlInput1"
                      name="policeEmail"
                      value={this.state.policeEmail}
                      onChange={this.handleInputChange}
                      placeholder="name@FullName example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Set Police Password
                    </label>
                    <input
                      type="password"
                      className="form-control border border-info"
                      id="exampleFormControlInput1"
                      name="policePassword"
                      value={this.state.policePassword}
                      onChange={this.handleInputChange}
                      placeholder="name@FullName example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Confirm Police Password
                    </label>
                    <input
                      type="password"
                      className="form-control border border-info"
                      id="exampleFormControlInput1"
                      name="cpolicePassword"
                      value={this.state.cpolicePassword}
                      onChange={this.handleInputChange}
                      placeholder="name@FullName example.com"
                      required
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <button
                      className="btn btn-outline-primary sub below rounded-pill button1  border border-info"
                      type="submit"
                      value="Register Police Officer"
                      onClick={this.onSubmit}
                    >
                      Edit Police Officer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditPost;
