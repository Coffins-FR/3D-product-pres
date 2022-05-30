import { styled } from "@stitches/react";

export const TitleStyle = styled("h1", {
  margin: 0,
  padding: 0,
  "font-size": "48px",
  position: "absolute",
  top: "20px",
  left: "20px",
  zIndex: "10",
  "text-transform": "capitalize",
});
function Title({ children }) {
  return <TitleStyle>{children}</TitleStyle>;
}

export default Title;
