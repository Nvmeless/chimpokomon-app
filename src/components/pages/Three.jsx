import React from "react";
import { Nes } from "../molecules";
import { Lights, Meshs, Scene } from "../../playground";
import { OrbitControls } from "@react-three/drei";

const Three = () => {
  return (
    <Nes.Container>
      <Scene>
        <OrbitControls></OrbitControls>
        <Lights.Point position={[0, 0, 1]}></Lights.Point>
        <Meshs.Box materials={{ color: "blue" }}></Meshs.Box>
        <Meshs.Box
          mesh={{ position: [1, 1, 0] }}
          materials={{ color: "red" }}
        ></Meshs.Box>
        <Meshs.Box
          animation={(meshRef, state, delta, frame) => {
            meshRef.current.rotation.x += 0.1;
          }}
          mesh={{ position: [0, 1, 0] }}
          materials={{ color: "green" }}
        ></Meshs.Box>
        <Meshs.Box
          animation={(meshRef, state, delta, frame) => {
            meshRef.current.rotation.x += 1 * delta;
            meshRef.current.rotation.y += 1 * delta;
            meshRef.current.rotation.z += 1 * delta;
          }}
          mesh={{ position: [1, 0, 0] }}
          materials={{ color: "yellow" }}
        ></Meshs.Box>
      </Scene>
    </Nes.Container>
  );
};

export default Three;
