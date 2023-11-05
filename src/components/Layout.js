import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 700px;
  height: 400px;
  background-color: ${(p) => p.theme.colors.container};
  border-radius: 8px;
  padding: 2.4rem;
`;
