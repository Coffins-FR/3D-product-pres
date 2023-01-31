import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { styled } from "@stitches/react";
import { violet, blackA, mauve } from "@radix-ui/colors";

export const ToggleGroupWrapper = styled("div", {});

export const ToggleGroupRoot = styled(ToggleGroup.Root, {
  display: "inline-flex",
  backgroundColor: mauve.mauve6,
  borderRadius: 4,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

export const ToggleGroupItem = styled(ToggleGroup.Item, {
  all: "unset",
  backgroundColor: "white",
  color: mauve.mauve11,
  height: 35,
  width: 35,
  display: "flex",
  fontSize: 15,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 1,
  "&:first-child": {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  "&:last-child": { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  "&:hover": { backgroundColor: violet.violet3, cursor: "pointer" },
  "&[data-state=on]": {
    backgroundColor: violet.violet5,
    color: violet.violet11,
  },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px #1A1A1A` },
});
