import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

const Wrapper = styled("div", {
  display: "flex",
  flexFlow: "column",
  gap: "12px",
});

const Title = styled("h1", {
  fontSize: "20px",
  color: blackA.blackA12,
  fontWeight: "bold",
  margin: 0,
});

const Description = styled("p", {
  fontSize: "14px",
  color: blackA.blackA11,
  margin: 0,
});

const Price = styled("p", {
  fontSize: "22px",
  color: blackA.blackA12,
  margin: 0,
});

const ProductHeader = ({ title, description, price }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </Wrapper>
  );
};

export default ProductHeader;
