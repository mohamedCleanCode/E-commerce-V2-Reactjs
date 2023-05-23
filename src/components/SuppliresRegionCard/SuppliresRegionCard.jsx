import React from "react";
import { Col } from "react-bootstrap";
import "./SuppliresRegionCard.css";

const SuppliresRegionCard = ({ img, title, site }) => {
  return (
    <Col xs="4" md="3" lg="2">
      <div className="supplires--region-card">
        <img src={img} alt={title} />
        <div>
          <p>{title}</p>
          <p>{site}</p>
        </div>
      </div>
    </Col>
  );
};

export default SuppliresRegionCard;
