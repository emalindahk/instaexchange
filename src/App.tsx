import CurrencyTable from "./components/CurrencyTable";
import Header from "./components/Header";
import CurrencyConverter from "./components/CurrencyConverter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto font-lato space-y-10 max-w-7xl min-h-screen">
      <Header />
      <div className="grid grid-cols-[2fr_1fr] px-10 lg:px-0">
        <CurrencyTable />
        <CurrencyConverter />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
