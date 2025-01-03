import styled from "styled-components";
import image from "../../Assets/canyon-1740973_1920.jpg";

export const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  padding: 2rem;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;
