import DatePicker from "./datePicker";
import DeleteRowButton from "./deleteRowButton";

export default function SelectedDrugRow(props) {
  const { deleteRow } = props;
  return (
    <tr key={props.children}>
      <td style={{ textAlign: "center" }}>{props.children}</td>
      <td><DatePicker /></td>
      <td><DeleteRowButton deleteRow={deleteRow} /></td>
    </tr>
  );
}
