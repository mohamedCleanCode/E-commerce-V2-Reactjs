import React from "react";
import ConsumerAndGadgets from "../../components/ConsumerAndGadgets/ConsumerAndGadgets";
import DealsAndOffers from "../../components/DealsAndOffers/DealsAndOffers";
import HomeAndOutDoor from "../../components/HomeAndOutDoor/HomeAndOutDoor";
import Intro from "../../components/Intro/Intro";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import OurExtraServices from "../../components/OurExtraServices/OurExtraServices";
import RecommendedItems from "../../components/RecommendedItems/RecommendedItems";
import SuppliersQuote from "../../components/SuppliersQuote/SuppliersQuote";
import SuppliresRegion from "../../components/SuppliresRegion/SuppliresRegion";

const HomePage = () => {
  return (
    <>
      <Intro />
      <DealsAndOffers />
      <HomeAndOutDoor />
      <ConsumerAndGadgets />
      <SuppliersQuote />
      <RecommendedItems />
      <OurExtraServices />
      <SuppliresRegion />
      <NewsLetter />
    </>
  );
};

export default HomePage;
