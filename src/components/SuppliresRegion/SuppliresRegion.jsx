import React from "react";
import { Container, Row } from "react-bootstrap";
import image3 from "../../assets/images/RU@2x.png";
import image2 from "../../assets/images/US@2x.png";
import image1 from "../../assets/images/icon.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import SuppliresRegionCard from "../SuppliresRegionCard/SuppliresRegionCard";

const SuppliresRegion = () => {
  return (
    <Container className="px-0 mb-5">
      <SectionTitle title="Suppliers by region" />
      <Row>
        <SuppliresRegionCard
          img={image1}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image2}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image3}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image2}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image1}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image2}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image3}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image2}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image1}
          title="Arabic Emirates"
          site="shopname.ae"
        />
        <SuppliresRegionCard
          img={image2}
          title="Arabic Emirates"
          site="shopname.ae"
        />
      </Row>
    </Container>
  );
};

export default SuppliresRegion;
