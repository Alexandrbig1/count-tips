import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ResetBtn = styled.button`
  padding: 0.8rem 2.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #da1212;
  border-radius: 8px;
  color: ${(p) => p.theme.colors.white};
  transition: 0.3s;
  &:hover {
    background-color: #d2001a;
  }
`;
