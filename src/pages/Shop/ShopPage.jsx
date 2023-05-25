import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import FilterSide from "../../components/FilterSide/FilterSide";
import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/ProductCard/ProductCard";
import ResultHeader from "../../components/ResultHeader/ResultHeader";

const ShopPage = () => {
  return (
    <Container>
      <BreadCrumb />
      <Row>
        <Col xs="6" sm="4" lg="3">
          <FilterSide />
        </Col>
        <Col xs="6" sm="8" lg="9">
          <ResultHeader />
          <Row>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Row>
          <Row className="py-4">
            <Pagination />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
