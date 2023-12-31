import useSWR from "swr";
import EditableCurrencyCell from "./EditableCurrencyCell";
import { Key, useEffect } from "react";
import { Currency } from "../types";
import useCurrencyStore from "../store/useCurrencyStore";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const testData = [
  { ccy: "CHF", base_ccy: "UAH", buy: "40.79370", sale: "40.79370" },
  { ccy: "CZK", base_ccy: "UAH", buy: "1.60990", sale: "1.60990" },
  { ccy: "GBP", base_ccy: "UAH", buy: "45.18820", sale: "45.18820" },
  { ccy: "ILS", base_ccy: "UAH", buy: "9.71310", sale: "9.71310" },
  { ccy: "JPY", base_ccy: "UAH", buy: "0.24425", sale: "0.24425" },
  { ccy: "NOK", base_ccy: "UAH", buy: "3.38160", sale: "3.38160" },
  { ccy: "PLZ", base_ccy: "UAH", buy: "9.04070", sale: "9.04070" },
  { ccy: "SEK", base_ccy: "UAH", buy: "3.45990", sale: "3.45990" },
];

const CurrencyTable = () => {
  const { data, error } = useSWR(process.env.REACT_APP_API_URL, fetcher);
  const { currencyTableData, setCurrencyTableData } = useCurrencyStore();

  useEffect(() => {
    if(data){
      setCurrencyTableData(data);
    } else {
      setCurrencyTableData(testData);
    }
  },[data, setCurrencyTableData])
 
  if (error) return <div className="text-white">Error loading data</div>;
  if (!currencyTableData) return <div>Loading...</div>;
  
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 border-b dark:border-darker-gray border-smoke">
                <thead>
                  <tr className="trow w-full rounded-md p-1 font-light grid grid-cols-3">
                    <th
                      scope="col"
                      className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-300"
                    >
                      Currency
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-300"
                    >
                      Buy
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-base font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-300"
                    >
                      Sale
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200  dark:divide-gray-700">
                  {currencyTableData.map((c: Currency, index: Key) => (
                    <tr
                      className="trow left-0 opacity-[1] group cursor-pointer grid grid-cols-3"
                      key={index}
                    >
                      <td className="py-4 px-6 text-base font-mono text-gray-900 whitespace-nowrap dark:text-gray-300 cursor-default">
                        {c.ccy} / {c.base_ccy}
                      </td>
                      <td className="flex space-x-2 w-[1/3] py-4 px-6 text-base font-medium text-gray-500 whitespace-nowrap dark:text-gray-300 cursor-pointer">
                        <EditableCurrencyCell
                          value={parseFloat(c.buy)}
                          cell="buy"
                          ccy={c.ccy}
                        />
                      </td>
                      <td className="py-4 px-6 text-base font-medium text-gray-900 whitespace-nowrap dark:text-gray-300 cursor-pointer">
                        <EditableCurrencyCell
                          value={parseFloat(c.sale)}
                          cell="sale"
                          ccy={c.ccy}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyTable;
