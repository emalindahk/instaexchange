import { create } from "zustand";
import { Currency } from "../types";

interface CurrencyStore {
  currencyTableData: Currency[];
  editedValue: number;
  validationError: boolean;
  setCurrencyTableData: (data: Currency[]) => void;
  setEditedValue: (value: number) => void;
  validateEditedValue: (value: number) => void;
  updateTableData: (
    cell: "buy" | "sale",
    currency: string
  ) => void;
}

const useCurrencyStore = create<CurrencyStore>((set) => ({
  currencyTableData: [],
  editedValue: 0,
  validationError: false,
  setCurrencyTableData: (data) => set({ currencyTableData: data }),
  setEditedValue: (value) =>
    set({ editedValue: value, validationError: false }),
  validateEditedValue: ( newValue ) => {
    const { editedValue } = useCurrencyStore.getState();
    const min = editedValue - editedValue * 0.1;
    const max = editedValue + editedValue * 0.1;

    const isValid = newValue >= min && newValue <= max;
    set({ validationError: !isValid });
  },
  updateTableData: (cell, ccy) => {
    const { editedValue } = useCurrencyStore.getState();
    const { currencyTableData } = useCurrencyStore.getState();

    const updatedData = currencyTableData.map((currency) => {
      if (currency.ccy === ccy) {
        return { ...currency, [cell]: editedValue.toString() };
      }
      return currency;
    });
    console.log(updatedData)

    set({ currencyTableData: updatedData });
  }
}));

export default useCurrencyStore;