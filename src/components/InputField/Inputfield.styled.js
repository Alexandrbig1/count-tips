import styled from "styled-components";

export const InputWrapper = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.h3`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: 20rem;
  background-color: ${(p) => p.theme.colors.inputColor};
  color: ${(p) => p.theme.colors.textColor};
  width: 24rem;

  &::placeholder {
    color: ${(p) => p.theme.colors.textColor};
  }
`;
