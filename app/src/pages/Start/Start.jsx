import Scene from "./../../components/Scene/index";
import Cube from "./../../components/Models/Cube/index";
import SceneWrapper from "./../../components/Wrappers/SceneWrapper";
function Start() {
  return (
    <SceneWrapper>
      <Scene>
        <Cube />
      </Scene>
    </SceneWrapper>
  );
}

export default Start;
