import { useContext } from "react";
import AutocompleteRow from "./autocompleteRow";
import { SearchContext } from "./searchContext";

export default function AutocompleteOptionsList({ closeAndClear, options }) {
  const { searchData, selectedData } = useContext(SearchContext);
  const [, setSearchQuery] = searchData;
  const [, setSelcted] = selectedData;

  const heandleOnCilck = (event) => {
    setSearchQuery(event.target.textContent);
    const selectedOption = options.find((element) => {
      const val = event.target.textContent;
      return element.name === val;
    });
    setSelcted(selectedOption);
    closeAndClear();
  };

  const listRow = (option) => {
    return (
      <AutocompleteRow key={option.name} onClick={heandleOnCilck}>
        {option.name}
      </AutocompleteRow>
    );
  };

  return (
    <div>
      <ul
        style={{
          textAlign: "start",
          overflow: "hidden",
          overflowY: "scroll",
          height: 150,
        }}
      >
        {options.map(listRow)}
      </ul>
    </div>
  );
}
