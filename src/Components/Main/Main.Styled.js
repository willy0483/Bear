import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 2rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};

  grid-area: main;
`;
