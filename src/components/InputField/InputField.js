import { Input, InputTitle, InputWrapper } from "./Inputfield.styled";

export default function InputField({ price, setPrice }) {
  function receivingPrice(e) {
    setPrice(+e);
  }

  return (
    <InputWrapper>
      <InputTitle>How much was the bill?</InputTitle>
      <Input
        placeholder="Bill value"
        type="text"
        value={price}
        onChange={(e) => receivingPrice(e.target.value)}
      />
    </InputWrapper>
  );
}
