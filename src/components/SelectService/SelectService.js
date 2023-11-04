import { InputTitle, InputWrapper } from "../InputField/Inputfield.styled";
import { Select } from "./SelectService.styled";

export default function SelectService({ tax, setTaxes }) {
  function taxesPercentage(e) {
    setTaxes(+e);
  }
  return (
    <InputWrapper>
      <InputTitle>How did you like the service?</InputTitle>
      <Select value={tax} onChange={(e) => taxesPercentage(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </Select>
    </InputWrapper>
  );
}
