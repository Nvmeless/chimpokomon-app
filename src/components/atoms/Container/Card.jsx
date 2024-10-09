import React from "react";
import { styled } from "styled-components";

const StyledCard = styled.ul`
  background-color: ${(props) => props.backgroundColor ?? "purple"};
`;

const Card = (props) => {
  return <StyledCard {...props}></StyledCard>;
};

export default Card;
