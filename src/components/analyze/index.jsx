import React, { useRef, useState } from "react";
import NavBar from "../navbar";
import { ReactComponent as ImgUpload } from "../../assets/image_upload.svg";
import { ReactComponent as VideoUpload } from "../../assets/video_upload.svg";
import { ReactComponent as LiveStream } from "../../assets/live_streaming.svg";
import { ReactComponent as Tick } from "../../assets/checked.svg";
import Loader from "../../assets/loader.gif";
// import axios from 'axios';

import "./analyze.css";
import axios from "axios";
import { useHistory } from "react-router";

const Analyze = () => {
  const imageFile = useRef(null);
  const videoFile = useRef(null);
  const history = useHistory();
  const [isImage, setIsImage] = useState(false);
  const imageUploader = () => {
    imageFile.current.click();
  };
  const videoUploader = () => {
    videoFile.current.click();
  };
  const imageUploadHandler = () => {
    document.getElementById("image-upload").style.display = "none";
    document.getElementById("image-text").style.display = "none";
    document.getElementById("image-tick").style.display = "block";
    document.getElementById("submitButton").style.display = "block";
    setIsImage(true);
  };

  const videoUploadHandler = () => {
    document.getElementById("video-upload").style.display = "none";
    document.getElementById("video-text").style.display = "none";
    document.getElementById("video-tick").style.display = "block";
    document.getElementById("submitButton").style.display = "block";
    setIsImage(false);
  };

  const fileSubmitHandler = () => {
    if (isImage) {
      const input = document.getElementById("image__file");
      if (input.files && input.files[0]) {
        let formData = new FormData();
        formData.append("image", input.files[0]);
        axios
          .post("http://127.0.0.1:5000/image_upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            console.log(res.data);
            history.push("/predict_image", {
              output: res.data,
              input: URL.createObjectURL(input.files[0]),
            });
          });
      }
    } else {
      const input = document.getElementById("video__file");
      document.getElementById("video-tick").style.display = "none";
      document.getElementById("video__spinner").style.display = "block";
      if (input.files && input.files[0]) {
        let formData = new FormData();
        formData.append("video", input.files[0]);
        axios
          .post("http://127.0.0.1:5000/video_upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            document.getElementById("video__spinner").style.display = "none";
            document.getElementById("video-tick").style.display = "block";
            history.push("/video_render", res.data);
          });
      }
    }
  };

  return (
    <div className="main__content analyze__bg">
      <NavBar />
      <div className="pages-hero">
        <div className="analyze__header container">
          <h5>Your Crop. Your Camera. Your Solution.</h5>
          <h1>Analyze your crop</h1>
        </div>
      </div>
      <div className="analyze__content">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="embed-responsive embed-responsive-1by1 analyze__card"
                id="image__uploader"
                onClick={imageUploader}
              >
                <div className="card embed-responsive-item">
                  <div className="card-body d-flex flex-column">
                    <input
                      type="file"
                      id="image__file"
                      ref={imageFile}
                      style={{ display: "none" }}
                      onChange={imageUploadHandler}
                    />
                    <Tick
                      className="img-fluid"
                      style={{ display: "none" }}
                      id="image-tick"
                    />
                    <ImgUpload
                      className="img-fluid"
                      style={{ height: "60%" }}
                      id="image-upload"
                    />
                    <div id="image-text">
                      <h5>Run analysis on a crop image.</h5>
                      <p>Upload a crop picture here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="embed-responsive embed-responsive-1by1 analyze__card"
                onClick={videoUploader}
              >
                <div className="card embed-responsive-item">
                  <div className="card-body d-flex flex-column">
                    <input
                      type="file"
                      id="video__file"
                      ref={videoFile}
                      style={{ display: "none" }}
                      onChange={videoUploadHandler}
                    />
                    <div
                      role="status"
                      id="video__spinner"
                      style={{ display: "none", width: "100%", height: "100%" }}
                    >
                      <img src={Loader} alt="" className="img-fluid" />
                    </div>
                    <Tick
                      className="img-fluid"
                      style={{ display: "none" }}
                      id="video-tick"
                    />
                    <VideoUpload
                      id="video-upload"
                      className="img-fluid vector__bg"
                      style={{ height: "60%" }}
                    />
                    <div id="video-text">
                      <h5>Run analysis on a crop video.</h5>
                      <p>Upload a crop video here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="embed-responsive embed-responsive-1by1 analyze__card"
                onClick={() => {
                  window.location.href = "/live_render";
                }}
              >
                <div className="card embed-responsive-item">
                  <div className="card-body d-flex flex-column">
                    <LiveStream
                      className="img-fluid vector__bg"
                      style={{ height: "60%", padding: "2em" }}
                    />
                    <h5>Live analysis of your crop.</h5>
                    <p>Click here to start a live analysis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            id="submitButton"
            style={{ display: "none" }}
            onClick={fileSubmitHandler}
          >
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
