import React from "react";

const AddGallary = () => {
  return (
    <>
      <div className="gally">
        <center>
          <div className="container">
            <form action="/profile" method="post" enctype="multipart/form-data">
              <h3>ADD IMAGE HERE</h3>
              <br />
              <input
                type="file"
                name="image"
                id="inputimage"
                required="true"
                accept="image/*"
              />
              <h3>ADD CAPTION TO THE IMAGE</h3>
              <input
                type="text"
                className="form-control border border-info"
                id="caption"
                name="caption"
                required="true"
                placeholder="Enter Caption for the image"
              />
              <button
                className="btn btn-outline-primary sub below rounded-pill button1  border border-info"
                type="submit"
                value="upload image"
              >
                UPLOAD IMAGE
              </button>
            </form>
          </div>
        </center>
      </div>
    </>
  );
};
export default AddGallary;
