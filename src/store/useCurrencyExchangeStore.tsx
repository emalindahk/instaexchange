import { create } from "zustand";
import { Currency } from "../types";

interface CurrencyExchangeStore {
  fromCurrency: Currency | null;
  toCurrency: Currency | null;
  amount: number;
  exchangedAmount: number | null;
  setFromCurrency: (currency: Currency) => void;
  setToCurrency: (currency: Currency) => void;
  setAmount: (amount: number) => void;
  exchangeCurrency: () => void;
  swapCurrencies: () => void;
}

const useCurrencyExchangeStore = create<CurrencyExchangeStore>(
  (set) => ({
    fromCurrency: null,
    toCurrency: null,
    amount: 0,
    exchangedAmount: null,
    setFromCurrency: (currency) => set({ fromCurrency: currency }),
    setToCurrency: (currency) => set({ toCurrency: currency }),
    setAmount: (amount) => set({ amount }),
    exchangeCurrency: () => {
      const { fromCurrency, toCurrency, amount } =
        useCurrencyExchangeStore.getState();

      if (fromCurrency && toCurrency) {
        // Implement currency exchange logic here
        // Calculate exchanged amount based on exchange rates
        const exchangeRate =
          parseFloat(toCurrency.buy) / parseFloat(fromCurrency.buy);
        const exchangedAmount = amount * exchangeRate;

        set({ exchangedAmount });
      }
    },
    swapCurrencies: () => {
      const { fromCurrency, toCurrency } = useCurrencyExchangeStore.getState();
      set({ fromCurrency: toCurrency, toCurrency: fromCurrency });
    },
  })
);

export default useCurrencyExchangeStore;
