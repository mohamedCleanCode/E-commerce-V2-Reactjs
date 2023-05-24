import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterSide from "../../components/FilterSide/FilterSide";

const ShopPage = () => {
  return (
    <Container>
      <Row>
        <Col xs="6" sm="4" lg="3">
          <FilterSide />
        </Col>
        <Col xs="6" sm="8" lg="9"></Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
