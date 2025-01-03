import {
  FeatureCardWrapper,
  FeatureTitle,
  FeatureDescription,
} from "./FeatureCard.Styled";

export const FeatureCard = ({ title, description, className }) => (
  <FeatureCardWrapper className={className}>
    <FeatureTitle>{title}</FeatureTitle>
    <FeatureDescription>{description}</FeatureDescription>
  </FeatureCardWrapper>
);
