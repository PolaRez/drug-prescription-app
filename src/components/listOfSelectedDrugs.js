import { useContext, useEffect, useState } from "react";
import AlertRowdescription from "./alertRow";
import { SelectedDrugsContext } from "./drugAppContext";
import SelectedDrugRow from "./selectedDrugRow";

export default function ListOfSelectedDrugs() {
  const { drugsData, interactionAlertData } = useContext(SelectedDrugsContext);
  const [selectedDrugs, setSelectedDrugs] = drugsData;
  const [interactionPairsData] = interactionAlertData;
  const [alertDescriptionsArray, setAlertDescriptionsArray] = useState([]);

  const deleteRow = (drugIndex) => {
    const arrToRemove = [...selectedDrugs];
    arrToRemove.splice(drugIndex, 1);
    setSelectedDrugs(arrToRemove);
  };

  const alertRow = (description) => {
    return <AlertRowdescription key={description}>{description}</AlertRowdescription>;
  };

  useEffect(() => {
    const interactionsArr = interactionPairsData.map((element, index) => {
      const interactionPair = element.interactionPair;
      const currentPairData = interactionPair[0];
      const currentDesc = currentPairData.description;
      return currentDesc;
    });
    const uniqueAlerts = [...new Set(interactionsArr)];
    setAlertDescriptionsArray(uniqueAlerts);
  }, [interactionPairsData]);

  return (
    <div
      style={{
        padding: 20,
        maxWidth: "50%",
        margin: "0 auto",
      }}
    >
      <table style={{ backgroundColor: "lightgrey", width: "100%" }}>
        <tbody>
          {selectedDrugs.length > 0 &&
            selectedDrugs.map((item, index) => {
              return (
                <SelectedDrugRow
                  key={item.name}
                  index={index}
                  deleteRow={() => deleteRow(index)}
                >
                  {item.name}
                </SelectedDrugRow>
              );
            })}
        </tbody>
      </table>
      <div style={{marginTop: 20}}>{alertDescriptionsArray.map(alertRow)}</div>
    </div>
  );
}
