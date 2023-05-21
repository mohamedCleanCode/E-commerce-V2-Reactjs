import React from "react";
import { Button } from "react-bootstrap";
import image from "../../assets/images/Group 969.png";
import "./ImageSourceNow.css";

const ImageSourceNow = ({ img, title }) => {
  return (
    <div className="image-source-now">
      <img src={image} alt="logo" />
      <div className="info">
        <h4>Home and outdoor</h4>
        <Button variant="light">Source now</Button>
      </div>
    </div>
  );
};

export default ImageSourceNow;
