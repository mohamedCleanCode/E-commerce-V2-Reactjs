import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import banner from "../../assets/images/banner.png";
import Sidebar from "../Sidbar/Sidebar";
import UserIntro from "../UserIntro/UserIntro";
import "./Intro.css";

const Intro = () => {
  return (
    <Container className="bg-white py-3 intro d-flex mb-5 border rounded">
      <Row className="w-100">
        <Col xs="12" md="6" lg="3">
          <Sidebar />
        </Col>
        <Col xs="12" md="6" lg="6">
          <div className="intro-image">
            <div>
              <p>Latest trending</p>
              <h3>Electronic items</h3>
              <Button variant="light">Learn more</Button>
            </div>
          </div>
        </Col>
        <Col xs="12" md="6" lg="3">
          <UserIntro />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
