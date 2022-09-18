import "./App.css";
import { DrugAppProvider } from "./components/drugAppContext";
import ListOfSelectedDrugs from "./components/listOfSelectedDrugs";
import SearchAndAdd from "./components/searchAndAdd";

function App() {
  return (
    <div className="App">
      <DrugAppProvider>
        <SearchAndAdd />
        <ListOfSelectedDrugs />
      </DrugAppProvider>
    </div>
  );
}

export default App;
