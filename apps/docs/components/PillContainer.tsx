import { CheckSquare } from "@meistericons/react";
import { colors } from "@rahulrajdahal/notr-core";
import Pill from "@rahulrajdahal/notr-pill";
import React from "react";

export default function PillContainer() {
  const [text, setText] = React.useState("Complete");
  const [count, setCount] = React.useState(3);
  const [background, setBackground] = React.useState(colors.green[400]);
  const [color, setColor] = React.useState(colors.green[600]);

  return (
    <div>
      <div
        style={{
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pill
          background={background}
          color={color}
          icon={<CheckSquare />}
          text={text}
          count={count}
        />
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          defaultValue={text}
          placeholder="string"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <label htmlFor="count">Count</label>
        <input
          type="number"
          defaultValue={count}
          placeholder="number"
          onChange={(e) => setCount(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
        <input
          type="color"
          defaultValue={background}
          style={{
            width: "2rem",
            height: "2rem",
          }}
          onChange={(e) => setBackground(e.target.value)}
        />
        <label
          htmlFor=""
          style={{
            fontSize: "0.875rem",
          }}
        >
          Background
        </label>
      </div>
      <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
        <input
          style={{
            width: "2rem",
            height: "2rem",
          }}
          defaultValue={color}
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />
        <label htmlFor="" style={{ fontSize: "0.875rem" }}>
          color
        </label>
      </div>
    </div>
  );
}
