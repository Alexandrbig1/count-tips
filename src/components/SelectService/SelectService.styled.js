import styled from "styled-components";

export const Select = styled.select`
  padding: 0.8rem 1.2rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: 20rem;
  background-color: ${(p) => p.theme.colors.inputColor};
  color: ${(p) => p.theme.colors.textColor};
  width: 24rem;
`;
