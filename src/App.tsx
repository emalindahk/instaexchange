import CurrencyTable from "./components/CurrencyTable";
import ExchangeCalculator from "./components/CurrencyConverter";

function App() {
  return (
    <div className="font-lato">
      <header className="text-3xl text-cyan-800 font-mono p-4 w-full text-left border-b-2 shadow-sm">
        Insta Exchange
      </header>
      <CurrencyTable/>
      <ExchangeCalculator/>
    </div>
  );
}

export default App;
