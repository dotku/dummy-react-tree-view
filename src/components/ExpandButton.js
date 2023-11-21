
export function ExpandButton({ ifExpanded, onClick }) {
    return <button onClick={onClick}>{ifExpanded ? "+" : "-"}</button>;
}
