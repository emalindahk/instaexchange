import { ChangeEvent } from "react";
import useCurrencyExchangeStore from "../../store/useCurrencyExchangeStore";
import useCurrencyStore from "../../store/useCurrencyStore";
import { Currency } from "../../types";

const CurrencyDropdown = () => {
  const { currencyTableData } = useCurrencyStore();
  const { setFromCurrency } = useCurrencyExchangeStore();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedCurrency = currencyTableData.find(
      (c) => c.ccy === selectedValue
    );
    setFromCurrency(selectedCurrency as Currency);
  };

  return (
    <div className="bg-pixel-blue border-pixel-blue font-display mt-2 inline-block rounded border bg-opacity-10 px-1.5 py-1 text-sm font-normal leading-5 md:mt-2 w-24">
      <select
        name=""
        id=""
        className="bg-transparent text-left text-xl md:text-2xl focus:outline-none"
        onChange={handleChange}
      >
        {currencyTableData.map((c) => (
          <option key={c.ccy} value={c.ccy} className="text-left text-3xl md:text-3xl">
            {c.ccy}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
