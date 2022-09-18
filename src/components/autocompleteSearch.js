import { useState } from "react";
import AutocompleteOptionsList from "./autocompleteOptionsList";
import SearchInput from "./searchInput";

export default function AutocompleteSearch() {
  const [options, setOptions] = useState([]);
  const [show, setShow] = useState(false);

  const closeAndClear = () => {
    setShow(false);
    setOptions([]);
  };

  return (
    <div
      style={{ maxWidth: "50%", margin: "0 auto", padding: 20, height: 200 }}
    >
      <SearchInput
        closeAndClear={closeAndClear}
        setOptions={setOptions}
        show={show}
        setShow={setShow}
      />
      <AutocompleteOptionsList
        closeAndClear={closeAndClear}
        options={options}
      />
    </div>
  );
}
