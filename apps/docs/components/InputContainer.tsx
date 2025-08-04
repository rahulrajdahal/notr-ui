import { Input } from "@rahulrajdahal/notr-input";
import React from "react";

export default function InputContainer() {
  const ref = React.useRef();
  const [errors, setErrors] = React.useState();
  const [labelProps, setLabelProps] = React.useState();
  const [inputProps, setInputProps] = React.useState();

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
        <Input
          label="Notr Input"
          inputProps={inputProps}
          labelProps={labelProps}
          errors={errors}
        />
      </div>

      {/* <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <label htmlFor="labelProps">Label Props</label>
        <input
          type="text"
          placeholder="{}"
          onChange={(e) => setLabelProps(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <label htmlFor="inputProps">Input Props</label>
        <input
          type="text"
          placeholder="{}"
          onChange={(e) => setInputProps(e.target.value)}
        />
      </div>
      */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <label htmlFor="errors">Errors</label>
        <input
          type="text"
          placeholder="string[]"
          onChange={(e) => setErrors(e.target.value.split(","))}
        />
      </div>
    </div>
  );
}
