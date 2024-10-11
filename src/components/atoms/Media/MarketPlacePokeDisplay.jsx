import React, { useRef } from "react";

const MarketPlacePokeDisplay = ({ dad = 132, mom = 132, version = "" }) => {
  const link = `https://ifd-spaces.sfo2.cdn.digitaloceanspaces.com/sprites/custom/${mom}.${dad}${version}.png`;

  return <img src={link} />;
};

export default MarketPlacePokeDisplay;
