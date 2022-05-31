import { HexColorPicker } from "react-colorful";
import { getSelectedMesh } from "@states/selectedMesh";
import { selectedColorState } from "@states/colorState";
import { useAtom } from "jotai";
import { PickerWrapper, PickerTitle } from "./PickerElements";

function Picker() {
  const [mesh] = useAtom(getSelectedMesh);
  const [color, setColor] = useAtom(selectedColorState);
  return (
    <PickerWrapper>
      <PickerTitle>{mesh.name}</PickerTitle>
      <HexColorPicker
        color={color[mesh.name]}
        onChange={(event) => setColor({ [mesh.name]: event })}
      />
    </PickerWrapper>
  );
}

export default Picker;
