import { createContext, useState } from "react";

export const SelectedDrugsContext = createContext();

export const DrugAppProvider = (props) => {
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [interactionPairsData, setInteractionPairsData] = useState([]);

  return (
    <SelectedDrugsContext.Provider
      value={{
        drugsData: [selectedDrugs, setSelectedDrugs],
        interactionAlertData: [interactionPairsData, setInteractionPairsData],
      }}
    >
      {props.children}
    </SelectedDrugsContext.Provider>
  );
};
