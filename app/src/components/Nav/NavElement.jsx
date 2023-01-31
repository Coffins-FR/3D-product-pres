import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import { blackA } from "@radix-ui/colors";

export const NavWrapper = styled("nav", {
  borderBottom: `1px solid ${blackA.blackA6}`,
  background: "white",
  color: "#1A1A1A",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "102px",
  margin: 0,
  paddingLeft: "24px",
  paddingRight: "24px",
});
export const NavElementWrapper = styled("div", {
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "48px",
});

export const NavElement = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  margin: 0,
  padding: 0,
});

export const LinkWrapper = styled("li", {
  textDecoration: "none",
});

export const Links = styled(Link, {
  textDecoration: "none",
  color: "#1A1A1A",
  fontSize: "18px",
  fontFamily: "Poppins, sans-serif",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const LogoWrapper = styled("div", {
  color: "#1A1A1A",
  fontSize: "36px",
  fontFamily: "Poppins, sans-serif",
  textTransform: "uppercase",
});
