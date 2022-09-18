import AutocompleteSearch from "./autocompleteSearch";
import Button from "./button";
import { SearchProvider } from "./searchContext";

export default function SearchAndAdd() {
  return (
    <div>
      <SearchProvider>
        <AutocompleteSearch />
        <Button> Add Drug </Button>
      </SearchProvider>
    </div>
  );
}
