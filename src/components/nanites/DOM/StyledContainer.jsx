import { styled } from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.containers.secondary};
  color: ${(props) => props.theme.colors.containers.primary};
`;
// ${(props) => props.theme.colors.containers.secondary}
export default StyledContainer;
