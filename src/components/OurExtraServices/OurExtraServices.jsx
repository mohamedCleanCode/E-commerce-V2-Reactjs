import {
  faPen,
  faSearch,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row } from "react-bootstrap";
import image2 from "../../assets/images/Mask group (1).png";
import image3 from "../../assets/images/image 106.png";
import image4 from "../../assets/images/image 107.png";
import image1 from "../../assets/images/inventory.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import SreviceCard from "../SreviceCard/SreviceCard";

const OurExtraServices = () => {
  return (
    <Container className="px-0">
      <SectionTitle title="Our extra services" />
      <Row>
        <SreviceCard
          img={image1}
          title="Source from inducstury hubs"
          icon={faSearch}
        />
        <SreviceCard
          img={image2}
          title="Customize your products"
          icon={faPen}
        />
        <SreviceCard
          img={image3}
          title="Fast, reliable shipping by ocean or air"
          icon={faTruck}
        />
        <SreviceCard
          img={image4}
          title="Product monitoring and inspection"
          icon={faShieldHalved}
        />
      </Row>
    </Container>
  );
};

export default OurExtraServices;
