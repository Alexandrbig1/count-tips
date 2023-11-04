import { ResetBtn, Wrapper } from "./ResetButton.styled";

export default function ResetButton({ onRestBtn }) {
  return (
    <Wrapper>
      <ResetBtn onClick={onRestBtn}>Reset</ResetBtn>
    </Wrapper>
  );
}
