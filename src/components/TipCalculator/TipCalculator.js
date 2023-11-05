import { useState } from "react";
import InputField from "../InputField/InputField";
import SelectService from "../SelectService/SelectService";
import TotalAmount from "../TotalAmount/TotalAmount";
import ResetButton from "../ResetButton/ResetButton";
import { InputContainer } from "./TipCalculator.styled";

export default function TipCalculator() {
  const [price, setPrice] = useState("");
  const [tax, setTaxes] = useState(0);

  const tip = price * (tax / 100);

  const totalPrice = price + tip;

  function resetAll() {
    setPrice("");
    setTaxes(0);
  }
  return (
    <>
      <InputContainer>
        <InputField price={price} setPrice={setPrice} />
        <SelectService tax={tax} setTaxes={setTaxes} />
      </InputContainer>
      {price > 0 && (
        <InputContainer>
          <TotalAmount
            totalPrice={totalPrice}
            tip={tip.toFixed(2)}
            price={price}
            tax={tax}
          />
          <ResetButton onRestBtn={resetAll} price={price} />
        </InputContainer>
      )}
    </>
  );
}
