import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
`;

export default StyledButton;
