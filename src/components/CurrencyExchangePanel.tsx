import { ChangeEvent } from "react";
import useCurrencyExchangeStore from "../store/useCurrencyExchangeStore";
import CurrencyDropdown from "./inputs/CurrencyDropdown";

interface CurrencyExchangePanelProps {
  label: "change" | "get";
  base?: boolean;
}

const CurrencyExchangePanel: React.FC<CurrencyExchangePanelProps> = ({
  label,
}) => {

  const {baseCurrency, exchangeCurrency, amount, setAmount, exchangedAmount} = useCurrencyExchangeStore();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
    exchangeCurrency();
  };

  return (
    <div className="flex-1">
      <div className="mb-1">
        <button className="dark:bg-new-black bg-white group relative z-0 h-40 w-full rounded-md p-0 shadow-sm disabled:opacity-100 md:h-60">
          <div className="dark:border-white border-new-black dark:group-focus:shadow-outline-white group-focus:shadow-outline-new-black h-full rounded-md border border-b-[6px]">
            <div
              className="h-full w-[99%]"
              aria-live="polite"
              aria-busy="false"
            >
              <div
                className="dark:border-r-darker-gray border-r-new-black dark:bg-new-black
                  dark:text-white bg-white text-new-black 'place-items-center' mx-2 flex h-full
                  w-[95%] justify-center py-0 pl-2 pr-2 text-lg"
              >
                <div className="flex place-items-center gap-2">
                  <div className="pl-2">
                    <div className="flex">
                      <div className="flex flex-col items-start">
                        <span
                          id="action-label"
                          className="font-display text-new-black dark:text-smoke block text-left text-sm font-medium pb-2 md:pb-2"
                        >
                          You {label}
                        </span>
                        <div className="flex space-x-4">
                          <div className="bg-pixel-blue border-pixel-blue font-display mt-2 inline-block rounded border-b-2 bg-opacity-10 px-1.5 py-1 text-sm font-normal leading-5 w-20">
                            <input
                              type="number"
                              className="remove-arrow bg-transparent focus:outline-none w-24 mt-1 placeholder:text-smoke text-2xl"
                              placeholder="100"
                              value={exchangedAmount ? exchangedAmount.toString() : amount.toString()}
                              onChange={handleChange}
                            />
                          </div>
                          {baseCurrency && (
                            <div className="text flex w-auto items-center pr-2 text-left text-3xl md:text-3xl">
                              <span className="mr-2 font-bold">UAH</span>
                            </div>
                          )}
                          {!baseCurrency && (
                            <CurrencyDropdown />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CurrencyExchangePanel;
