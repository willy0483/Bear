import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};

  grid-area: footer;

  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .social-media {
      display: flex;
      gap: 1rem;

      a {
        color: ${(props) => props.theme.color.text};
        text-decoration: none;
        font-size: 1.5rem;

        &:hover {
          color: ${(props) => props.theme.color.accent};
        }
      }
    }
  }
`;
