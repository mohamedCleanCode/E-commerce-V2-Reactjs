import React from "react";
import ConsumerAndGadgets from "../../components/ConsumerAndGadgets/ConsumerAndGadgets";
import DealsAndOffers from "../../components/DealsAndOffers/DealsAndOffers";
import HomeAndOutDoor from "../../components/HomeAndOutDoor/HomeAndOutDoor";
import Intro from "../../components/Intro/Intro";

const HomePage = () => {
  return (
    <>
      <Intro />
      <DealsAndOffers />
      <HomeAndOutDoor />
      <ConsumerAndGadgets />
    </>
  );
};

export default HomePage;
