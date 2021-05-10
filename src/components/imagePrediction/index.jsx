import React from "react";
import NavBar from "../navbar";
import "./imagePrediction.css";

const ImagePrediction = (props) => {
  window.test = props.location.state;
  const diseaseList = ["BrownSpot", "Healthy", "Hispa", "LeafBlast"];
  const label = props.location.state.output["labels"][0];
  const arrayMaxIndex = (array) => {
    return array.indexOf(Math.max.apply(null, array));
  };
  const getStatusColor = (l) => {
    if (l < 20) {
      return "danger";
    } else if (l >= 20 && l < 40) {
      return "warning";
    } else if (l >= 40 && l < 60) {
      return "info";
    } else {
      return "success";
    }
  };
  console.log(label);
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

          {label.length !== 0 ? (
            <div className="pred__cont">
              <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 disease__desc__cont">
                    <div className="disease__desc">
                      <h2>
                        Predicted Disease :{" "}
                        <span id="label">
                          {diseaseList[arrayMaxIndex(label)]}
                        </span>
                      </h2>
                      <div className="disease__analytics">
                        <div className="d-flex align-items-center">
                          <div className="disease__name">
                            <small>
                              <b>Brown Spot</b>
                            </small>
                          </div>
                          <div className="progress__bar w-100">
                            <div className="progress">
                              <div
                                className={`progress-bar bg-${getStatusColor(
                                  (label[0] * 100).toFixed(1)
                                )}`}
                                role="progressbar"
                                style={{
                                  width: `${(label[0] * 100).toFixed(1)}%`,
                                }}
                                aria-valuenow={(label[0] * 100).toFixed(1)}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                {(label[0] * 100).toFixed(1)}%
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="disease__name">
                            <small>
                              <b>Healthy</b>
                            </small>
                          </div>
                          <div className="progress__bar w-100">
                            <div className="progress">
                              <div
                                className={`progress-bar bg-${getStatusColor(
                                  (label[1] * 100).toFixed(1)
                                )}`}
                                role="progressbar"
                                style={{
                                  width: `${(label[1] * 100).toFixed(1)}%`,
                                }}
                                aria-valuenow={(label[1] * 100).toFixed(1)}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                {(label[1] * 100).toFixed(1)}%
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="disease__name">
                            <small>
                              <b>Hispa</b>
                            </small>
                          </div>
                          <div className="progress__bar w-100">
                            <div className="progress">
                              <div
                                className={`progress-bar bg-${getStatusColor(
                                  (label[2] * 100).toFixed(1)
                                )}`}
                                role="progressbar"
                                style={{
                                  width: `${(label[2] * 100).toFixed(1)}%`,
                                }}
                                aria-valuenow={(label[2] * 100).toFixed(1)}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                {(label[2] * 100).toFixed(1)}%
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="disease__name">
                            <small>
                              <b>Leaf Blast</b>
                            </small>
                          </div>
                          <div className="progress__bar w-100">
                            <div className="progress">
                              <div
                                className={`progress-bar bg-${getStatusColor(
                                  (label[3] * 100).toFixed(1)
                                )}`}
                                role="progressbar"
                                style={{
                                  width: `${(label[3] * 100).toFixed(1)}%`,
                                }}
                                aria-valuenow={(label[3] * 100).toFixed(1)}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                {(label[3] * 100).toFixed(1)}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePrediction;
