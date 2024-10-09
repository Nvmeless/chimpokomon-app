import { styled } from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  color: ${(props) => props.theme.colors.primary}; 
`;

export default StyledContainer;
