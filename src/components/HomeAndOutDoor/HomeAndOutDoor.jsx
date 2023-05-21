import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import home from "../../assets/images/01.png";
import sofa from "../../assets/images/04.png";
import chair from "../../assets/images/chair.png";
import blenders from "../../assets/images/image 87.png";
import mixer from "../../assets/images/image 88.png";
import maker from "../../assets/images/image 89.png";
import watches from "../../assets/images/image 90.png";
import rasm from "../../assets/images/rasm.png";
import ImageSourceNow from "../ImageSourceNow/ImageSourceNow";
import SourceNowCard from "../SourceNowCard/SourceNowCard";
import "./HomeAndOutDoor.css";

const HomeAndOutDoor = () => {
  return (
    <Container className="bg-white home-and-outdoor d-flex justify-content-center ps-0  mb-5 border rounded">
      <Row className="w-100">
        <Col xs="12" md="4" lg="3" className="col pe-0">
          <ImageSourceNow />
        </Col>
        <Col xs="12" md="8" lg="9" className="col">
          <Row className="h-100">
            <SourceNowCard img={chair} title="Soft chairs" price="USD 19" />
            <SourceNowCard img={sofa} title="Soft chairs" price="USD 19" />
            <SourceNowCard img={rasm} title="Soft chairs" price="USD 19" />
            <SourceNowCard img={watches} title="Soft chairs" price="USD 19" />
            <SourceNowCard img={mixer} title="Soft chairs" price="USD 19" />
            <SourceNowCard img={blenders} title="Soft chairs" price="USD 19" />
            <SourceNowCard img={home} title="Soft chairs" price="USD 19" />
            <SourceNowCard img={maker} title="Soft chairs" price="USD 19" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeAndOutDoor;
