import { useContext, useEffect } from "react";
import { SearchContext } from "./searchContext";

export default function SearchInput({
  setOptions,
  show,
  setShow,
  closeAndClear,
}) {
  const { searchData } = useContext(SearchContext);
  const [searchQuery, setSearchQuery] = searchData;

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getSearchResultes = async () => {
      try {
        const response = await fetch(
          `https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${searchQuery}&ef=RXCUIS`,
          { signal }
        );
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        const [, autocompleteOptions, rxcuisData] = data;
        const { RXCUIS } = rxcuisData;
        const optionsData = autocompleteOptions.map((name, index) => ({
          name,
          rxcuis: RXCUIS[index],
        }));
        setOptions(optionsData);
      } catch (e) {
        console.log(e);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      show && getSearchResultes();
    }, 1000);

    return () => {
      clearTimeout(delayDebounceFn);
      abortController.abort();
    };
  }, [searchQuery, setOptions, show]);

  const handleOnchange = (event) => {
    setSearchQuery(() => event.target.value);
    event.target.value ? setShow(true) : closeAndClear();
  };

  return (
    <input
      value={searchQuery}
      onChange={handleOnchange}
      style={{ width: "100%", height: 35 }}
      placeholder="Search..."
    />
  );
}
