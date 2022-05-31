import React from "react";
import Scene from "@components/Scene";
import Shoe from "@components/Models/Shoe";
import Picker from "@components/Picker";
import SceneWrapper from "@components/Wrappers/SceneWrapper";
import { getSelectedMesh } from "@states/selectedMesh";
import { useAtom } from "jotai";

function Continue() {
  const [mesh] = useAtom(getSelectedMesh);
  return (
    <SceneWrapper>
      <Scene>
        <Shoe />
      </Scene>
      {mesh.name && <Picker />}
    </SceneWrapper>
  );
}

export default Continue;
