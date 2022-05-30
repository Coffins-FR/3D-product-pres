import React from "react";
import Scene from "../../components/Scene";
import Shoe from "../../components/Models/Shoe";
import SceneWrapper from "../../components/Wrappers/SceneWrapper";
import Title from "./Title";
import { selectedMesh } from "./../../states/selectedMesh";
import { useAtom } from "jotai";
function Continue() {
  const [obj] = useAtom(selectedMesh);
  return (
    <SceneWrapper>
      <Scene>
        <Shoe />
      </Scene>
      <Title>{obj.name}</Title>
    </SceneWrapper>
  );
}

export default Continue;
