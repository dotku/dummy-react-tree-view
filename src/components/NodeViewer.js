import { useState } from "react";
import { ExpandButton } from "./ExpandButton";

export function NodeViewer({ obj }) {
    const [ifExpanded, setIfExpaned] = useState(true);

    return (
        <ul className="ul">
            {Object.keys(obj).map((key) => {
                const type = typeof obj[key];
                if (["string", "number"].includes(type))
                    return (
                        <li key={key}>
                            {key} ({type}): {obj[key]}
                        </li>
                    );
                if (Array.isArray(obj[key]))
                    return (
                        <div key={key}>
                            <p>
                                {key} (array):{" "}
                                <ExpandButton
                                    ifExpanded={ifExpanded}
                                    onClick={() => {
                                        setIfExpaned((b) => !b);
                                    }} />
                            </p>
                            {ifExpanded ? (
                                <p>
                                    <NodeViewer obj={obj[key]} />
                                </p>
                            ) : null}
                        </div>
                    );
                if (typeof obj[key] === "object")
                    return <div>{key} ({type}): <NodeViewer obj={obj[key]} key={key}/></div>;
            })}
        </ul>
    );
}
