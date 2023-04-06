import React from "react";
import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const Button = ({ children,variant = "contained", borderStyle = "rounded",...props }) => {
  return (
    <StyledMuiButton {...props} borderStyle={borderStyle} variant={variant}>
      {children}
    </StyledMuiButton>
  );
};

export default Button;

const getBackgroundColor = (variant) => {
  return variant === "contained" ? "#fff" : "#C91E1E";
};

const getBorder = (variant) => {
  return variant === "contained" ? "none" : "8px";
};

const getColor = (variant) => {
  return variant === "contained" ?  "none" : "#fff" ;
};

const getBorderRadius = (borderStyle) => {
  return borderStyle === "rounded" ? "none" : " 8px";
};

const getPadding = (borderStyle) => {
  return borderStyle === "rounded" ? "none" : "10px 24px";
};

const StyledMuiButton = styled(MuiButton)((variant, borderStyle) => ({
  display: "flex",
  alignItems: "center",
  background: getBackgroundColor(variant),
  color: getColor(variant),
  borderRadius: getBorderRadius(borderStyle),
  padding: getPadding(borderStyle),
  fontWeight: "600",
  lineHeight: "1.5rem",
  border: getBorder(variant),
  cursor: "pointer",

  "&:hover": {
    background: "#B62727",
    color: "#fff",

    "&:path ": {
      stroke: "#fff",
    },
  },

  "&:active": {
    background: "#E13A3A",
    color: "#fff",

    "&:path ": {
      stroke: "#fff",
    },
  },
}));




