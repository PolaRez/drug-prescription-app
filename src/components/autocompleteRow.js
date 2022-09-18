export default function AutocompleteRow(props) {
  return (
    <li onClick={props.onClick} style={{ listStyleType: "none", marginBottom: 5 }}>
      {props.children}
    </li>
  );
}
