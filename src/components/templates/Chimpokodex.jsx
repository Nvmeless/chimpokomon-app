import React from "react";
import { Nes } from "../molecules";
import { Media, Text } from "../atoms";
const Chimpokodex = ({ momId, dadId, fiche }) => {
  return (
    <Nes.Container>
      <Media.MarketPlacePokeDisplay
        mom={momId}
        dad={dadId}
        version=""
      ></Media.MarketPlacePokeDisplay>
      <Text.Title>{fiche?.name}</Text.Title>
    </Nes.Container>
  );
};

export default Chimpokodex;
