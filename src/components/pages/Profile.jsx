import React, { useRef, useState, useEffect } from "react";
// import AlexOnSagerPokeDisplay from "../atoms/Images/AlexOnSagerPokeDisplay";
import { Media, Text } from "../atoms";
import axios from "axios";
import { Nes } from "../molecules";
import Chimpokodex from "../templates/Chimpokodex";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../store";

const Profile = () => {
  const dispatch = useDispatch();
  const { status, pokefiche, error } = useSelector((state) => {
    return state.pokeApiSlice;
  });
  const [isLoaded, setIsLoaded] = useState(status);
  const [momId, setMomId] = useState(null);
  const [dadId, setDadId] = useState(null);
  const [myChimpokomon, setMyChimpokomon] = useState(pokefiche);
  const refTest = useRef();
  useEffect(() => {
    if (myChimpokomon && status === "success") {
      setDadId(pokefiche.id);
       

    } else if (myChimpokomon === null) {
      setDadId(Math.floor(Math.random() * 152) + 1);
      setMomId(Math.floor(Math.random() * 152) + 1);
    }
  }, []);

  useEffect(() => {
    if (momId && dadId) {
      dispatch(fetchPokemon(dadId));
    }
  }, [momId, dadId]);

  useEffect(() => {
    console.log(status, pokefiche, error);
    setIsLoaded(status);
  }, [status]);

  useEffect(() => {
    if (isLoaded === "sucess") {
    }
  }, [isLoaded]);
  // useEffect(() => {});

  return (
    <>
      {isLoaded === "success" ? (
        <Chimpokodex
          momId={momId}
          dadId={dadId}
          fiche={pokefiche}
        ></Chimpokodex>
      ) : (
        <Text.Title>Pas Load</Text.Title>
      )}
    </>
  );

  // return (
  //   <Nes.Container>
  //     <Media.AlexOnSagerPokeDisplay
  //       dad={132}
  //       mom={42}
  //     ></Media.AlexOnSagerPokeDisplay>
  //     <Media.MarketPlacePokeDisplay
  //       mom={132}
  //       dad={42}
  //       version=""
  //     ></Media.MarketPlacePokeDisplay>
  //     <Media.MarketPlacePokeDisplay version="f"></Media.MarketPlacePokeDisplay>
  //   </Nes.Container>
  // );
};

export default Profile;
