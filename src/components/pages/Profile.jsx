import React, { useRef } from "react";
// import AlexOnSagerPokeDisplay from "../atoms/Images/AlexOnSagerPokeDisplay";
import { Media } from "../atoms";
import { Nes } from "../molecules";
const Profile = () => {
  const refTest = useRef();

  return (
    <Nes.Container>
      <Media.AlexOnSagerPokeDisplay
        dad={132}
        mom={42}
      ></Media.AlexOnSagerPokeDisplay>
      <Media.MarketPlacePokeDisplay
        mom={132}
        dad={42}
        version=""
      ></Media.MarketPlacePokeDisplay>
      <Media.MarketPlacePokeDisplay version="f"></Media.MarketPlacePokeDisplay>
    </Nes.Container>
  );
};

export default Profile;
