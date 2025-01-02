import { ContainerStyled } from "./Container.Styled";

export const Container = ({ children, width }) => {
  return (
    <ContainerStyled style={(width = { width })}>{children}</ContainerStyled>
  );
};
