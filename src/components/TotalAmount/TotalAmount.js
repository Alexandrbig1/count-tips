import { TotalSpan, TotalTitle, Wrap } from "./TotalAmount.styled";

export default function TotalAmount({ tip, price, totalPrice }) {
  return (
    <Wrap>
      <TotalTitle>
        <TotalSpan>You pay:</TotalSpan> ${totalPrice.toFixed(2)}{" "}
      </TotalTitle>
      <TotalSpan>
        (${price} + ${tip} tip)
      </TotalSpan>
    </Wrap>
  );
}
