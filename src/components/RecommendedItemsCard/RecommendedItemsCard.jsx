import React from "react";
import { Card, Col } from "react-bootstrap";
import "./RecommendedItemsCard.css";

const RecommendedItemsCard = ({ img, title, price }) => {
  return (
    <Col xs="12" md="4" lg="3" className="recommended-items-card mb-3">
      <Card className="w-100 h-100 rounded bg-white">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text className="fw-bold mb-1">${price}</Card.Text>
          <Card.Title className="text-black-50">{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecommendedItemsCard;
