import {
  ToggleGroupWrapper,
  ToggleGroupRoot,
  ToggleGroupItem,
} from "./ToggleGroupElement";

const ToggleGroup = ({ items, defaultValue }) => {
  return (
    <ToggleGroupWrapper>
      <ToggleGroupRoot
        type="single"
        defaultValue={defaultValue}
        aria-label="Choose your size"
      >
        {!!items &&
          items.map((value) => (
            <ToggleGroupItem value={value} aria-label={`size ${value}`}>
              {value}
            </ToggleGroupItem>
          ))}
      </ToggleGroupRoot>
    </ToggleGroupWrapper>
  );
};

export default ToggleGroup;
