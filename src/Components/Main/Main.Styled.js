import styled from "styled-components";

export const MainStyled = styled.main`
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};

  grid-area: main;
`;
