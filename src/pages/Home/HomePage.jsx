import React from "react";
import DealsAndOffers from "../../components/DealsAndOffers/DealsAndOffers";
import HomeAndOutDoor from "../../components/HomeAndOutDoor/HomeAndOutDoor";
import Intro from "../../components/Intro/Intro";

const HomePage = () => {
  return (
    <>
      <Intro />
      <DealsAndOffers />
      <HomeAndOutDoor />
    </>
  );
};

export default HomePage;
