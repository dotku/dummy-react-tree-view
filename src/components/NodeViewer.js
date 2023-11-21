import { useState } from "react";
import { ExpandButton } from "./ExpandButton";

export function NodeViewer({ obj }) {
  return (
    <div style={{ marginLeft: 20, marginBottom: 8 }}>
      {Object.keys(obj).map((key) => {
        const type = typeof obj[key];
        switch (type) {
          case "string": // break-through
          case "number": // break-through
          case "boolean": // break-through
          case "bigint": // break-through
          case "undefined":
            return (
              <div key={key} className="raw">
                - {key} ({type}): {obj[key]}
              </div>
            );
          case "object":
            if (obj[key] === null) return <div key={key}>{key} (null)</div>;
            // @note also handle the array case here
            return (
              <ObjectNode propKey={key} key={key} obj={obj[key]} type={type} />
            );
          default:
            // @note we should not handle function, symbol, etc as they are not JSON type.
            console.error("unknown type", type);
            return null;
        }
      })}
    </div>
  );
}

function ObjectNode({ obj, propKey, type }) {
  const [ifExpanded, setIfExpaned] = useState(true);
  return (
    <>
      <div style={{ marginBottom: 20, marginTop: 12 }}>
        {propKey} ({type}):{" "}
        <ExpandButton
          ifExpanded={ifExpanded}
          onClick={() => {
            setIfExpaned((b) => !b);
          }}
        />
      </div>
      {ifExpanded ? <NodeViewer obj={obj} /> : null}
    </>
  );
}
