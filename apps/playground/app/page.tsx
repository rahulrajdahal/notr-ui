"use client";

import { CheckSquare } from "@meistericons/react";
import Button from "@rahulrajdahal/notr-button";
import { colors } from "@rahulrajdahal/notr-core";
import DebounceInput from "@rahulrajdahal/notr-debounceInput";
import Input from "@rahulrajdahal/notr-input";
import PasswordInput from "@rahulrajdahal/notr-passwordInput";
import Pill from "@rahulrajdahal/notr-pill";
import { useState } from "react";

export default function Page() {
  const [debounceValue, setDebounceValue] = useState("");
  const [debounceValue2, setDebounceValue2] = useState("");

  return (
    <main className="px-[12.5%] py-12">
      <h1 className="text-5xl font-bold">Notr Playground</h1>

      <div className="flex flex-col gap-4 mt-12">
        <h2 className="text-3xl font-semibold">Notr Buttons</h2>

        <div className="flex items-center gap-4">
          <Button>Notr</Button>
          <Button disabled>Notr</Button>

          <Button variant="fill">Notr Filled</Button>
          <Button variant="fill" disabled>
            Notr Filled Disabled
          </Button>

          <Button variant="outline">Notr Outline</Button>
          <Button variant="outline" disabled>
            Notr Outline Disabled
          </Button>

          <Button variant="text">Notr Text</Button>
          <Button variant="text" disabled>
            Notr Text Disabled
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-12">
        <h2 className="text-3xl font-semibold">Notr Inputs</h2>

        <div className="flex gap-4">
          <Input label="Notr Input" />
          <Input
            label="Notr Input with errors"
            errors={["Invalid Input", "Required"]}
          />
          <Input
            label="Notr Input with labelProps"
            labelProps={{
              title: "Notr Custom Label Props",
              style: { color: colors.primary[600] },
            }}
          />
          <Input
            label="Notr Input with inputProps"
            inputProps={{
              title: "Notr Custom Input Props",
              placeholder: "Input Props",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-12">
        <h2 className="text-3xl font-semibold">Notr Password Inputs</h2>

        <div className="flex gap-4 flex-wrap">
          <PasswordInput label="Notr Password Input" />
          <PasswordInput
            label="Notr Password Input With Forgot Password"
            forgotPassword={{ href: "./forgot-password" }}
          />
          <PasswordInput
            label="Notr Password Input with errors"
            errors={["Invalid Input", "Required"]}
          />
          <PasswordInput
            label="Notr Password Input with forgotPassword and errors"
            forgotPassword={{ href: "./forgot-password" }}
            errors={["Invalid Input", "Required"]}
          />
          <PasswordInput
            label="Notr Password Input with labelProps"
            labelProps={{
              title: "Notr Custom Label Props",
              style: { color: colors.primary[600] },
            }}
          />
          <PasswordInput
            label="Notr Password Input with inputProps"
            inputProps={{
              title: "Notr Custom Input Props",
              placeholder: "Input Props",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-12">
        <h2 className="text-3xl font-semibold">Notr Debounce Input</h2>

        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <DebounceInput
              value={debounceValue}
              onChange={(value) => setDebounceValue(value as string)}
              placeholder="Debounce Input"
            />
            <p className="text-sm">
              debounce: <span className="italic"> {debounceValue}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <DebounceInput
              value={debounceValue2}
              onChange={(value) => setDebounceValue2(value as string)}
              placeholder="Debounce Input with debounce"
              debounce={1000}
            />
            <p className="text-sm">
              debounce: <span className="italic"> {debounceValue2}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-12">
        <h2 className="text-3xl font-semibold">Notr Pill</h2>

        <div className="flex gap-8 w-full">
          <Pill text={"Pill"} count={3} />
          <Pill
            background={colors.gray[400]}
            color={colors.gray[600]}
            text={"Pill Icon"}
            icon={<CheckSquare />}
            count={3}
          />
        </div>
      </div>
    </main>
  );
}
