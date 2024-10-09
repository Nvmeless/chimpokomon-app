import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  color: ${(props) => props.theme.colors.primary};
`;

export default StyledButton;
