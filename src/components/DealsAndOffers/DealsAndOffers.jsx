import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import watch from "../../assets/images/03.png";
import laptop from "../../assets/images/100.png";
import mobile from "../../assets/images/image 23.png";
import camera from "../../assets/images/image 28.png";
import headPhone from "../../assets/images/image 29.png";
import DealsAndOffersCard from "../DealsAndOffersCard/DealsAndOffersCard";
import "./DealsAndOffers.css";

const DealsAndOffers = () => {
  return (
    <Container className="bg-white deals-and-offers d-flex mb-5 border rounded">
      <Row className="w-100 h-100">
        <Col className="col" xs="12" sm="6" lg="2" xl="2">
          <div className="w-100">
            <p>Deals and offers</p>
            <p>Hygiene equipments</p>
            <div className="counter">
              <div>
                <div className="number">04</div>
                <div className="string">Days</div>
              </div>
              <div>
                <div className="number">13</div>
                <div className="string">Hours</div>
              </div>
              <div>
                <div className="number">34</div>
                <div className="string">Min</div>
              </div>
              <div>
                <div className="number">56</div>
                <div className="string">Sec</div>
              </div>
            </div>
          </div>
        </Col>
        <DealsAndOffersCard img={watch} title="Smart watches" discount="-25%" />
        <DealsAndOffersCard img={laptop} title="Laptops" discount="-15%" />
        <DealsAndOffersCard img={camera} title="Cameras" discount="-40%" />
        <DealsAndOffersCard
          img={headPhone}
          title="Headphones"
          discount="-25%"
        />
        <DealsAndOffersCard img={mobile} title="Mobiles" discount="-25%" />
      </Row>
    </Container>
  );
};

export default DealsAndOffers;
