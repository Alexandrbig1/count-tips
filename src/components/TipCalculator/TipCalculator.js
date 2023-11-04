import { useState } from "react";
import InputField from "../InputField/InputField";
import SelectService from "../SelectService/SelectService";
import TotalAmount from "../TotalAmount/TotalAmount";
import ResetButton from "../ResetButton/ResetButton";

export default function TipCalculator() {
  const [price, setPrice] = useState("");
  const [tax, setTaxes] = useState(0);
  const [taxFriend, setTaxesFriend] = useState(0);

  const tip = price * ((tax + taxFriend) / 2 / 100);

  function resetAll() {
    setPrice("");
    setTaxes(0);
    setTaxesFriend(0);
  }
  return (
    <>
      <InputField price={price} setPrice={setPrice} />
      <SelectService tax={tax} setTaxes={setTaxes} />
      {price > 0 && (
        <>
          <TotalAmount
            tip={tip}
            price={price}
            tax={tax}
            taxFriend={taxFriend}
          />
          <ResetButton onRestBtn={resetAll} price={price} />
        </>
      )}
    </>
  );
}
