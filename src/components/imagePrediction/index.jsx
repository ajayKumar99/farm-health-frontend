import React from "react";
import NavBar from "../navbar";
import "./imagePrediction.css";

const ImagePrediction = (props) => {
  window.test = props.location.state;
  return (
    <div className="main__content">
      <NavBar />
      <div className="imagepred-hero">
        <div className="analyze__header container">
          <h5>Your Crop. Your Camera. Your Solution.</h5>
          <h1>Analyze your crop</h1>
        </div>
      </div>
      <div className="pred__cont">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={`data:image/png;base64, ${props.location.state.output["inp"]}`}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={`data:image/png;base64, ${props.location.state.output["status"]}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePrediction;
