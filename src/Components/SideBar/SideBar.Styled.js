import styled from "styled-components";

export const SideBarStyle = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};

  grid-area: sidebar;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: ${(props) => props.theme.color.text};
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
