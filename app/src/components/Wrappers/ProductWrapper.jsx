import { styled } from "@stitches/react";

const ProductWrapper = styled("div", {
  position: "relative",
  width: "40vw",
  display: "flex",
  flexFlow: "column",
  paddingLeft: "48px",
  paddingRight: "48px",
  paddingTop: "48px",
  gap: "20px",
  maxHeight: "calc(100vh - 102px)",
});
export default ProductWrapper;
