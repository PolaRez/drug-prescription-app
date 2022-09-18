import CancelIcon from "@mui/icons-material/Cancel";

export default function DeleteRowButton({ deleteRow }) {
  return (
    <button
      onClick={deleteRow}
      style={{ backgroundColor: "transparent", border: 0 }}
    >
      <CancelIcon fontSize="small" />
    </button>
  );
}
