import { styled } from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.backgroundColor ?? "purple"};
`;

export default StyledContainer;
