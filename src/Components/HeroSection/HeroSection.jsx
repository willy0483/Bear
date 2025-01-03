import {
  HeroSectionWrapper,
  HeroTitle,
  HeroSubtitle,
} from "./HeroSection.Styled";

export const HeroSection = ({ title, subtitle }) => (
  <HeroSectionWrapper>
    <HeroTitle>{title}</HeroTitle>
    <HeroSubtitle>{subtitle}</HeroSubtitle>
  </HeroSectionWrapper>
);
