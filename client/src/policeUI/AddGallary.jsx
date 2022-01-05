import React, { useState } from "react";
import axios from "axios";

const AddGallary = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();
    // const gal = {
    //   title,
    //   description,
    // };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", fileName);

    setTitle("");
    setDescription("");
    setFileName("");

    axios
      .post("/AddGallaries", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="wholee">
        <div className="adimg">
          <div className="container">
            <h1 className="white">Post Images</h1>
            <br />

            <form onSubmit={changeOnClick} enctype="multipart/form-data">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="file">Choose File</label>
                <input
                  type="file"
                  filename="image"
                  className="form-control-file"
                  onChange={onChangeFile}
                />
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary">
                Post Images
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddGallary;

//Testing
