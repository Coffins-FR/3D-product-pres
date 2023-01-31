import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

const BorderedWrapper = styled("div", {
  position: "absolute",
  width: "calc(100% - 48px)",
  bottom: "0",
  right: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: `1px solid ${blackA.blackA8}`,
  padding: "24px",
});

export default BorderedWrapper;
