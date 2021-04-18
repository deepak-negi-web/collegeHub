import React from "react";
import { SemipolarLoading } from "react-loadingg";
import { StyledWrapper } from "./styles";

const Loader = ({ ...props }) => {
  return (
    <StyledWrapper>
      <SemipolarLoading {...props} />
    </StyledWrapper>
  );
};

export default Loader;
