import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductView from "../ProductView/ProductView";
import Result from "../Result/Result";

const ResultHeader = () => {
  return (
    <Row className="p-3 bg-white border rounded mb-2 align-items-center">
      <Col xs="12" lg="6">
        <Result />
      </Col>
      <Col xs="12" lg="6">
        <ProductView />
      </Col>
    </Row>
  );
};

export default ResultHeader;
