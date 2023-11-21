import { useMemo, useState } from "react";
import { NodeViewer } from "./NodeViewer";
import { ExpandButton } from "./ExpandButton";

export default function TreeView({ obj }) {
  const [ifExpanded, setIfExpaned] = useState(true);
  const keys = useMemo(() => Object.keys(obj), [obj]);
  return (
    <div>
      root ({`${typeof obj}`})
      {keys.length ? (
        <>
          :{" "}
          <ExpandButton
            ifExpanded={ifExpanded}
            onClick={() => {
              setIfExpaned((b) => !b);
            }}
          />{" "}
          {ifExpanded ? <NodeViewer obj={obj} /> : null}
        </>
      ) : (
        "null"
      )}
    </div>
  );
}
