import React from "react";

const AddGallary = () => {
  return (
    <>
      <div className="gally">
        <center>
          <div className="container">
            <div className="col-md-6 col-10 mx">
              <form>
                <h3>ADD IMAGE HERE</h3>
                <div className="imageholder">
                  <input
                    type="file"
                    name="image-upload"
                    id="inputimage"
                    required="true"
                    accept="image/*"
                  />
                </div>

                <h3>ADD CAPTION TO THE IMAGE</h3>
                <input
                  type="text"
                  className="form-control border border-info"
                  id="caption"
                  name="caption"
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
          </div>
        </center>
      </div>
    </>
  );
};
export default AddGallary;
