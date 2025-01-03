import styled from "styled-components";

export const FeatureCardWrapper = styled.div`
  background: ${({ theme }) => theme.color.secondary};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.accent};
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
`;
