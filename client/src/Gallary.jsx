import React, { Component } from "react";
import axios from "axios";

// const Gallary = () => {
//   return (
//     <>
//       <h1>Gallary</h1>
//

//       {this.state.AddGallary.map((st, index) => (
//         <tr>

//           <td>{st.title}</td>

//         </tr>
//       ))}
//     </>
//   );
// };

class Gallary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddGallary: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get("http://localhost:5000/AddGallary").then((res) => {
      if (res.data.success) {
        this.setState({
          AddGallary: res.data.AddGallary,
        });
        console.log("post:", this.state.AddGallary);
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.AddGallary.map((post, key) => (
          <div>
            <p>{post.title}</p>
            <p>{post.description}</p>

            <img src={`../../server/images/${post.image}`} />
          </div>
        ))}
      </div>
    );
  }
}

export default Gallary;

//Testing
