
export function ExpandButton({ ifExpanded, onClick }) {
    return <button onClick={onClick} style={{marginLeft: 12}}>{ifExpanded ? "-" : "+"}</button>;
}
