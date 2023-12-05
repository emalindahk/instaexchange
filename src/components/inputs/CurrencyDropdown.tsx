import useCurrencyStore from "../../store/useCurrencyStore";

const CurrencyDropdown = () => {
    const { currencyTableData } = useCurrencyStore();

  return (
    <div className="bg-pixel-blue border-pixel-blue font-display mt-2 inline-block rounded border bg-opacity-10 px-1.5 py-1 text-sm font-normal leading-5 md:mt-2 w-24">
      <select
        name=""
        id=""
        className="bg-transparent text-left text-xl md:text-2xl"
      >
        {currencyTableData.map((c) => (
          <option value="" className=" text-left text-3xl md:text-3xl">
            {c.ccy}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
