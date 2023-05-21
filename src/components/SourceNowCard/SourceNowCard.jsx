import React from "react";
import { Col } from "react-bootstrap";
import "./SourceNowCard.css";

const SourceNowCard = ({ title, img, price }) => {
  return (
    <Col
      xs="6"
      md="4"
      lg="3"
      className="source-now-card d-flex justify-content-center align-items-center"
    >
      <div className="info">
        <h4>{title}</h4>
        <p>from</p>
        <p>{price}</p>
      </div>
      <img src={img} alt={title} />
    </Col>
  );
};

export default SourceNowCard;
