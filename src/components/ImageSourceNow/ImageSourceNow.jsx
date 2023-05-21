import React from "react";
import { Button } from "react-bootstrap";
import "./ImageSourceNow.css";

const ImageSourceNow = ({ img, title }) => {
  return (
    <div className="image-source-now">
      <img src={img} alt="logo" />
      <div className="info">
        <h4>{title}</h4>
        <Button variant="light">Source now</Button>
      </div>
    </div>
  );
};

export default ImageSourceNow;
