"use client";

import Button from "@rahulrajdahal/notr-button";
import { colors } from "@rahulrajdahal/notr-core";
import Input from "@rahulrajdahal/notr-input";

export default function page() {
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
    </main>
  );
}
