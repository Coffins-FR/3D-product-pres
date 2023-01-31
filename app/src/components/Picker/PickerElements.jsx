import { styled } from "@stitches/react";

export const PickerWrapper = styled("div", {
  position: "absolute",
  zIndex: 10,
  bottom: "40px",
  left: "40px",
  display: "flex",
  flexFlow: "row",
  justifyItems: "center",
  alignItems: "center",
});

export const PickerTitle = styled("h1", {
  marginRight: "16px",
  padding: 0,
  "font-size": "48px",
  "text-transform": "capitalize",
});
