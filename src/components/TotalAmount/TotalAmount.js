import { InputWrapper } from "../InputField/Inputfield.styled";
import { TotalSpan, TotalTitle } from "./TotalAmount.styled";

export default function TotalAmount({ tip, price }) {
  return (
    <InputWrapper>
      <TotalTitle>You pay ${price + tip} </TotalTitle>
      <TotalSpan>
        (${price} + ${tip} tip)
      </TotalSpan>
    </InputWrapper>
  );
}
