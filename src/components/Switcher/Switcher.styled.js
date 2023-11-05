import styled from "styled-components";

export const ToggleWrapper = styled.div`
  width: 3.9rem;
  padding: 2px;
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
`;

export const ToggleLabel = styled.label`
  position: relative;
  width: 100%;
  height: 1.6rem;
  background-color: #272829;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const Slider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
  background-color: ${(p) => (p.checked ? "#dee2e6" : "initial")};
`;

export const SliderBefore = styled.div`
  position: absolute;
  top: 1px;
  left: 2px;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: #272829;
  transition: 0.3s;
  transform: translateX(${(p) => (p.checked ? "18px" : "0")});
  background-color: ${(p) => (p.checked ? "#272829" : "initial")};
  box-shadow: ${(p) =>
    p.checked ? "initial" : "inset 5px 0px 0px 0px #dee2e6"};
`;
