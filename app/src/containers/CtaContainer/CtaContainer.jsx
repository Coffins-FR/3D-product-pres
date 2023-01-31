import { styled } from "@stitches/react";
import React from "react";

const Wrapper = styled("div", {
  display: "flex",
  gap: "16px",
});

function CtaContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default CtaContainer;
