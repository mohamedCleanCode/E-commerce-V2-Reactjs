import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import oppo from "../../assets/images/08.png";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Col xs="12" md="6" lg="4" className="product-card mb-2">
      <Card className="w-100">
        <Card.Img variant="top" src={oppo} />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title>
              $99.50 <del>$1128.00</del>
            </Card.Title>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <Card.Text className="d-flex align-items-center">
            <ReactStars count={5} size={24} activeColor="#ffd700" value={3} />
            <span className="d-inline ms-2" style={{ color: "#ffd700" }}>
              7.5
            </span>
          </Card.Text>
          <Card.Text className="text-black-50">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/">View Details</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
