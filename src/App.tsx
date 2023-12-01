import CurrencyTable from "./components/CurrencyTable";
import Header from "./components/Header";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="mx-auto font-lato space-y-20 max-w-7xl">
      <Header />
      <div className="grid grid-cols-[2fr_1fr]">
        <CurrencyTable />
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
