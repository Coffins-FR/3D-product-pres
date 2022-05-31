import { styled } from "@stitches/react";
import { Link } from "react-router-dom";

export const NavWrapper = styled("nav", {
  height: "6rem",
  background: "White",
  position: "absolute",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: 10,
  padding: 0,
  margin: 0,
});

export const NavElement = styled("ul", {
  width: "100%",
  height: "100%",
  listStyle: "none",
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-around",
  margin: 0,
  padding: 0,
  alignItems: "center",
});

export const LinkWrapper = styled("li", {
  color: "Black",
  textDecoration: "none",
  width: "100%",
  height: "100%",
});
export const Links = styled(Link, {
  textAlign: "center",
  textDecoration: "none",
  color: "Black",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "36px",
  fontFamily: "Poppins, sans-serif",
  textTransform: "uppercase",
  fontWeight: "bold",
  "&:hover": {
    background: "Orange",
    color: "White",
    transition: "background ease-in-out 500ms, color ease-in-out 500ms",
  },
});
