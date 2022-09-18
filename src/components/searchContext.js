import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelcted] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        searchData: [searchQuery, setSearchQuery],
        selectedData: [selected, setSelcted],
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
