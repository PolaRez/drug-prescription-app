import { useContext, useEffect } from "react";
import { SelectedDrugsContext } from "./drugAppContext";
import { SearchContext } from "./searchContext";

export default function Button(props) {
  const { drugsData, interactionAlertData } = useContext(SelectedDrugsContext);
  const [selectedDrugs, setSelectedDrugs] = drugsData;
  const [, setInteractionPairsData] = interactionAlertData;
  const { searchData, selectedData } = useContext(SearchContext);
  const [, setSearchQuery] = searchData;
  const [selected, setSelcted] = selectedData;

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const idsArr = [];

    const getRxcuisResultes = async (ids) => {
      try {
        const response = await fetch(
          `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${ids}`,
          { signal }
        );
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        if (data.fullInteractionTypeGroup) {
          const [fullInteractionTypeGroupData] = data.fullInteractionTypeGroup;
          const { fullInteractionType } = fullInteractionTypeGroupData;
          setInteractionPairsData(fullInteractionType);
        } else {
          setInteractionPairsData([]);
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (selectedDrugs.length > 1) {
      selectedDrugs.forEach((element) => {
        idsArr.push(element.rxcuis.join("+"));
      });
      const str = idsArr.join("+");
      getRxcuisResultes(str);
    } else {
      setInteractionPairsData([]);
    }

    return () => {
      abortController.abort();
    };
  }, [selectedDrugs, setInteractionPairsData]);

  const handleOnClick = () => {
    if (selected) {
      setSelectedDrugs((prevVal) => [...prevVal, selected]);
      setSearchQuery("");
      setSelcted(null);
    }
  };

  return (
    <button
      onClick={handleOnClick}
      style={{
        width: 100,
        height: 50,
        backgroundColor: "lightBlue",
        border: 0,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      {props.children}
    </button>
  );
}
