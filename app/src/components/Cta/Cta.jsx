import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

const Button = styled("button", {
  padding: "20px",
  fontSize: "16px",
  borderRadius: "4px",
  textAlign: "center",
  border: "none",
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    width: {
      quarter: {
        width: "15%",
      },
      full: {
        width: "100%",
      },
    },
    color: {
      default: {
        backgroundColor: blackA.blackA12,
        color: "white",
        svg: {
          fill: "white",
        },
        "&:hover": {
          backgroundColor: blackA.blackA11,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        border: `1px solid ${blackA.blackA12}`,
        color: blackA.blackA12,
        svg: {
          stroke: blackA.blackA12,
        },
        "&:hover": {
          color: "white",
          svg: {
            stroke: "white",
          },
          backgroundColor: blackA.blackA11,
        },
      },
    },
  },
});

const Cta = ({ children, variant, ...props }) => {
  return (
    <Button color={variant} {...props}>
      {children}
    </Button>
  );
};

export default Cta;
