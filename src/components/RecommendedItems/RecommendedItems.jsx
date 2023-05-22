import React from "react";
import { Container, Row } from "react-bootstrap";
import tshirt from "../../assets/images/05.png";
import wallet from "../../assets/images/06.png";
import jacket from "../../assets/images/2 1.png";
import suit from "../../assets/images/image 30.png";
import RecommendedItemsCard from "../RecommendedItemsCard/RecommendedItemsCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const RecommendedItems = () => {
  return (
    <Container>
      <SectionTitle title="Recommended items" />
      <Row>
        <RecommendedItemsCard
          img={tshirt}
          title="T-shirts with multiple colors, for men"
          price="10.30"
        />
        <RecommendedItemsCard
          img={jacket}
          title="T-shirts with multiple colors, for men"
          price="10.30"
        />
        <RecommendedItemsCard
          img={suit}
          title="T-shirts with multiple colors, for men"
          price="10.30"
        />
        <RecommendedItemsCard
          img={wallet}
          title="T-shirts with multiple colors, for men"
          price="10.30"
        />
        <RecommendedItemsCard
          img={tshirt}
          title="T-shirts with multiple colors, for men"
          price="10.30"
        />
        <RecommendedItemsCard
          img={jacket}
          title="T-shirts with multiple colors, for men"
          price="10.30"
        />
        <RecommendedItemsCard
          img={suit}
          title="T-shirts with multiple colors, for men"
          price="10.30"
        />
        <RecommendedItemsCard
          img={wallet}
          title="T-shirts with multiple colors, for men"
          price="10.30"
        />
      </Row>
    </Container>
  );
};

export default RecommendedItems;
