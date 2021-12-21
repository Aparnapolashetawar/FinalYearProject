import React, { useState } from "react";
import axios from "axios";

const AddGallary = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("description", data.description);

    axios
      .post("/gallaries", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    //   const { name, value } = e.target;

    //   setData((preVal) => {
    //     return {
    //       ...preVal,
    //       [name]: value,
    //     };
    //   });
    // };
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };

  return (
    <>
      <div className="adimg">
        <div className="container">
          <h1>Post Images</h1>
          <br />

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="form-control"
                placeholder="Title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                value={data.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="file">Choose File</label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="image"
                className="form-control-file"
                onChange={handleImage}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Post Images
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddGallary;

//Testing
