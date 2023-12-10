import { create } from "zustand";
import { Currency } from "../types";

interface CurrencyExchangeStore {
  baseCurrency: boolean;
  fromCurrency: Currency | null;
  toCurrency: Currency | null;
  amount: number;
  exchangedAmount: number | null;
  setBaseCurrency: () => void;
  setFromCurrency: (currency: Currency) => void;
  setToCurrency: (currency: Currency) => void;
  setAmount: (amount: number) => void;
  exchangeCurrency: () => void;
  swapCurrencies: () => void;
}

const useCurrencyExchangeStore = create<CurrencyExchangeStore>(
  (set) => ({
    baseCurrency: true,
    fromCurrency: null,
    toCurrency: null,
    amount: 0,
    exchangedAmount: null,
    setBaseCurrency: () => set((state) => ({baseCurrency: !state.baseCurrency})),
    setFromCurrency: (currency) => set({ fromCurrency: currency }),
    setToCurrency: (currency) => set({ toCurrency: currency }),
    setAmount: (amount) => set({ amount }),
    exchangeCurrency: () => {
      const { fromCurrency, toCurrency, amount } =
        useCurrencyExchangeStore.getState();
        console.log('from currency', fromCurrency)
      
        // const fromCurrencyRate = parseFloat(fromCurrency?.buy);
        // const toCurrencyRate = parseFloat(toCurrency.sale);

        // const exchangedAmount = amount * (toCurrencyRate / fromCurrencyRate);
        // console.log('exchangedAmount',exchangedAmount)

        // set({ exchangedAmount });
    },
    swapCurrencies: () => {
      const { fromCurrency, toCurrency } = useCurrencyExchangeStore.getState();
      set({ fromCurrency: toCurrency, toCurrency: fromCurrency });
    },
  })
);

export default useCurrencyExchangeStore;
