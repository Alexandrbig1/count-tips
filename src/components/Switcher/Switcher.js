import { useState } from "react";
import {
  ToggleWrapper,
  ToggleLabel,
  ToggleInput,
  Slider,
  SliderBefore,
} from "./Switcher.styled";

export default function Switcher({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  function onInputHandler() {
    onChange();
    setIsChecked(!isChecked);
  }

  return (
    <ToggleWrapper>
      <ToggleLabel>
        <ToggleInput
          type="checkbox"
          checked={isChecked}
          onChange={onInputHandler}
        />
        <Slider checked={isChecked} />
        <SliderBefore checked={isChecked} />
      </ToggleLabel>
    </ToggleWrapper>
  );
}
