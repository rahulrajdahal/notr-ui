import DebounceInput from "@rahulrajdahal/notr-debounceInput";
import React from "react";

export default function DebounceInputContainer() {
  const ref = React.useRef();
  const [value, setValue] = React.useState("");
  const [delay, setDelay] = React.useState(500);

  return (
    <div>
      <div
        style={{
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minWidth: "50rem",
        }}
      >
        <DebounceInput
          value={value}
          onChange={(v) => setValue(v)}
          debounce={delay}
          placeholder="Notr Debounce Input"
        />
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <label htmlFor="labelProps">Value </label>
        <input type="text" value={value} />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <label htmlFor="labelProps">Debounce </label>
        <input
          type="number"
          placeholder="500"
          onChange={(e) => setDelay(e.target.value)}
        />
      </div>
    </div>
  );
}
