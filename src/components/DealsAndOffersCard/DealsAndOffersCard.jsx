import React from "react";
import { Col } from "react-bootstrap";

const DealsAndOffersCard = ({ img, title, discount }) => {
  return (
    <Col className="col deals-and-offers-card" xs="12" sm="6" lg="2" xl="2">
      <img src={img} alt={title} />
      <div>{title}</div>
      <div>{discount}</div>
    </Col>
  );
};

export default DealsAndOffersCard;
