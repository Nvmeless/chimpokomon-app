import React, { useRef } from "react";

const AlexOnSagerPokeDisplay = ({ dad = 132, mom = 132 }) => {
  const link = `https://images.alexonsager.net/pokemon/fused/${mom}/${mom}.${dad}.png`;
  const docTitle = useRef(document.title);
  docTitle.current = "Toto";
  // imgElt.current.src = `https://images.alexonsager.net/pokemon/fused/132/132.132.png`;
  // console.log(imgElt.current.src);
  return <img src={link} />;
};
// AlexOnSagerPokeDisplay.src
// const root = document.getElementById("root");

// const imgElt = document.createElement("img");
// imgElt.src = `https://images.alexonsager.net/pokemon/fused/${mom}/${mom}.${dad}.png`;
// root.appendChild(imgElt);

export default AlexOnSagerPokeDisplay;
