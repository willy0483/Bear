import styled from "styled-components";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { FeatureCard } from "../../Components/FeatureCard/FeatureCard";

const FeaturesSection = styled.section`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.grid.breakpoints.s}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "card1"
      "card2"
      "card3";
  }

  @media (min-width: ${({ theme }) => theme.grid.breakpoints.m}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "card1 card2"
      "card3 card3";
  }

  @media (min-width: ${({ theme }) => theme.grid.breakpoints.l}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "card1 card2 card3";
  }
`;

const StyledFeatureCard = styled(FeatureCard)`
  &:nth-child(1) {
    grid-area: card1;
  }
  &:nth-child(2) {
    grid-area: card2;
  }
  &:nth-child(3) {
    grid-area: card3;
  }
`;

export const HomePage = () => {
  return (
    <>
      <HeroSection
        title="Welcome to Our Website"
        subtitle="Your success is our priority"
      />
      <FeaturesSection>
        <StyledFeatureCard
          title="Feature One"
          description="Description of feature one. Highlight the benefits and key points."
        />
        <StyledFeatureCard
          title="Feature Two"
          description="Description of feature two. Highlight the benefits and key points."
        />
        <StyledFeatureCard
          title="Feature Three"
          description="Description of feature three. Highlight the benefits and key points."
        />
      </FeaturesSection>
    </>
  );
};
