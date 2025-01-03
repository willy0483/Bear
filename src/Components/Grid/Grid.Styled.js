import styled from "styled-components";

export const GridStyled = styled.div`
  display: grid;
  height: 100vh;

  grid-template-rows: ${({ theme }) => theme.grid.layout.mobile.rows};
  grid-template-columns: ${({ theme }) => theme.grid.layout.mobile.columns};
  grid-template-areas: ${({ theme }) => theme.grid.layout.mobile.areas};

  @media (min-width: ${({ theme }) => theme.grid.breakpoints.m}) {
    grid-template-rows: ${({ theme }) => theme.grid.layout.tablet.rows};
    grid-template-columns: ${({ theme }) => theme.grid.layout.tablet.columns};
    grid-template-areas: ${({ theme }) => theme.grid.layout.tablet.areas};
  }

  @media (min-width: ${({ theme }) => theme.grid.breakpoints.l}) {
    grid-template-rows: ${({ theme }) => theme.grid.layout.desktop.rows};
    grid-template-columns: ${({ theme }) => theme.grid.layout.desktop.columns};
    grid-template-areas: ${({ theme }) => theme.grid.layout.desktop.areas};
  }
`;
