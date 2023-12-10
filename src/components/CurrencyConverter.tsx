import { useState } from "react";
import CurrencyExchangePanel from "./CurrencyExchangePanel";
import CurrencySwapButton from "./buttons/CurrencySwapButton";
import InstaButton from "./buttons/InstaButton";

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex flex-col gap-x-1 gap-y-1">
        <CurrencyExchangePanel label="change"/>
        <CurrencySwapButton />
        <CurrencyExchangePanel label="get"/>
      </div>
      <InstaButton type="button" label="Exchange" action={() => {}} />
    </div>
  );
};

export default CurrencyConverter;
