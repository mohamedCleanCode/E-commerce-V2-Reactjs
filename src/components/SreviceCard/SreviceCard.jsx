import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import "./SreviceCard.css";

const SreviceCard = ({ img, title, icon }) => {
  return (
    <Col xs="12" md="6" lg="3">
      <div className="service-card bg-white rounded border mb-1">
        <img src={img} alt={title} />
        <div>
          <p>{title}</p>
          <div className="icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SreviceCard;
