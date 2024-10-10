import { styled } from "styled-components";

const StyledButton = styled.button`
  color:  ${(props) => props.theme.colors.containers.secondary}
  background-color: ${(props) => props.theme.colors.containers.primary};
`;

export default StyledButton;
