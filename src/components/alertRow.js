export default function AlertRowdescription(props) {
    return (
        <div style={{border: 1, borderStyle: 'solid', backgroundColor: 'lightBlue', padding: 20, marginBottom: 10}}>
            <span style={{padding: 20}}>{props.children}</span>
        </div>
    );
}