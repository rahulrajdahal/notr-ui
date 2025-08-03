import Button from "@rahulrajdahal/notr-button";
import { colors } from "@rahulrajdahal/notr-core";
import React from "react";

type ContainerProps = { children: React.ReactNode };

export default function Container({ children }: ContainerProps) {
  const ref = React.useRef();

  const [variant, setVariant] = React.useState<"fill" | "outline" | "text">(
    "fill"
  );
  const [background, setBackground] = React.useState();
  const [color, setColor] = React.useState();

  return (
    <div>
      <div
        style={{
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.white,
        }}
      >
        <Button
          ref={ref}
          color={color}
          background={background}
          variant={variant}
        >
          Notr Button
        </Button>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
          <input
            name="variant"
            type="radio"
            value="fill"
            onChange={(e) => setVariant(e.target.value)}
          />
          <label htmlFor="" style={{ fontSize: "0.875rem" }}>
            Fill
          </label>
        </div>
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
          <input
            name="variant"
            type="radio"
            value="outline"
            onChange={(e) => setVariant(e.target.value)}
          />
          <label htmlFor="" style={{ fontSize: "0.875rem" }}>
            Outline
          </label>
        </div>
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
          <input
            name="variant"
            type="radio"
            value="text"
            onChange={(e) => setVariant(e.target.value)}
          />
          <label htmlFor="" style={{ fontSize: "0.875rem" }}>
            Text
          </label>
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
        <input
          type="color"
          defaultValue={colors.primary[600]}
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
          defaultValue={colors.white}
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
