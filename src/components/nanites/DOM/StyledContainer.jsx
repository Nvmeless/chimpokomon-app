import { styled } from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
`;

export default StyledContainer;
