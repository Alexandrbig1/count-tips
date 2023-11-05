import styled from "styled-components";

export const TotalTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 120%;
  /* text-transform: uppercase; */
  color: ${(p) => p.theme.colors.textColor};
`;

export const TotalSpan = styled.span`
  font-family: "Lato", sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 120%;
  /* text-transform: uppercase; */
  color: ${(p) => p.theme.colors.textColor};
`;

export const Wrap = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
